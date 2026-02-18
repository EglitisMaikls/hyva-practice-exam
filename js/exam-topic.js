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
        activeStudyTopic: 1,
        activeStudySubsection: 0,
        
        examMode: '',
        selectedTopics: [],
        topicStudyOpen: false,
        expandedStudyTopics: {},
        expandedStudySubsections: {},
        examStarted: false,
        estimatedQuestions: 0,
        maxQuestions: 60,
        
        darkMode: localStorage.getItem('darkMode') === 'true' || false,

        /**
         * Initialize component
         */
        init() {
            document.documentElement.classList.toggle('dark-mode', this.darkMode);
            
            if (this.loadExamState()) {
                // Successfully restored saved state
                return;
            }
            
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
         * Find a question by its ID across all topics
         */
        findQuestionById(questionId) {
            if (!window.TOPIC_DATA) return null;
            
            for (let topic = 1; topic <= 8; topic++) {
                const topicData = window.TOPIC_DATA[topic];
                if (topicData && topicData.questions) {
                    const question = topicData.questions.find(q => q.id === questionId);
                    if (question) {
                        return question;
                    }
                }
            }
            
            return null;
        },
        
        /**
         * Save exam state to localStorage
         */
        saveExamState() {
            try {
                // Only save if exam has started
                if (!this.examStarted || this.questions.length === 0) {
                    return;
                }
                
                const state = {
                    examMode: this.examMode,
                    selectedTopics: this.selectedTopics,
                    examTitle: this.examTitle,
                    examStarted: this.examStarted,
                    submitted: this.submitted,
                    questionIds: this.questions.map(q => q.id),
                    selectedAnswers: { ...this.selectedAnswers },
                    showAnswers: { ...this.showAnswers },
                    score: this.score,
                    totalQuestions: this.totalQuestions,
                    percentage: this.percentage
                };
                
                localStorage.setItem('hyvaExamState', JSON.stringify(state));
            } catch (error) {
                console.error('Error saving exam state:', error);
                // Gracefully handle storage quota exceeded or other errors
            }
        },
        
        /**
         * Load exam state from localStorage
         */
        loadExamState() {
            try {
                const savedState = localStorage.getItem('hyvaExamState');
                if (!savedState) {
                    return false;
                }
                
                const state = JSON.parse(savedState);
                
                // Validate state structure
                if (!state.examMode || !state.questionIds || !Array.isArray(state.questionIds)) {
                    return false;
                }
                
                // Only restore if exam was started
                if (!state.examStarted) {
                    return false;
                }
                
                // Restore metadata
                this.examMode = state.examMode;
                this.selectedTopics = state.selectedTopics || [];
                this.examTitle = state.examTitle || '';
                this.examStarted = state.examStarted;
                this.submitted = state.submitted || false;
                this.score = state.score || 0;
                this.totalQuestions = state.totalQuestions || 0;
                this.percentage = state.percentage || 0;
                
                // Reconstruct questions array from saved IDs
                const restoredQuestions = [];
                const missingQuestions = [];
                
                state.questionIds.forEach((questionId, index) => {
                    const question = this.findQuestionById(questionId);
                    if (question) {
                        // Create a copy to avoid mutating original
                        const questionCopy = { ...question };
                        questionCopy.questionNumber = index + 1;
                        restoredQuestions.push(questionCopy);
                    } else {
                        missingQuestions.push(questionId);
                    }
                });
                
                if (missingQuestions.length > 0) {
                    console.warn(`Could not restore ${missingQuestions.length} question(s):`, missingQuestions);
                }
                
                if (restoredQuestions.length === 0) {
                    // No valid questions found, don't restore
                    return false;
                }
                
                this.questions = restoredQuestions;
                this.totalQuestions = restoredQuestions.length;
                
                // Restore user progress
                this.selectedAnswers = state.selectedAnswers || {};
                this.showAnswers = state.showAnswers || {};
                
                // Initialize any missing entries
                this.questions.forEach(question => {
                    if (!this.selectedAnswers[question.id]) {
                        this.selectedAnswers[question.id] = [];
                    }
                    if (this.showAnswers[question.id] === undefined) {
                        this.showAnswers[question.id] = false;
                    }
                });
                
                // Ensure loading and error states are cleared
                this.loading = false;
                this.error = null;
                
                // Scroll to top when restoring
                window.scrollTo({ top: 0, behavior: 'smooth' });
                
                return true;
            } catch (error) {
                console.error('Error loading exam state:', error);
                // Clear corrupted state
                this.clearExamState();
                return false;
            }
        },
        
        /**
         * Clear saved exam state
         */
        clearExamState() {
            try {
                localStorage.removeItem('hyvaExamState');
            } catch (error) {
                console.error('Error clearing exam state:', error);
            }
        },
        
        /**
         * Toggle topic study block visibility
         */
        toggleTopicStudy() {
            this.topicStudyOpen = !this.topicStudyOpen;

            if (this.topicStudyOpen) {
                // Rule: Open Topic 1 by default if nothing is selected,
                // OR ensure only the active topic is expanded if returning.

                // If we want to strictly reset to Topic 1.1 every time we open the "Study by Topic" section:
                this.expandedStudyTopics = { 1: true };
                this.activeStudyTopic = 1;
                this.activeStudySubsection = 0;

                // Alternatively, if you wanted to remember the last position but ensure accordion style:
                /*
                if (!this.activeStudyTopic) {
                    this.activeStudyTopic = 1;
                    this.activeStudySubsection = 0;
                }
                this.expandedStudyTopics = {};
                this.expandedStudyTopics[this.activeStudyTopic] = true;
                */
            }
        },

        setActiveStudy(topicNum, subIndex) {
            this.activeStudyTopic = topicNum;
            this.activeStudySubsection = subIndex;

            // On mobile, you might want to auto-scroll to content,
            // but for desktop 2-col layout this isn't strictly necessary.
            // window.scrollTo({ top: document.querySelector('.study-content-viewer').offsetTop - 20, behavior: 'smooth' });
        },

        // ADD HELPER TO GET ACTIVE CONTENT Safely
        getActiveStudyContent() {
            const topic = this.getStudyTopic(this.activeStudyTopic);
            if (!topic || !topic.subsections || !topic.subsections[this.activeStudySubsection]) {
                return null;
            }
            return topic.subsections[this.activeStudySubsection];
        },

        /**
         * Get study topic data by ID
         */
        getStudyTopic(topicNum) {
            return window.STUDY_CONTENT && window.STUDY_CONTENT[topicNum] ? window.STUDY_CONTENT[topicNum] : null;
        },

        /**
         * Toggle study topic expand/collapse
         */
        toggleStudyTopic(topicNum) {
            // If clicking the topic that is already open
            if (this.expandedStudyTopics[topicNum]) {
                // Optional: You can choose to close it (collapse)
                // OR do nothing (since it's the active view).
                // Let's toggle it closed for standard accordion behavior,
                // but keep the content visible on the right.
                this.expandedStudyTopics[topicNum] = false;
                return;
            }

            // If clicking a NEW topic:
            // 1. Close all other topics (reset the object)
            this.expandedStudyTopics = {};

            // 2. Open the selected topic
            this.expandedStudyTopics[topicNum] = true;

            // 3. Auto-select the first subsection (index 0)
            this.activeStudyTopic = topicNum;
            this.activeStudySubsection = 0;

            // Optional: Scroll back to top of content viewer if needed
            const viewer = document.querySelector('.study-content-viewer');
            if (viewer) viewer.scrollTop = 0;
        },

        /**
         * Toggle study subsection expand/collapse
         */
        toggleStudySubsection(topicNum, subIndex) {
            const key = `${topicNum}-${subIndex}`;
            this.expandedStudySubsections[key] = !this.expandedStudySubsections[key];
            this.expandedStudySubsections = { ...this.expandedStudySubsections };
        },

        /**
         * Check if topic study can be started (for exam mode)
         */
        canStartTopicStudy() {
            return this.selectedTopics.length > 0;
        },

        /**
         * Start topic study with selected topics
         */
        startTopicStudy() {
            if (!this.canStartTopicStudy()) return;
            this.examMode = 'topic';
            this.updatePreview();
            this.startExam();
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
                'topic': 'Questions by topics'
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
                const topicInfo = this.selectedTopics.map(t => `${this.getTopicName(t)} (topic ${t})`).join(', ');
                this.examTitle = `Questions by topics - ${topicInfo}`;
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
            
            // Save state after generating exam
            this.saveExamState();
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
         * Get sorted option keys (A, B, C, D order)
         */
        getSortedOptionKeys(options) {
            if (!options || typeof options !== 'object') {
                return [];
            }
            return Object.keys(options).sort();
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

                // Save state after loading legacy exam
                this.saveExamState();

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
            
            // Clear saved state when going back
            this.clearExamState();
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
            
            // Clear saved state when resetting
            this.clearExamState();
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
            
            // Auto-save state after answer change
            this.saveExamState();
        },

        /**
         * Toggle answer visibility
         */
        toggleAnswer(questionId) {
            this.showAnswers[questionId] = !this.showAnswers[questionId];
            
            // Auto-save state after toggling answer visibility
            this.saveExamState();
        },

        /**
         * Submit exam and calculate score
         */
        submitExam() {
            this.submitted = true;
            this.calculateScore();
            
            // Save state after submission
            this.saveExamState();
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

