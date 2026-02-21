/**
 * @author    Magebit <info@magebit.com>
 * @copyright Copyright (c) Magebit, Ltd. (https://magebit.com)
 * @license   https://magebit.com/code-license
 */

(function () {
    'use strict';

    const MAX_TOPIC = 8;

    /**
     * Shuffle array (Fisher-Yates).
     * @param {Array} array
     * @returns {Array}
     */
    function shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    /**
     * Get sorted option keys (A, B, C, D).
     * @param {Object} options
     * @returns {string[]}
     */
    function getSortedOptionKeys(options) {
        if (!options || typeof options !== 'object') return [];
        return Object.keys(options).sort();
    }

    /**
     * Find a question by ID across all topics.
     * @param {string} questionId
     * @returns {Object|null}
     */
    function findQuestionById(questionId) {
        const topicDataGlobal = window.TOPIC_DATA;
        if (!topicDataGlobal) return null;
        for (let topic = 1; topic <= MAX_TOPIC; topic++) {
            const topicData = topicDataGlobal[topic];
            if (topicData && topicData.questions) {
                const question = topicData.questions.find(function (q) { return q.id === questionId; });
                if (question) return question;
            }
        }
        return null;
    }

    /**
     * Count total questions in selected topics.
     * @param {number[]} selectedTopics
     * @returns {number}
     */
    function countTopicQuestions(selectedTopics) {
        const topicDataGlobal = window.TOPIC_DATA;
        if (!topicDataGlobal || !selectedTopics.length) return 0;
        let total = 0;
        selectedTopics.forEach(function (topicNum) {
            const topicData = topicDataGlobal[topicNum];
            if (topicData && topicData.questions) total += topicData.questions.length;
        });
        return total;
    }

    /**
     * Estimated question count for full exam by official ratios.
     * @param {number} maxQuestions
     * @returns {number}
     */
    function calculateFullExamQuestions(maxQuestions) {
        const percentages = window.TOPIC_PERCENTAGES;
        if (!percentages) return 0;
        let total = 0;
        for (let topic = 1; topic <= MAX_TOPIC; topic++) {
            const percentage = percentages[topic] || 0;
            total += Math.round((maxQuestions * percentage) / 100);
        }
        return Math.min(total, maxQuestions);
    }

    /**
     * Build full exam questions maintaining official ratios.
     * @param {number} maxQuestions
     * @returns {Object[]}
     */
    function generateFullExam(maxQuestions) {
        const questions = [];
        const ratios = window.TOPIC_PERCENTAGES || {};
        const topicDataGlobal = window.TOPIC_DATA;
        for (let topic = 1; topic <= MAX_TOPIC; topic++) {
            const percentage = ratios[topic] || 0;
            const count = Math.round((maxQuestions * percentage) / 100);
            const topicData = topicDataGlobal && topicDataGlobal[topic];
            if (topicData && topicData.questions) {
                const available = shuffleArray(topicData.questions);
                questions.push.apply(questions, available.slice(0, count));
            }
        }
        return questions.slice(0, maxQuestions);
    }

    /**
     * Build questions from selected topics only.
     * @param {number[]} selectedTopics
     * @returns {Object[]}
     */
    function generateTopicStudy(selectedTopics) {
        const questions = [];
        const topicDataGlobal = window.TOPIC_DATA;
        if (!topicDataGlobal) return questions;
        selectedTopics.forEach(function (topicNum) {
            const topicData = topicDataGlobal[topicNum];
            if (topicData && topicData.questions) {
                questions.push.apply(questions, shuffleArray(topicData.questions));
            }
        });
        return questions;
    }

    /**
     * Calculate score from questions and selected answers.
     * @param {Object[]} questions
     * @param {Object} selectedAnswers
     * @returns {{ score: number, percentage: number }}
     */
    function calculateScore(questions, selectedAnswers) {
        let correctCount = 0;
        questions.forEach(function (question) {
            const selected = (selectedAnswers[question.id] || []).slice().sort().join(',');
            const correct = (question.correctAnswer || []).slice().sort().join(',');
            if (selected === correct && (selectedAnswers[question.id] || []).length === (question.correctAnswer || []).length) {
                correctCount++;
            }
        });
        const total = questions.length;
        return {
            score: correctCount,
            percentage: total ? Math.round((correctCount / total) * 100) : 0
        };
    }

    window.ExamEngine = {
        shuffleArray: shuffleArray,
        getSortedOptionKeys: getSortedOptionKeys,
        findQuestionById: findQuestionById,
        countTopicQuestions: countTopicQuestions,
        calculateFullExamQuestions: calculateFullExamQuestions,
        generateFullExam: generateFullExam,
        generateTopicStudy: generateTopicStudy,
        calculateScore: calculateScore
    };
})();
