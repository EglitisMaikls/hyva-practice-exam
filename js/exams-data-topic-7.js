/**
 * @author    Magebit <info@magebit.com>
 * @copyright Copyright (c) Magebit, Ltd. (https://magebit.com)
 * @license   https://magebit.com/code-license
 */

window.TOPIC_DATA = window.TOPIC_DATA || {};
window.TOPIC_DATA[7] = {
    "topicNumber": 7,
    "topicName": "Frontend Performance",
    "questionCount": 25,
    "questions": [
        {
            "question": "What does FCP stand for in web performance metrics?",
            "options": {
                "A": "First Contentful Paint",
                "D": "First Complete Page",
                "C": "Fast Content Process",
                "B": "Full Content Paint"
            },
            "correctAnswer": [
                "A"
            ],
            "explanation": "<p>FCP (First Contentful Paint) measures when the first content is rendered on the screen, indicating when users start seeing content.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/building-your-theme/preserving-good-google-page-rank-metrics.html\" target=\"_blank\" rel=\"noopener\">Optimizing Core Web Vitals and Google Page Speed</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0095",
            "topic": 7,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What does LCP stand for and what does it measure?",
            "options": {
                "C": "Last Contentful Paint - measures when the last element is painted",
                "B": "Largest Contentful Paint - measures when the largest content element is rendered",
                "D": "Longest Content Process - measures content processing time",
                "A": "Latest Content Paint - measures the latest paint event"
            },
            "correctAnswer": [
                "B"
            ],
            "explanation": "<p>LCP (Largest Contentful Paint) measures when the largest content element (image, text block, etc.) becomes visible, indicating perceived load speed.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/building-your-theme/preserving-good-google-page-rank-metrics.html\" target=\"_blank\" rel=\"noopener\">Optimizing Core Web Vitals and Google Page Speed</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0096",
            "topic": 7,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What does CLS measure?",
            "options": {
                "D": "Cumulative Layout Shift - measures visual stability",
                "A": "Content Load Speed - measures how fast content loads",
                "C": "Component Load Sequence - measures load order",
                "B": "Cached Load Status - measures cache effectiveness"
            },
            "correctAnswer": [
                "D"
            ],
            "explanation": "<p>CLS (Cumulative Layout Shift) measures visual stability by quantifying how much visible content shifts during page load.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/building-your-theme/preserving-good-google-page-rank-metrics.html\" target=\"_blank\" rel=\"noopener\">Optimizing Core Web Vitals and Google Page Speed</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0097",
            "topic": 7,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What is the dependency relationship between performance metrics and TTFB?",
            "options": {
                "B": "TTFB has no impact on other metrics",
                "A": "All metrics depend on TTFB as the foundation",
                "C": "TTFB only affects LCP",
                "D": "TTFB is independent of other metrics"
            },
            "correctAnswer": [
                "A"
            ],
            "explanation": "<p>TTFB (Time to First Byte) is the foundation metric - all other metrics (FCP, LCP, INP, etc.) depend on TTFB as content cannot render until the server responds.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/faqs/performance-optimization.html\" target=\"_blank\" rel=\"noopener\">Performance optimization</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0098",
            "topic": 7,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "How can excessive DOM size issues be resolved?",
            "options": {
                "D": "Add more DOM elements",
                "B": "Use x-defer or x-intersect to defer rendering below-the-fold content",
                "C": "Load all content immediately",
                "A": "Use larger images"
            },
            "correctAnswer": [
                "B"
            ],
            "explanation": "<p>Excessive DOM size can be reduced by deferring non-critical content using Alpine directives like x-defer or x-intersect, loading content only when needed.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/faqs/performance-optimization.html\" target=\"_blank\" rel=\"noopener\">Performance optimization</a> (Hyvä docs)</li><li><a href=\"https://docs.hyva.io/hyva-themes/working-with-alpinejs/alpine-plugins/x-defer.html\" target=\"_blank\" rel=\"noopener\">Alpine.js x-defer plugin</a> (Hyvä docs)</li><li><a href=\"https://docs.hyva.io/hyva-themes/working-with-alpinejs/alpine-plugins/x-intersect.html\" target=\"_blank\" rel=\"noopener\">Alpine.js x-intersect plugin</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0099",
            "topic": 7,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What does INP measure in web performance?",
            "options": {
                "D": "Initial Network Protocol",
                "B": "Interaction to Next Paint - measures responsiveness to user interactions",
                "A": "Internal Navigation Process",
                "C": "Image Network Performance"
            },
            "correctAnswer": [
                "B"
            ],
            "explanation": "<p>INP (Interaction to Next Paint) measures the time from user interaction (click, tap, keypress) to when the browser can paint the next frame, indicating page responsiveness.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/building-your-theme/preserving-good-google-page-rank-metrics.html\" target=\"_blank\" rel=\"noopener\">Optimizing Core Web Vitals and Google Page Speed</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0100",
            "topic": 7,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What does TBT stand for and what does it measure?",
            "options": {
                "B": "Total Block Time - measures all blocking operations",
                "A": "Total Blocking Time - measures main thread blocking time",
                "C": "Time Before Transfer - measures network time",
                "D": "Template Build Time - measures rendering time"
            },
            "correctAnswer": [
                "A"
            ],
            "explanation": "<p>TBT (Total Blocking Time) measures the total amount of time the main thread is blocked, preventing the browser from responding to user input.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/faqs/performance-optimization.html\" target=\"_blank\" rel=\"noopener\">Performance optimization</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0101",
            "topic": 7,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "How can CLS (Cumulative Layout Shift) be improved?",
            "options": {
                "A": "Remove all images",
                "C": "Reserve space for dynamic content, use size-adjust for fonts, and avoid inserting content above existing content",
                "B": "Load everything synchronously",
                "D": "Use larger images"
            },
            "correctAnswer": [
                "C"
            ],
            "explanation": "<p>CLS can be improved by reserving space for content that loads later, using font metrics (size-adjust, ascent-override), and avoiding inserting content that pushes existing content down.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/building-your-theme/preserving-good-google-page-rank-metrics.html\" target=\"_blank\" rel=\"noopener\">Optimizing Core Web Vitals and Google Page Speed</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0102",
            "topic": 7,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What is typically the largest contentful element (LCP) on a product page?",
            "options": {
                "B": "The page title",
                "C": "The main product image",
                "A": "The footer",
                "D": "Navigation menu"
            },
            "correctAnswer": [
                "C"
            ],
            "explanation": "<p>On product pages, the main product image is typically the largest contentful element. Optimizing its loading (priority, format, size) directly improves LCP.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/building-your-theme/preserving-good-google-page-rank-metrics.html\" target=\"_blank\" rel=\"noopener\">Optimizing Core Web Vitals and Google Page Speed</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0103",
            "topic": 7,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "How can Lighthouse recommendations be prioritized for maximum impact?",
            "options": {
                "D": "Fix all issues at once",
                "C": "Focus on low-hanging fruit that provides the biggest performance gains with minimal effort",
                "B": "Ignore Lighthouse recommendations",
                "A": "Only fix visual issues"
            },
            "correctAnswer": [
                "C"
            ],
            "explanation": "<p>Prioritizing low-hanging fruit (easy fixes with high impact) like image optimization, deferring non-critical scripts, and reducing DOM size provides the best ROI for performance improvements.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/faqs/performance-optimization.html\" target=\"_blank\" rel=\"noopener\">Performance optimization</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0104",
            "topic": 7,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What is the difference between lab data (Lighthouse) and field data (CrUX) in performance measurement?",
            "options": {
                "D": "There is no difference",
                "C": "Lab data is simulated in controlled conditions, field data reflects real-world user experiences",
                "B": "Lab data is more accurate",
                "A": "Field data is not reliable"
            },
            "correctAnswer": [
                "C"
            ],
            "explanation": "<p>Lab data (Lighthouse) provides controlled, reproducible measurements. Field data (CrUX) reflects actual user experiences across different devices, networks, and locations, providing real-world insights.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/advanced-topics/performance-and-crux.html\" target=\"_blank\" rel=\"noopener\">Performance and CrUX</a> (Hyvä docs)</li><li><a href=\"https://docs.hyva.io/hyva-themes/faqs/performance-optimization.html\" target=\"_blank\" rel=\"noopener\">Performance optimization</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0105",
            "topic": 7,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What does CrUX stand for and what does it provide?",
            "options": {
                "C": "Chrome User Experience - provides field data from actual Chrome users",
                "D": "Core User Experience - provides lab test data",
                "B": "Chrome User Extension - provides browser extensions",
                "A": "Core User Extension - provides user data"
            },
            "correctAnswer": [
                "C"
            ],
            "explanation": "<p>CrUX (Chrome User Experience Report) is a public dataset providing field data from actual Chrome users, showing real-world performance metrics across different conditions.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/advanced-topics/performance-and-crux.html\" target=\"_blank\" rel=\"noopener\">Performance and CrUX</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0106",
            "topic": 7,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "How can the PerformanceObserver API be used to measure LCP?",
            "options": {
                "A": "It cannot measure LCP",
                "B": "Create a PerformanceObserver for 'largest-contentful-paint' event type",
                "D": "Use it only for FCP",
                "C": "PerformanceObserver is deprecated"
            },
            "correctAnswer": [
                "B"
            ],
            "explanation": "<p>PerformanceObserver can observe the 'largest-contentful-paint' event type to measure LCP candidates and determine when the largest contentful element is rendered.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/advanced-topics/performance-and-crux.html\" target=\"_blank\" rel=\"noopener\">Performance and CrUX</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0107",
            "topic": 7,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What is the purpose of the elementtiming attribute?",
            "options": {
                "D": "To style elements",
                "B": "To mark elements for performance tracking with PerformanceObserver",
                "C": "To hide elements",
                "A": "To add animations"
            },
            "correctAnswer": [
                "B"
            ],
            "explanation": "<p>The elementtiming attribute marks specific elements (like images or text blocks) so they can be tracked by PerformanceObserver, providing precise timing data for those elements.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/advanced-topics/performance-and-crux.html\" target=\"_blank\" rel=\"noopener\">Performance and CrUX</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0108",
            "topic": 7,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What is the relationship between TTFB and other Core Web Vitals metrics?",
            "options": {
                "B": "TTFB has no relationship to other metrics",
                "A": "TTFB is the foundation - all other metrics depend on it since content cannot render until the server responds",
                "C": "TTFB only affects LCP",
                "D": "Other metrics affect TTFB"
            },
            "correctAnswer": [
                "A"
            ],
            "explanation": "<p>TTFB (Time to First Byte) is foundational. All other metrics (FCP, LCP, INP, CLS) depend on TTFB because the browser cannot start rendering until it receives the first byte from the server.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/building-your-theme/preserving-good-google-page-rank-metrics.html\" target=\"_blank\" rel=\"noopener\">Optimizing Core Web Vitals and Google Page Speed</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0109",
            "topic": 7,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "How can LCP be improved for a product page?",
            "options": {
                "C": "Load images last",
                "B": "Optimize the main product image with priority loading, proper format (WebP), and correct sizing",
                "A": "Use larger images",
                "D": "Load all images synchronously"
            },
            "correctAnswer": [
                "B"
            ],
            "explanation": "<p>LCP is typically the main product image. Improve it by using loading=\"eager\" or fetchpriority=\"high\", optimizing image format and size, and ensuring it loads quickly.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/building-your-theme/preserving-good-google-page-rank-metrics.html\" target=\"_blank\" rel=\"noopener\">Optimizing Core Web Vitals and Google Page Speed</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0110",
            "topic": 7,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What causes Cumulative Layout Shift (CLS) and how can it be prevented?",
            "options": {
                "D": "CLS is caused by slow images - prevent by using larger images",
                "A": "CLS is caused by content shifting - prevent by reserving space, using font metrics (size-adjust), and avoiding inserting content above existing content",
                "B": "CLS cannot be prevented",
                "C": "CLS is only caused by JavaScript"
            },
            "correctAnswer": [
                "A"
            ],
            "explanation": "<p>CLS occurs when visible content shifts during page load. Prevent it by reserving space for dynamic content, using font metrics to match fallback fonts, and avoiding content insertion that pushes existing content.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/building-your-theme/preserving-good-google-page-rank-metrics.html\" target=\"_blank\" rel=\"noopener\">Optimizing Core Web Vitals and Google Page Speed</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0111",
            "topic": 7,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What does INP measure and why is it important?",
            "options": {
                "B": "Initial Network Protocol - measures network speed",
                "A": "Interaction to Next Paint - measures responsiveness to user interactions (clicks, taps, keypresses)",
                "D": "Internal Navigation Process - measures page navigation",
                "C": "Image Network Performance - measures image loading"
            },
            "correctAnswer": [
                "A"
            ],
            "explanation": "<p>INP measures the time from user interaction to when the browser can paint the next frame. It indicates page responsiveness and user experience quality.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/building-your-theme/preserving-good-google-page-rank-metrics.html\" target=\"_blank\" rel=\"noopener\">Optimizing Core Web Vitals and Google Page Speed</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0112",
            "topic": 7,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "How can INP be improved?",
            "options": {
                "D": "Load all scripts synchronously",
                "A": "Defer non-critical JavaScript, break up long tasks, and optimize event handlers",
                "C": "Use more JavaScript",
                "B": "Disable all JavaScript"
            },
            "correctAnswer": [
                "A"
            ],
            "explanation": "<p>Improve INP by deferring non-critical scripts (x-defer), breaking up long-running tasks, optimizing event handlers, and reducing main thread blocking time.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/faqs/performance-optimization.html\" target=\"_blank\" rel=\"noopener\">Performance optimization</a> (Hyvä docs)</li><li><a href=\"https://docs.hyva.io/hyva-themes/working-with-alpinejs/alpine-plugins/x-defer.html\" target=\"_blank\" rel=\"noopener\">Alpine.js x-defer plugin</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0113",
            "topic": 7,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What is Total Blocking Time (TBT) and what causes it?",
            "options": {
                "B": "TBT measures network blocking - caused by slow servers",
                "A": "TBT measures main thread blocking - caused by long-running JavaScript tasks",
                "D": "TBT measures CSS blocking - caused by large stylesheets",
                "C": "TBT measures image blocking - caused by large images"
            },
            "correctAnswer": [
                "A"
            ],
            "explanation": "<p>TBT measures the total time the main thread is blocked by JavaScript tasks longer than 50ms, preventing the browser from responding to user input.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/faqs/performance-optimization.html\" target=\"_blank\" rel=\"noopener\">Performance optimization</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0114",
            "topic": 7,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "How can TBT be reduced?",
            "options": {
                "D": "Load all scripts immediately",
                "A": "Defer non-critical scripts, break up long tasks, and use code splitting",
                "C": "Use more synchronous scripts",
                "B": "Disable all scripts"
            },
            "correctAnswer": [
                "A"
            ],
            "explanation": "<p>Reduce TBT by deferring non-critical scripts (x-defer), breaking long tasks into smaller chunks, using code splitting, and optimizing JavaScript execution.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/faqs/performance-optimization.html\" target=\"_blank\" rel=\"noopener\">Performance optimization</a> (Hyvä docs)</li><li><a href=\"https://docs.hyva.io/hyva-themes/working-with-alpinejs/alpine-plugins/x-defer.html\" target=\"_blank\" rel=\"noopener\">Alpine.js x-defer plugin</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0115",
            "topic": 7,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What tool provides the most granular view of runtime performance for debugging?",
            "options": {
                "B": "Lighthouse only",
                "D": "Chrome Performance Panel with flame charts",
                "A": "PageSpeed Insights only",
                "C": "Browser console only"
            },
            "correctAnswer": [
                "D"
            ],
            "explanation": "<p>Chrome's Performance Panel provides detailed flame charts showing script execution, rendering, and painting, allowing identification of bottlenecks not obvious from high-level scores.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/advanced-topics/performance-and-crux.html\" target=\"_blank\" rel=\"noopener\">Performance and CrUX</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0116",
            "topic": 7,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What are Real User Monitoring (RUM) tools used for?",
            "options": {
                "D": "To simulate user interactions",
                "A": "To collect performance data from actual users' browsers and aggregate it into dashboards",
                "B": "To test in lab conditions only",
                "C": "To measure server performance only"
            },
            "correctAnswer": [
                "A"
            ],
            "explanation": "<p>RUM tools collect performance data from actual users across different devices, locations, and network conditions, providing comprehensive real-world performance insights.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/advanced-topics/performance-and-crux.html\" target=\"_blank\" rel=\"noopener\">Performance and CrUX</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0117",
            "topic": 7,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "How can you identify which element is the LCP candidate?",
            "options": {
                "C": "Check the HTML source only",
                "A": "Use PerformanceObserver to track LCP candidates or check Lighthouse\/Chrome DevTools",
                "B": "It is always the first image",
                "D": "LCP cannot be identified"
            },
            "correctAnswer": [
                "A"
            ],
            "explanation": "<p>Use PerformanceObserver to track 'largest-contentful-paint' entries, or use Lighthouse and Chrome DevTools which highlight the LCP element in their reports.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/advanced-topics/performance-and-crux.html\" target=\"_blank\" rel=\"noopener\">Performance and CrUX</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0118",
            "topic": 7,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What is the recommended approach to improve all Core Web Vitals metrics?",
            "options": {
                "A": "Focus on one metric at a time",
                "C": "Optimize TTFB first (foundation), then address LCP, CLS, and INP with targeted optimizations",
                "D": "Only optimize images",
                "B": "Disable all JavaScript"
            },
            "correctAnswer": [
                "C"
            ],
            "explanation": "<p>Start with TTFB optimization as the foundation, then optimize LCP (images/content), CLS (layout stability), and INP (interactivity) with specific techniques for each metric.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/building-your-theme/preserving-good-google-page-rank-metrics.html\" target=\"_blank\" rel=\"noopener\">Optimizing Core Web Vitals and Google Page Speed</a> (Hyvä docs)</li><li><a href=\"https://docs.hyva.io/hyva-themes/faqs/performance-optimization.html\" target=\"_blank\" rel=\"noopener\">Performance optimization</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0119",
            "topic": 7,
            "difficulty": "medium",
            "type": "multiple_choice"
        }
    ]
};
