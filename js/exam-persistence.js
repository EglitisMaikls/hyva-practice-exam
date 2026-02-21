/**
 * @author    Magebit <info@magebit.com>
 * @copyright Copyright (c) Magebit, Ltd. (https://magebit.com)
 * @license   https://magebit.com/code-license
 */

(function () {
    'use strict';

    const STORAGE_KEY = 'hyvaExamState';

    /**
     * Build URL for a view (main = no view param, others = ?view=exam|study).
     * @param {string} view
     * @returns {string}
     */
    function getViewUrl(view) {
        const base = window.location.pathname || '/';
        const params = new URLSearchParams(window.location.search);
        if (view === 'main') {
            params.delete('view');
        } else {
            params.set('view', view);
        }
        const qs = params.toString();
        return base + (qs ? '?' + qs : '');
    }

    /**
     * Push a new history entry for the given view.
     * @param {string} view
     */
    function pushViewState(view) {
        if (!window.history || !window.history.pushState) return;
        window.history.pushState({ view: view }, '', getViewUrl(view));
    }

    /**
     * Replace current history entry with the given view.
     * @param {string} view
     */
    function replaceViewState(view) {
        if (!window.history || !window.history.replaceState) return;
        window.history.replaceState({ view: view }, '', getViewUrl(view));
    }

    /**
     * Set up popstate listener so Back/Forward calls the callback with view name.
     * @param {function(string): void} onPopState
     */
    function setupHistoryApi(onPopState) {
        if (!window.history || !window.history.pushState) return;
        window.addEventListener('popstate', function (event) {
            const view = (event.state && event.state.view) ? event.state.view : 'main';
            onPopState(view);
        });
    }

    /**
     * Ensure initial entry has state so we can pop back to it.
     * Call when on main view with no state.
     */
    function ensureInitialState() {
        if (window.history.state === null) {
            window.history.replaceState({ view: 'main' }, '', getViewUrl('main'));
        }
    }

    /**
     * Save exam state to localStorage.
     * @param {Object} state
     */
    function saveExamState(state) {
        try {
            if (!state.examStarted || !state.questions || !state.questions.length) return;
            const payload = {
                examMode: state.examMode,
                selectedTopics: state.selectedTopics || [],
                examTitle: state.examTitle,
                examStarted: state.examStarted,
                submitted: state.submitted || false,
                questionIds: state.questions.map(function (q) { return q.id; }),
                selectedAnswers: state.selectedAnswers ? { ...state.selectedAnswers } : {},
                showAnswers: state.showAnswers ? { ...state.showAnswers } : {},
                score: state.score || 0,
                totalQuestions: state.totalQuestions || 0,
                percentage: state.percentage || 0
            };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
        } catch (e) {
            console.error('Error saving exam state:', e);
        }
    }

    /**
     * Load exam state from localStorage.
     * @returns {Object|null} Raw state (questionIds, not questions array) or null
     */
    function loadExamState() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (!raw) return null;
            const state = JSON.parse(raw);
            if (!state.examMode || !state.questionIds || !Array.isArray(state.questionIds)) return null;
            if (!state.examStarted) return null;
            return state;
        } catch (e) {
            console.error('Error loading exam state:', e);
            return null;
        }
    }

    /**
     * Clear saved exam state from localStorage.
     */
    function clearExamState() {
        try {
            localStorage.removeItem(STORAGE_KEY);
        } catch (e) {
            console.error('Error clearing exam state:', e);
        }
    }

    window.ExamPersistence = {
        getViewUrl: getViewUrl,
        pushViewState: pushViewState,
        replaceViewState: replaceViewState,
        setupHistoryApi: setupHistoryApi,
        ensureInitialState: ensureInitialState,
        saveExamState: saveExamState,
        loadExamState: loadExamState,
        clearExamState: clearExamState
    };
})();
