/**
 * @author    Magebit <info@magebit.com>
 * @copyright Copyright (c) Magebit, Ltd. (https://magebit.com)
 * @license   https://magebit.com/code-license
 */

window.TOPIC_DATA = window.TOPIC_DATA || {};
window.TOPIC_DATA[6] = {
    "topicNumber": 6,
    "topicName": "Alpine.js and JavaScript",
    "questionCount": 38,
    "questions": [
        {
            "question": "How can Alpine component logic be customized in an upgradable manner?",
            "options": {
                "B": "Modify the core Alpine.js library",
                "A": "Use Proxy or wrapper functions to override global JS functions while calling the original",
                "C": "Copy all Alpine code to your theme",
                "D": "Use inline functions with Alpine.data()"
            },
            "correctAnswer": [
                "A"
            ],
            "explanation": "<p>Using Proxy or wrapper functions allows you to extend functionality while maintaining the ability to call the original function, ensuring compatibility with future updates.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/patterns/overriding-js.html\" target=\"_blank\" rel=\"noopener\">Overriding JavaScript</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0057",
            "topic": 6,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What is the best practice for designing JavaScript components to be reused on different pages?",
            "options": {
                "C": "Render instance-specific values directly in the JavaScript",
                "D": "Use data attributes instead of rendering values in JS",
                "B": "Hard-code values in the component",
                "A": "Use global variables for all values"
            },
            "correctAnswer": [
                "D"
            ],
            "explanation": "<p>Using data attributes allows components to be reusable and configurable without modifying JavaScript code, making them work across different pages and contexts.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/csp/alpine-csp-property-mutation.html\" target=\"_blank\" rel=\"noopener\">Property mutation in Alpine CSP</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0058",
            "topic": 6,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "How should .js files be loaded without impacting performance metrics?",
            "options": {
                "C": "Load all scripts in the <head>",
                "A": "Use init-external-scripts and facades",
                "B": "Load scripts synchronously",
                "D": "Inline all JavaScript"
            },
            "correctAnswer": [
                "A"
            ],
            "explanation": "<p>init-external-scripts and facades allow deferred loading of external scripts, improving performance metrics like TBT and INP by reducing main thread blocking.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/patterns/loading-external-javascript.html\" target=\"_blank\" rel=\"noopener\">Loading External JavaScript</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0059",
            "topic": 6,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "How should decoupled components communicate without nesting?",
            "options": {
                "C": "Use global variables",
                "A": "Use events to trigger updates between related components",
                "B": "Nest all related components",
                "D": "Use jQuery for communication"
            },
            "correctAnswer": [
                "A"
            ],
            "explanation": "<p>Using events (Alpine's $dispatch and @event listeners) allows components to communicate without nesting, enabling better component organization and reusability.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/patterns/communication-between-alpine-components.html\" target=\"_blank\" rel=\"noopener\">Communication between Alpine Components</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0060",
            "topic": 6,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What does removing the unsafe-eval content security policy directive forbid?",
            "options": {
                "D": "All JavaScript execution",
                "C": "The use of the eval function",
                "B": "Alpine.js components",
                "A": "Dynamic creation of JavaScript functions"
            },
            "correctAnswer": [
                "C",
                "A"
            ],
            "explanation": "<p>Removing unsafe-eval forbids the use of eval() and dynamic function creation (like new Function()), which is required for strict CSP compliance.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/csp/csp-compatibility.html\" target=\"_blank\" rel=\"noopener\">CSP compatibility</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": true,
            "id": "q_0061",
            "topic": 6,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What are two restrictions imposed by removing the unsafe-eval content security policy directive? (Choose two)",
            "options": {
                "C": "Only authorized <script> tags are executed",
                "B": "Forbids the use of the eval function",
                "D": "Prohibits the dynamic creation of <script> elements in the page DOM",
                "A": "The dynamic creation of JavaScript functions is unavailable"
            },
            "correctAnswer": [
                "B",
                "A"
            ],
            "explanation": "<p>Removing unsafe-eval forbids eval() and dynamic function creation (new Function()). It does not prevent script tag execution or DOM manipulation of script elements.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/csp/csp-compatibility.html\" target=\"_blank\" rel=\"noopener\">CSP compatibility</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": true,
            "id": "q_0062",
            "topic": 6,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "How should Alpine components be written to avoid relying on unsafe-inline CSP?",
            "options": {
                "A": "Use inline scripts within Alpine templates",
                "C": "Avoid scripts within Alpine templates, use Alpine.data(), and use data attributes as arguments",
                "D": "Use eval() for dynamic code",
                "B": "Inject scripts from Ajax responses"
            },
            "correctAnswer": [
                "C"
            ],
            "explanation": "<p>CSP-compliant Alpine code avoids inline scripts, uses Alpine.data() for component definitions, and passes data via attributes rather than inline expressions.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/csp/alpine-csp.html\" target=\"_blank\" rel=\"noopener\">Alpine.js CSP Build</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0063",
            "topic": 6,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What is the correct way to use Alpine.data() for CSP compliance?",
            "options": {
                "C": "Use inline functions with Alpine.data()",
                "D": "Use global functions registered with Alpine.data()",
                "B": "Define components in HTML attributes",
                "A": "Use eval() to create components"
            },
            "correctAnswer": [
                "D"
            ],
            "explanation": "<p>For CSP compliance, register component functions globally using Alpine.data() rather than using inline function definitions.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/csp/alpine-csp-constructor-functions.html\" target=\"_blank\" rel=\"noopener\">Alpine CSP x-data constructors</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0064",
            "topic": 6,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What is the purpose of the x-defer directive in Alpine.js?",
            "options": {
                "A": "To delay Alpine initialization indefinitely",
                "C": "To defer component initialization until a trigger condition is met",
                "D": "To disable Alpine.js",
                "B": "To speed up page load by removing Alpine"
            },
            "correctAnswer": [
                "C"
            ],
            "explanation": "<p>x-defer allows deferring Alpine component initialization until conditions like viewport intersection, user interaction, or idle time, improving performance metrics.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/working-with-alpinejs/alpine-plugins/x-defer.html\" target=\"_blank\" rel=\"noopener\">Alpine.js x-defer plugin</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0065",
            "topic": 6,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What values can be used with the x-defer directive?",
            "options": {
                "B": "Only \"lazy\"",
                "C": "intersect, interact, idle, or event:eventname",
                "A": "Only \"load\"",
                "D": "Only \"click\""
            },
            "correctAnswer": [
                "C"
            ],
            "explanation": "<p>x-defer supports intersect (viewport entry), interact (user interaction), idle (browser idle), and event:eventname (custom event) triggers.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/working-with-alpinejs/alpine-plugins/x-defer.html\" target=\"_blank\" rel=\"noopener\">Alpine.js x-defer plugin</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0066",
            "topic": 6,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What is the x-intersect directive used for?",
            "options": {
                "A": "To detect when an element enters or leaves the viewport",
                "B": "To create intersections between components",
                "C": "To merge Alpine components",
                "D": "To disable Alpine on an element"
            },
            "correctAnswer": [
                "A"
            ],
            "explanation": "<p>x-intersect triggers JavaScript when an element scrolls into or out of the browser viewport, useful for lazy loading and performance optimization.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/working-with-alpinejs/alpine-plugins/x-intersect.html\" target=\"_blank\" rel=\"noopener\">Alpine.js x-intersect plugin</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0067",
            "topic": 6,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "A merchant has asked for a customer reviews widget from an external service provider to be added below the fold on the homepage. After implementing and running Lighthouse, you have noted a warning of 'Excessive DOM Size', and the customer reviews widget is flagged as including over 500 DOM elements. What two steps reduce the DOM size while ensuring other performance metrics are unaffected? (Choose two)",
            "options": {
                "C": "Reserve the correct amount of space on page load to match the customer reviews widget",
                "D": "Use the Alpine.js x-defer directive with a value of interact to defer loading and rendering the customer reviews widget",
                "A": "Ensure all images within the customer reviews widget have loading=\"lazy\" added",
                "B": "Use the Alpine.js x-intersect directive to defer loading and rendering the customer reviews widget"
            },
            "correctAnswer": [
                "D",
                "B"
            ],
            "explanation": "<p>Using x-defer=\"interact\" or x-intersect to defer loading the widget reduces initial DOM size. Reserving space (A) helps CLS but doesn't reduce DOM size. Lazy images (C) helps performance but doesn't address DOM size.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/working-with-alpinejs/alpine-plugins/x-defer.html\" target=\"_blank\" rel=\"noopener\">Alpine.js x-defer plugin</a> (Hyvä docs)</li><li><a href=\"https://docs.hyva.io/hyva-themes/working-with-alpinejs/alpine-plugins/x-intersect.html\" target=\"_blank\" rel=\"noopener\">Alpine.js x-intersect plugin</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": true,
            "id": "q_0068",
            "topic": 6,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "How should method arguments be passed to Alpine component methods in CSP-compliant code?",
            "options": {
                "C": "Use inline function calls with arguments",
                "B": "Use data attributes and read from event.target.dataset",
                "D": "Use eval() to pass arguments",
                "A": "Arguments cannot be passed in CSP mode"
            },
            "correctAnswer": [
                "B"
            ],
            "explanation": "<p>CSP-compliant Alpine code uses data attributes to pass arguments. The method reads values from event.target.dataset instead of receiving direct arguments.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/csp/alpine-csp-property-mutation.html\" target=\"_blank\" rel=\"noopener\">Property mutation in Alpine CSP</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0069",
            "topic": 6,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What is the correct way to handle x-for iteration variables in CSP-compliant Alpine components?",
            "options": {
                "A": "Use method calls in the x-for expression",
                "B": "Iterate over a property directly, without method calls in the expression",
                "D": "Use eval() to generate the list",
                "C": "x-for is not supported in CSP mode"
            },
            "correctAnswer": [
                "B"
            ],
            "explanation": "<p>CSP-compliant x-for must iterate over a property directly (e.g., x-for=\"item in items\"), not over method calls with arguments.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/csp/alpine-csp-x-for.html\" target=\"_blank\" rel=\"noopener\">Alpine CSP x-for</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0070",
            "topic": 6,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "How can global JavaScript functions be overridden while maintaining upgradability?",
            "options": {
                "B": "Modify the core Hyv\u00e4 JavaScript files",
                "A": "Use Proxy or wrapper functions that call the original function",
                "D": "Replace the function completely",
                "C": "Use eval() to override functions"
            },
            "correctAnswer": [
                "A"
            ],
            "explanation": "<p>Using Proxy or wrapper functions allows you to extend functionality while calling the original function, ensuring compatibility with future Hyv\u00e4 updates.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/patterns/overriding-js.html\" target=\"_blank\" rel=\"noopener\">Overriding JavaScript</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0071",
            "topic": 6,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What is the purpose of init-external-scripts in Hyv\u00e4?",
            "options": {
                "D": "To load all scripts synchronously",
                "B": "To defer loading of external scripts until needed, improving performance",
                "C": "To disable external scripts",
                "A": "To inline all external scripts"
            },
            "correctAnswer": [
                "B"
            ],
            "explanation": "<p>init-external-scripts allows deferring external script loading until user interaction or other triggers, reducing initial page load time and improving TBT and INP metrics.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/patterns/loading-external-javascript.html\" target=\"_blank\" rel=\"noopener\">Loading External JavaScript</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0072",
            "topic": 6,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "How should components be designed to avoid excessive DOM size?",
            "options": {
                "B": "Render all content immediately",
                "C": "Use x-defer or x-intersect to defer rendering, and minimize nested elements",
                "D": "Use more nested divs for structure",
                "A": "Load all data upfront"
            },
            "correctAnswer": [
                "C"
            ],
            "explanation": "<p>Deferring component initialization and minimizing DOM depth helps reduce excessive DOM size, improving performance metrics and browser rendering speed.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/working-with-alpinejs/alpine-plugins/x-defer.html\" target=\"_blank\" rel=\"noopener\">Alpine.js x-defer plugin</a> (Hyvä docs)</li><li><a href=\"https://docs.hyva.io/hyva-themes/working-with-alpinejs/alpine-plugins/x-intersect.html\" target=\"_blank\" rel=\"noopener\">Alpine.js x-intersect plugin</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0073",
            "topic": 6,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What happens when a component using x-defer=\"idle\" is initialized?",
            "options": {
                "A": "It initializes immediately",
                "B": "It initializes when the browser is idle or after a timeout",
                "C": "It never initializes",
                "D": "It only initializes on user click"
            },
            "correctAnswer": [
                "B"
            ],
            "explanation": "<p>x-defer=\"idle\" uses window.requestIdleCallback to initialize when the browser is idle, with a configurable timeout fallback (default 4000ms).</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/working-with-alpinejs/alpine-plugins/x-defer.html\" target=\"_blank\" rel=\"noopener\">Alpine.js x-defer plugin</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0074",
            "topic": 6,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "How can components be made reusable across different pages?",
            "options": {
                "D": "Hard-code page-specific values in the component",
                "C": "Use data attributes to pass configuration, avoiding hard-coded values",
                "B": "Create separate components for each page",
                "A": "Use global variables for all configuration"
            },
            "correctAnswer": [
                "C"
            ],
            "explanation": "<p>Using data attributes for configuration makes components reusable and configurable without modifying JavaScript code, enabling use across different pages and contexts.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/csp/alpine-csp-property-mutation.html\" target=\"_blank\" rel=\"noopener\">Property mutation in Alpine CSP</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0075",
            "topic": 6,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What is the primary reason PCI-DSS 4.0 requires strict CSP (without unsafe-eval) on payment pages?",
            "options": {
                "D": "To improve page load speed",
                "A": "To prevent JavaScript injection attacks that redirect customers to phishing sites",
                "C": "To reduce server load",
                "B": "To enable better caching"
            },
            "correctAnswer": [
                "A"
            ],
            "explanation": "<p>PCI-DSS 4.0 requires strict CSP to prevent modern credit card skimming attacks that inject JavaScript to redirect customers to phishing sites mimicking legitimate payment service providers.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/csp/index.html\" target=\"_blank\" rel=\"noopener\">Content Security Policy (CSP) for Hyvä Themes</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0076",
            "topic": 6,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "When does PCI-DSS 4.0 require strict CSP on payment-related pages?",
            "options": {
                "B": "January 1, 2024",
                "A": "April 1, 2025",
                "D": "January 1, 2026",
                "C": "It is already required"
            },
            "correctAnswer": [
                "A"
            ],
            "explanation": "<p>PCI-DSS 4.0 requires strict CSP (without unsafe-eval and unsafe-inline) on payment-related pages starting April 1, 2025.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/csp/index.html\" target=\"_blank\" rel=\"noopener\">Content Security Policy (CSP) for Hyvä Themes</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0077",
            "topic": 6,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What is the main difference between standard Alpine.js and Alpine CSP build?",
            "options": {
                "A": "Alpine CSP is faster",
                "B": "Alpine CSP works without unsafe-eval by restricting HTML attribute expressions",
                "C": "Alpine CSP has more features",
                "D": "There is no difference"
            },
            "correctAnswer": [
                "B"
            ],
            "explanation": "<p>Alpine CSP eliminates the need for unsafe-eval by restricting HTML attributes to read-only property access and method execution, without allowing inline expressions or transformations.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/csp/alpine-csp.html\" target=\"_blank\" rel=\"noopener\">Alpine.js CSP Build</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0078",
            "topic": 6,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "Why is x-model not supported in Alpine CSP?",
            "options": {
                "D": "x-model is too slow",
                "B": "x-model requires dynamic function creation which needs unsafe-eval",
                "A": "x-model is deprecated",
                "C": "x-model only works with jQuery"
            },
            "correctAnswer": [
                "B"
            ],
            "explanation": "<p>x-model requires dynamic function creation to handle two-way data binding, which relies on unsafe-eval. CSP-compliant code must use explicit event handlers (@input) instead.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/csp/alpine-csp-x-model.html\" target=\"_blank\" rel=\"noopener\">Alpine CSP x-model</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0079",
            "topic": 6,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "How should component constructor functions be registered for CSP compliance?",
            "options": {
                "A": "Use inline function calls: x-data=\"initComponent()\"",
                "C": "Register with Alpine.data() during alpine:init event and reference by name: x-data=\"initComponent\"",
                "B": "Define functions in HTML attributes",
                "D": "Use eval() to create components"
            },
            "correctAnswer": [
                "C"
            ],
            "explanation": "<p>CSP-compliant code requires registering component functions with Alpine.data() during the alpine:init event, then referencing them by name in x-data without calling them.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/csp/alpine-csp-constructor-functions.html\" target=\"_blank\" rel=\"noopener\">Alpine CSP x-data constructors</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0080",
            "topic": 6,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What happens if you try to use negation (!open) directly in an Alpine CSP binding?",
            "options": {
                "B": "It works normally",
                "A": "It causes an error - negation must be converted to a method like isNotOpen()",
                "C": "It is automatically converted",
                "D": "It only works in some browsers"
            },
            "correctAnswer": [
                "A"
            ],
            "explanation": "<p>Alpine CSP does not support inline expressions like negation. You must create a method (e.g., isNotOpen() { return !this.open; }) and use that method in the binding.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/csp/alpine-csp-properties.html\" target=\"_blank\" rel=\"noopener\">Component properties in Alpine CSP</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0081",
            "topic": 6,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "How should ternary expressions be written in Alpine CSP?",
            "options": {
                "A": "Use inline ternaries: :class=\"open ? 'shown' : 'hidden'\"",
                "D": "Convert to a method: :class=\"getClass()\" where getClass() returns the appropriate class",
                "B": "Use eval() to evaluate ternaries",
                "C": "Ternaries are not supported at all"
            },
            "correctAnswer": [
                "D"
            ],
            "explanation": "<p>Ternary expressions must be converted to methods in Alpine CSP. Create a method that returns the appropriate value based on component state.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/csp/alpine-csp-properties.html\" target=\"_blank\" rel=\"noopener\">Component properties in Alpine CSP</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0082",
            "topic": 6,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What is the correct way to handle mutations (state changes) in Alpine CSP?",
            "options": {
                "B": "Use inline mutations: @click=\"open = false\"",
                "A": "Create methods for state changes: @click=\"close\" where close() { this.open = false; }",
                "C": "Mutations are not allowed",
                "D": "Use jQuery for mutations"
            },
            "correctAnswer": [
                "A"
            ],
            "explanation": "<p>Alpine CSP requires state changes to be in methods rather than inline expressions. Create methods like close() that modify component state.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/csp/alpine-csp-property-mutation.html\" target=\"_blank\" rel=\"noopener\">Property mutation in Alpine CSP</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0083",
            "topic": 6,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "How does Hyv\u00e4 authorize inline scripts when unsafe-inline is disabled?",
            "options": {
                "D": "Inline scripts are not allowed",
                "B": "Using nonces on uncached pages and SHA256 hashes on cached pages",
                "A": "Using eval() only",
                "C": "All scripts are automatically authorized"
            },
            "correctAnswer": [
                "B"
            ],
            "explanation": "<p>Hyv\u00e4 uses nonces (random values) on uncached pages and SHA256 hashes of script content on cached pages to authorize inline scripts without unsafe-inline.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/csp/csp-compatibility.html\" target=\"_blank\" rel=\"noopener\">CSP compatibility</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0084",
            "topic": 6,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What method is used to register inline scripts for CSP compliance in Hyv\u00e4 templates?",
            "options": {
                "A": "$block->registerScript()",
                "D": "$hyvaCsp->registerInlineScript()",
                "C": "Alpine.registerScript()",
                "B": "No registration needed"
            },
            "correctAnswer": [
                "D"
            ],
            "explanation": "<p>The $hyvaCsp->registerInlineScript() method must be called after each inline script tag to add the nonce or SHA256 hash for CSP authorization.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/csp/csp-compatibility.html\" target=\"_blank\" rel=\"noopener\">CSP compatibility</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0085",
            "topic": 6,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What happens when unsafe-eval is disabled in Magento CSP configuration?",
            "options": {
                "D": "Hyv\u00e4 automatically switches to Alpine CSP build",
                "A": "Alpine.js stops working completely",
                "C": "Only some Alpine features work",
                "B": "Nothing changes"
            },
            "correctAnswer": [
                "D"
            ],
            "explanation": "<p>When unsafe-eval is disabled in Magento CSP configuration, Hyv\u00e4 automatically uses the Alpine CSP build instead of regular Alpine.js.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/csp/csp-magento-configuration.html\" target=\"_blank\" rel=\"noopener\">Configuring CSP in Magento</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0086",
            "topic": 6,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "Why is the built-in PHP full page cache backend incompatible with strict CSP?",
            "options": {
                "B": "It is too slow",
                "D": "It does not store the CSP header, so cached pages cannot authorize inline scripts",
                "A": "It requires unsafe-eval",
                "C": "It only works with Varnish"
            },
            "correctAnswer": [
                "D"
            ],
            "explanation": "<p>The PHP-based FPC backend does not store CSP headers with cached content, so when pages are served from cache, inline scripts are not authorized. Varnish\/Fastly cache headers properly.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/csp/csp-and-block-caching.html\" target=\"_blank\" rel=\"noopener\">CSP & block_html Cache</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0087",
            "topic": 6,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What Alpine version is required for CSP compatibility?",
            "options": {
                "A": "Alpine v2",
                "D": "Alpine v3 (no CSP build exists for v2)",
                "C": "Alpine v1",
                "B": "Any version works"
            },
            "correctAnswer": [
                "D"
            ],
            "explanation": "<p>Alpine CSP build only exists for Alpine v3. Themes using Alpine v2 must upgrade to v3 before implementing CSP compatibility.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/csp/alpine-csp.html\" target=\"_blank\" rel=\"noopener\">Alpine.js CSP Build</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0088",
            "topic": 6,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "How can you check which Alpine version is currently being used?",
            "options": {
                "C": "Check package.json",
                "D": "Run Alpine.version in browser console",
                "A": "Check composer.json",
                "B": "It is not possible to check"
            },
            "correctAnswer": [
                "D"
            ],
            "explanation": "<p>Open browser developer console and run Alpine.version to check the Alpine.js version. If it starts with \"2\", upgrade is needed for CSP compatibility.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/csp/alpine-csp.html\" target=\"_blank\" rel=\"noopener\">Alpine.js CSP Build</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0089",
            "topic": 6,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What is the correct CSP-compliant way to pass arguments to Alpine component methods?",
            "options": {
                "A": "Use inline arguments: @click=\"setTab('info')\"",
                "D": "Use data attributes: @click=\"setTab\" data-tab=\"info\" and read from event.target.dataset",
                "C": "Arguments cannot be passed",
                "B": "Use global variables"
            },
            "correctAnswer": [
                "D"
            ],
            "explanation": "<p>CSP-compliant code uses data attributes to pass arguments. The method reads values from event.target.dataset instead of receiving direct function arguments.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/csp/alpine-csp-property-mutation.html\" target=\"_blank\" rel=\"noopener\">Property mutation in Alpine CSP</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0090",
            "topic": 6,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What happens to x-for iterations in Alpine CSP when method arguments are used?",
            "options": {
                "B": "They work normally",
                "A": "Method arguments in x-for expressions are not allowed - iterate over properties directly",
                "C": "x-for is not supported",
                "D": "Only simple arrays work"
            },
            "correctAnswer": [
                "A"
            ],
            "explanation": "<p>x-for in Alpine CSP cannot use method calls with arguments in the iterator expression. You must iterate over a property directly (e.g., x-for=\"item in items\" not x-for=\"item in getItems('category')\").</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/csp/alpine-csp-x-for.html\" target=\"_blank\" rel=\"noopener\">Alpine CSP x-for</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0091",
            "topic": 6,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "Which of the following Alpine features work identically in both standard and CSP builds? (Choose two)",
            "options": {
                "D": "x-show with property references",
                "C": "x-model two-way binding",
                "A": "Event handling with @click, @input",
                "B": "Inline expressions with negation"
            },
            "correctAnswer": [
                "D",
                "A"
            ],
            "explanation": "<p>x-show with property references and event handling work identically. x-model is not supported in CSP, and inline expressions with negation require methods in CSP.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/csp/alpine-csp.html\" target=\"_blank\" rel=\"noopener\">Alpine.js CSP Build</a> (Hyvä docs)</li><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/csp/alpine-csp-x-model.html\" target=\"_blank\" rel=\"noopener\">Alpine CSP x-model</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": true,
            "id": "q_0092",
            "topic": 6,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What must be done to make Alpine components CSP-compatible from the start?",
            "options": {
                "D": "Use inline expressions everywhere",
                "C": "Avoid inline expressions, use Alpine.data(), and use data attributes for arguments",
                "A": "Use x-model for all forms",
                "B": "Use eval() for dynamic code"
            },
            "correctAnswer": [
                "C"
            ],
            "explanation": "<p>Writing CSP-compatible code from the start means avoiding inline expressions, using Alpine.data() for component registration, and passing data via attributes rather than inline function calls.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/csp/alpine-csp.html\" target=\"_blank\" rel=\"noopener\">Alpine.js CSP Build</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0093",
            "topic": 6,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What is the scope of PCI-DSS 4.0 CSP requirements for payment pages?",
            "options": {
                "D": "Only checkout pages",
                "C": "Checkout pages definitively, but scope may include pages with in-context payment buttons depending on PSP requirements",
                "A": "All pages on the site",
                "B": "Only payment processing pages"
            },
            "correctAnswer": [
                "C"
            ],
            "explanation": "<p>Checkout pages definitively require strict CSP. The exact scope for pages with in-context payment buttons (PayPal Express, Apple Pay) depends on payment service provider requirements and merchant location.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/csp/index.html\" target=\"_blank\" rel=\"noopener\">Content Security Policy (CSP) for Hyvä Themes</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0094",
            "topic": 6,
            "difficulty": "medium",
            "type": "multiple_choice"
        }
    ]
};
