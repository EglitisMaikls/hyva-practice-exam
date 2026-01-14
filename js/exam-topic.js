/**
 * Alpine.js Exam Component with Topic-Based Study
 */

function exam() {
    return {
        questions: [],
        selectedAnswers: {},
        showAnswers: {},
        submitted: false,
        loading: false,
        error: null,
        examTitle: '',
        score: 0,
        totalQuestions: 0,
        percentage: 0,
        
        // Mode and topic selection
        examMode: '',
        selectedTopics: [],
        examStarted: false,
        estimatedQuestions: 0,
        maxQuestions: 60,
        
        // Dark mode
        darkMode: localStorage.getItem('darkMode') === 'true' || false,

        /**
         * Initialize component
         */
        init() {
            // Initialize dark mode
            document.documentElement.classList.toggle('dark-mode', this.darkMode);
            
            // Check URL parameters for legacy support
            const urlParams = new URLSearchParams(window.location.search);
            const examParam = urlParams.get('exam');
            const modeParam = urlParams.get('mode');
            const topicsParam = urlParams.get('topics');
            
            if (examParam) {
                // Legacy mode: load numbered exam
                this.loadLegacyExam(examParam);
            } else if (modeParam) {
                // New mode from URL
                this.examMode = modeParam;
                if (topicsParam) {
                    this.selectedTopics = topicsParam.split(',').map(t => parseInt(t));
                }
                this.updatePreview();
            } else {
                // Default: show mode selection
                this.examMode = '';
            }
        },
        
        /**
         * Toggle dark mode
         */
        toggleDarkMode() {
            this.darkMode = !this.darkMode;
            localStorage.setItem('darkMode', this.darkMode);
            document.documentElement.classList.toggle('dark-mode', this.darkMode);
        },

        /**
         * Get topic name
         */
        getTopicName(topicNum) {
            return window.TOPIC_NAMES && window.TOPIC_NAMES[topicNum] 
                ? window.TOPIC_NAMES[topicNum] 
                : `Topic ${topicNum}`;
        },

        /**
         * Get mode display name
         */
        getModeName() {
            const names = {
                'full': 'Full Exam',
                'topic': 'Topic Study'
            };
            return names[this.examMode] || '';
        },

        /**
         * Update preview information
         */
        updatePreview() {
            if (!this.examMode) {
                this.estimatedQuestions = 0;
                return;
            }

            if (this.examMode === 'full') {
                // Full exam: calculate based on official ratios (max 60)
                this.estimatedQuestions = this.calculateFullExamQuestions();
            } else if (this.examMode === 'topic') {
                // Topic study: show all questions from selected topics
                this.estimatedQuestions = this.countTopicQuestions();
            }
        },

        /**
         * Calculate questions for full exam based on official ratios
         */
        calculateFullExamQuestions() {
            if (!window.TOPIC_PERCENTAGES) return 0;
            
            let total = 0;
            for (let topic = 1; topic <= 8; topic++) {
                const percentage = window.TOPIC_PERCENTAGES[topic] || 0;
                const count = Math.round((this.maxQuestions * percentage) / 100);
                total += count;
            }
            
            // Adjust to exactly maxQuestions
            return Math.min(total, this.maxQuestions);
        },

        /**
         * Count total questions in selected topics
         */
        countTopicQuestions() {
            if (!window.TOPIC_DATA || this.selectedTopics.length === 0) return 0;
            
            let total = 0;
            this.selectedTopics.forEach(topicNum => {
                const topicData = window.TOPIC_DATA[topicNum];
                if (topicData && topicData.questions) {
                    total += topicData.questions.length;
                }
            });
            
            return total;
        },

        /**
         * Check if exam can be started
         */
        canStartExam() {
            if (!this.examMode) return false;
            
            if (this.examMode === 'full') {
                return true;
            }
            
            if (this.examMode === 'topic' && this.selectedTopics.length === 0) {
                return false;
            }
            
            return this.estimatedQuestions > 0;
        },

        /**
         * Start the exam
         */
        startExam() {
            if (!this.canStartExam()) return;
            
            this.loading = true;
            this.error = null;
            this.examStarted = true;
            
            // Scroll to top when exam starts
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            try {
                this.generateExam();
                this.loading = false;
            } catch (error) {
                this.error = error.message;
                this.loading = false;
                console.error('Error generating exam:', error);
            }
        },

        /**
         * Generate exam based on mode and selected topics
         */
        generateExam() {
            if (!window.TOPIC_DATA) {
                throw new Error('Topic data not loaded. Please ensure all topic data files are included.');
            }

            let examQuestions = [];

            if (this.examMode === 'full') {
                // Full exam: maintain official ratios
                examQuestions = this.generateFullExam();
                this.examTitle = 'Full Practice Exam';
            } else if (this.examMode === 'topic') {
                // Topic study: all questions from selected topics
                examQuestions = this.generateTopicStudy();
                const topicNames = this.selectedTopics.map(t => this.getTopicName(t)).join(', ');
                this.examTitle = `Topic Study - ${topicNames}`;
            }

            // Shuffle questions
            examQuestions = this.shuffleArray(examQuestions);

            // Renumber questions
            examQuestions.forEach((question, index) => {
                question.questionNumber = index + 1;
            });

            this.questions = examQuestions;
            this.totalQuestions = examQuestions.length;

            // Initialize selectedAnswers and showAnswers
            this.questions.forEach(question => {
                if (!this.selectedAnswers[question.id]) {
                    this.selectedAnswers[question.id] = [];
                }
                if (this.showAnswers[question.id] === undefined) {
                    this.showAnswers[question.id] = false;
                }
            });
        },

        /**
         * Generate full exam maintaining official ratios
         */
        generateFullExam() {
            const questions = [];
            const ratios = window.TOPIC_PERCENTAGES || {};
            
            for (let topic = 1; topic <= 8; topic++) {
                const percentage = ratios[topic] || 0;
                const count = Math.round((this.maxQuestions * percentage) / 100);
                
                const topicData = window.TOPIC_DATA[topic];
                if (topicData && topicData.questions) {
                    const available = [...topicData.questions];
                    this.shuffleArray(available);
                    const selected = available.slice(0, count);
                    questions.push(...selected);
                }
            }
            
            // Trim to maxQuestions if needed
            return questions.slice(0, this.maxQuestions);
        },

        /**
         * Generate topic study exam
         */
        generateTopicStudy() {
            const questions = [];
            
            this.selectedTopics.forEach(topicNum => {
                const topicData = window.TOPIC_DATA[topicNum];
                if (topicData && topicData.questions) {
                    const available = [...topicData.questions];
                    this.shuffleArray(available);
                    questions.push(...available);
                }
            });
            
            return questions;
        },

        /**
         * Shuffle array (Fisher-Yates algorithm)
         */
        shuffleArray(array) {
            const shuffled = [...array];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        },

        /**
         * Load legacy numbered exam (for backward compatibility)
         */
        async loadLegacyExam(examNumber) {
            try {
                this.loading = true;
                this.error = null;
                this.examStarted = true;

                // Scroll to top when exam starts
                window.scrollTo({ top: 0, behavior: 'smooth' });

                if (typeof window.EXAM_DATA === 'undefined') {
                    throw new Error('Legacy exam data not loaded.');
                }

                const data = window.EXAM_DATA[examNumber];
                if (!data) {
                    throw new Error(`Exam ${examNumber} not found.`);
                }

                this.questions = data.questions || [];
                this.examTitle = data.title || `Practice Exam ${examNumber}`;
                this.totalQuestions = this.questions.length;

                this.questions.forEach(question => {
                    if (!this.selectedAnswers[question.id]) {
                        this.selectedAnswers[question.id] = [];
                    }
                    if (this.showAnswers[question.id] === undefined) {
                        this.showAnswers[question.id] = false;
                    }
                });

                this.loading = false;
            } catch (error) {
                this.error = error.message;
                this.loading = false;
            }
        },

        /**
         * Go back to mode selection
         */
        backToModeSelection() {
            this.examStarted = false;
            this.questions = [];
            this.selectedAnswers = {};
            this.showAnswers = {};
            this.submitted = false;
            this.score = 0;
            this.percentage = 0;
            this.loading = false;
            this.error = null;
            // Keep examMode and selectedTopics so user can see their previous selection
        },

        /**
         * Reset exam to start over
         */
        resetExam() {
            this.examStarted = false;
            this.questions = [];
            this.selectedAnswers = {};
            this.showAnswers = {};
            this.submitted = false;
            this.score = 0;
            this.percentage = 0;
            this.examMode = '';
            this.selectedTopics = [];
            this.estimatedQuestions = 0;
        },

        /**
         * Handle answer selection change
         */
        handleAnswerChange(question, optionKey, event) {
            const questionId = question.id;
            
            if (!this.selectedAnswers[questionId]) {
                this.selectedAnswers[questionId] = [];
            }

            if (question.isMultiple) {
                // Multiple choice - toggle option
                if (event.target.checked) {
                    if (!this.selectedAnswers[questionId].includes(optionKey)) {
                        this.selectedAnswers[questionId].push(optionKey);
                    }
                } else {
                    this.selectedAnswers[questionId] = this.selectedAnswers[questionId].filter(
                        key => key !== optionKey
                    );
                }
            } else {
                // Single choice - replace selection
                if (event.target.checked) {
                    this.selectedAnswers[questionId] = [optionKey];
                    // Uncheck other options
                    document.querySelectorAll(`input[name="q_${questionId}"]`).forEach(input => {
                        if (input.value !== optionKey) {
                            input.checked = false;
                        }
                    });
                } else {
                    this.selectedAnswers[questionId] = [];
                }
            }
        },

        /**
         * Toggle answer visibility
         */
        toggleAnswer(questionId) {
            this.showAnswers[questionId] = !this.showAnswers[questionId];
        },

        /**
         * Submit exam and calculate score
         */
        submitExam() {
            this.submitted = true;
            this.calculateScore();
        },

        /**
         * Calculate exam score
         */
        calculateScore() {
            let correctCount = 0;

            this.questions.forEach(question => {
                const selected = this.selectedAnswers[question.id] || [];
                const correct = question.correctAnswer || [];

                // Sort arrays for comparison
                const selectedSorted = [...selected].sort().join(',');
                const correctSorted = [...correct].sort().join(',');

                if (selectedSorted === correctSorted && selected.length === correct.length) {
                    correctCount++;
                }
            });

            this.score = correctCount;
            this.percentage = Math.round((correctCount / this.totalQuestions) * 100);

            // Show all answers
            this.questions.forEach(question => {
                this.showAnswers[question.id] = true;
            });
        }
    };
}

