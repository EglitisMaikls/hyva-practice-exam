/**
 * @author    Magebit <info@magebit.com>
 * @copyright Copyright (c) Magebit, Ltd. (https://magebit.com)
 * @license   https://magebit.com/code-license
 */

function exam() {
    const Engine = window.ExamEngine;
    const Persist = window.ExamPersistence;

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

        init() {
            document.documentElement.classList.toggle('dark-mode', this.darkMode);
            Persist.setupHistoryApi(this.applyView.bind(this));

            if (this.restoreExamState()) {
                Persist.replaceViewState('exam');
                return;
            }

            const urlParams = new URLSearchParams(window.location.search);
            const examParam = urlParams.get('exam');
            const modeParam = urlParams.get('mode');
            const topicsParam = urlParams.get('topics');

            if (examParam) {
                this.loadLegacyExam(examParam);
            } else if (modeParam) {
                this.examMode = modeParam;
                if (topicsParam) {
                    this.selectedTopics = topicsParam.split(',').map(function (t) { return parseInt(t, 10); });
                }
                this.updatePreview();
            } else {
                this.examMode = '';
            }

            if (!this.examStarted && !this.topicStudyOpen) {
                Persist.ensureInitialState();
            }
        },

        applyView(view) {
            if (view === 'main') {
                this.backToModeSelection();
                this.closeTopicStudy();
            } else if (view === 'study') {
                this.examStarted = false;
                this.topicStudyOpen = true;
                if (!this.expandedStudyTopics[1]) {
                    this.expandedStudyTopics = { 1: true };
                    this.activeStudyTopic = 1;
                    this.activeStudySubsection = 0;
                }
            } else if (view === 'exam') {
                this.restoreExamState();
            }
        },

        restoreExamState() {
            const state = Persist.loadExamState();
            if (!state) return false;

            this.examMode = state.examMode;
            this.selectedTopics = state.selectedTopics || [];
            this.examTitle = state.examTitle || '';
            this.examStarted = state.examStarted;
            this.submitted = state.submitted || false;
            this.score = state.score || 0;
            this.totalQuestions = state.totalQuestions || 0;
            this.percentage = state.percentage || 0;

            const restoredQuestions = [];
            const missingIds = [];
            state.questionIds.forEach(function (questionId, index) {
                const question = Engine.findQuestionById(questionId);
                if (question) {
                    const copy = { ...question };
                    copy.questionNumber = index + 1;
                    restoredQuestions.push(copy);
                } else {
                    missingIds.push(questionId);
                }
            });

            if (missingIds.length > 0) {
                console.warn('Could not restore ' + missingIds.length + ' question(s):', missingIds);
            }
            if (restoredQuestions.length === 0) return false;

            this.questions = restoredQuestions;
            this.totalQuestions = restoredQuestions.length;
            this.selectedAnswers = state.selectedAnswers || {};
            this.showAnswers = state.showAnswers || {};

            this.questions.forEach(function (question) {
                if (!this.selectedAnswers[question.id]) this.selectedAnswers[question.id] = [];
                if (this.showAnswers[question.id] === undefined) this.showAnswers[question.id] = false;
            }.bind(this));

            this.loading = false;
            this.error = null;
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return true;
        },

        persistExamState() {
            Persist.saveExamState({
                examMode: this.examMode,
                selectedTopics: this.selectedTopics,
                examTitle: this.examTitle,
                examStarted: this.examStarted,
                submitted: this.submitted,
                questions: this.questions,
                selectedAnswers: this.selectedAnswers,
                showAnswers: this.showAnswers,
                score: this.score,
                totalQuestions: this.totalQuestions,
                percentage: this.percentage
            });
        },

        toggleTopicStudy() {
            this.topicStudyOpen = !this.topicStudyOpen;
            if (this.topicStudyOpen) {
                this.expandedStudyTopics = { 1: true };
                this.activeStudyTopic = 1;
                this.activeStudySubsection = 0;
                Persist.pushViewState('study');
            }
        },

        closeTopicStudy() {
            this.topicStudyOpen = false;
            Persist.replaceViewState('main');
        },

        setActiveStudy(topicNum, subIndex) {
            this.activeStudyTopic = topicNum;
            this.activeStudySubsection = subIndex;
            const viewer = document.querySelector('.study-content-viewer');
            if (viewer) window.scrollTo({ top: viewer.offsetTop - 20, behavior: 'smooth' });
        },

        getActiveStudyContent() {
            const topic = this.getStudyTopic(this.activeStudyTopic);
            if (!topic || !topic.subsections || !topic.subsections[this.activeStudySubsection]) return null;
            return topic.subsections[this.activeStudySubsection];
        },

        getStudyTopic(topicNum) {
            return (window.STUDY_CONTENT && window.STUDY_CONTENT[topicNum]) ? window.STUDY_CONTENT[topicNum] : null;
        },

        toggleStudyTopic(topicNum) {
            if (this.expandedStudyTopics[topicNum]) {
                this.expandedStudyTopics[topicNum] = false;
                return;
            }
            this.expandedStudyTopics = {};
            this.expandedStudyTopics[topicNum] = true;
            this.activeStudyTopic = topicNum;
            this.activeStudySubsection = 0;
            const viewer = document.querySelector('.study-content-viewer');
            if (viewer) viewer.scrollTop = 0;
        },

        toggleStudySubsection(topicNum, subIndex) {
            const key = topicNum + '-' + subIndex;
            this.expandedStudySubsections[key] = !this.expandedStudySubsections[key];
            this.expandedStudySubsections = { ...this.expandedStudySubsections };
        },

        canStartTopicStudy() {
            return this.selectedTopics.length > 0;
        },

        startTopicStudy() {
            if (!this.canStartTopicStudy()) return;
            this.examMode = 'topic';
            this.updatePreview();
            this.startExam();
        },

        toggleDarkMode() {
            this.darkMode = !this.darkMode;
            localStorage.setItem('darkMode', this.darkMode);
            document.documentElement.classList.toggle('dark-mode', this.darkMode);
        },

        getTopicName(topicNum) {
            return (window.TOPIC_NAMES && window.TOPIC_NAMES[topicNum]) ? window.TOPIC_NAMES[topicNum] : 'Topic ' + topicNum;
        },

        getModeName() {
            const names = { 'full': 'Full Exam', 'topic': 'Questions by topics' };
            return names[this.examMode] || '';
        },

        updatePreview() {
            if (!this.examMode) {
                this.estimatedQuestions = 0;
                return;
            }
            if (this.examMode === 'full') {
                this.estimatedQuestions = Engine.calculateFullExamQuestions(this.maxQuestions);
            } else if (this.examMode === 'topic') {
                this.estimatedQuestions = Engine.countTopicQuestions(this.selectedTopics);
            }
        },

        canStartExam() {
            if (!this.examMode) return false;
            if (this.examMode === 'full') return true;
            if (this.examMode === 'topic' && this.selectedTopics.length === 0) return false;
            return this.estimatedQuestions > 0;
        },

        startExam() {
            if (!this.canStartExam()) return;
            this.loading = true;
            this.error = null;
            this.examStarted = true;
            window.scrollTo({ top: 0, behavior: 'smooth' });

            try {
                this.generateExam();
                this.loading = false;
                Persist.pushViewState('exam');
            } catch (err) {
                this.error = err.message;
                this.loading = false;
                console.error('Error generating exam:', err);
            }
        },

        generateExam() {
            if (!window.TOPIC_DATA) {
                throw new Error('Topic data not loaded. Please ensure all topic data files are included.');
            }

            let examQuestions;
            if (this.examMode === 'full') {
                examQuestions = Engine.generateFullExam(this.maxQuestions);
                this.examTitle = 'Full Practice Exam';
            } else {
                examQuestions = Engine.generateTopicStudy(this.selectedTopics);
                const topicInfo = this.selectedTopics.map(function (t) {
                    return this.getTopicName(t) + ' (topic ' + t + ')';
                }.bind(this)).join(', ');
                this.examTitle = 'Questions by topics - ' + topicInfo;
            }

            examQuestions = Engine.shuffleArray(examQuestions);
            examQuestions.forEach(function (q, index) {
                q.questionNumber = index + 1;
            });

            this.questions = examQuestions;
            this.totalQuestions = examQuestions.length;

            this.questions.forEach(function (question) {
                if (!this.selectedAnswers[question.id]) this.selectedAnswers[question.id] = [];
                if (this.showAnswers[question.id] === undefined) this.showAnswers[question.id] = false;
            }.bind(this));

            this.persistExamState();
        },

        getSortedOptionKeys(options) {
            return Engine.getSortedOptionKeys(options);
        },

        async loadLegacyExam(examNumber) {
            try {
                this.loading = true;
                this.error = null;
                this.examStarted = true;
                window.scrollTo({ top: 0, behavior: 'smooth' });

                if (typeof window.EXAM_DATA === 'undefined') {
                    throw new Error('Legacy exam data not loaded.');
                }
                const data = window.EXAM_DATA[examNumber];
                if (!data) {
                    throw new Error('Exam ' + examNumber + ' not found.');
                }

                this.questions = data.questions || [];
                this.examTitle = data.title || ('Practice Exam ' + examNumber);
                this.totalQuestions = this.questions.length;

                this.questions.forEach(function (question) {
                    if (!this.selectedAnswers[question.id]) this.selectedAnswers[question.id] = [];
                    if (this.showAnswers[question.id] === undefined) this.showAnswers[question.id] = false;
                }.bind(this));

                this.persistExamState();
                Persist.replaceViewState('exam');
                this.loading = false;
            } catch (err) {
                this.error = err.message;
                this.loading = false;
            }
        },

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
            Persist.clearExamState();
            Persist.replaceViewState('main');
        },

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
            Persist.clearExamState();
        },

        handleAnswerChange(question, optionKey, event) {
            const questionId = question.id;
            if (!this.selectedAnswers[questionId]) this.selectedAnswers[questionId] = [];

            if (question.isMultiple) {
                if (event.target.checked) {
                    if (!this.selectedAnswers[questionId].includes(optionKey)) {
                        this.selectedAnswers[questionId].push(optionKey);
                    }
                } else {
                    this.selectedAnswers[questionId] = this.selectedAnswers[questionId].filter(function (k) { return k !== optionKey; });
                }
            } else {
                if (event.target.checked) {
                    this.selectedAnswers[questionId] = [optionKey];
                    document.querySelectorAll('input[name="q_' + questionId + '"]').forEach(function (input) {
                        if (input.value !== optionKey) input.checked = false;
                    });
                } else {
                    this.selectedAnswers[questionId] = [];
                }
            }
            this.persistExamState();
        },

        toggleAnswer(questionId) {
            this.showAnswers[questionId] = !this.showAnswers[questionId];
            this.persistExamState();
        },

        submitExam() {
            this.submitted = true;
            const result = Engine.calculateScore(this.questions, this.selectedAnswers);
            this.score = result.score;
            this.percentage = result.percentage;
            this.questions.forEach(function (question) {
                this.showAnswers[question.id] = true;
            }.bind(this));
            this.persistExamState();
        }
    };
}
