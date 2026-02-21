/**
 * @author    Magebit <info@magebit.com>
 * @copyright Copyright (c) Magebit, Ltd. (https://magebit.com)
 * @license   https://magebit.com/code-license
 */

window.TOPIC_DATA = window.TOPIC_DATA || {};
window.TOPIC_DATA[4] = {
    "topicNumber": 4,
    "topicName": "Compatibility Modules",
    "questionCount": 11,
    "questions": [
        {
            "question": "When overriding a template provided by a compatibility module, what is the correct module folder name to use?",
            "options": {
                "B": "Use the original Magento module name",
                "D": "Use the compatibility module name",
                "C": "Use either name, they are interchangeable",
                "A": "Create a new module name"
            },
            "correctAnswer": [
                "D"
            ],
            "explanation": "<p>When overriding templates from compatibility modules, you must use the compatibility module name in the theme structure, not the original module name.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/compatibility-modules/technical-deep-dive.html\" target=\"_blank\" rel=\"noopener\">Technical Deep-Dive – Overriding a Compatibility Template in a Theme</a> (Hyvä docs)</li><li><a href=\"https://docs.hyva.io/hyva-themes/compatibility-modules/index.html\" target=\"_blank\" rel=\"noopener\">Compatibility Modules</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0035",
            "topic": 4,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What is the first step in replacing x-magento-init with Alpine.js?",
            "options": {
                "B": "Remove all x-magento-init attributes",
                "C": "Identify the functionality and create an Alpine component",
                "D": "Convert to jQuery",
                "A": "Use Knockout.js instead"
            },
            "correctAnswer": [
                "C"
            ],
            "explanation": "<p>The first step is to understand what the x-magento-init script does, then recreate that functionality using Alpine.js components and data attributes.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/compatibility-modules/from-luma-to-hyva/migrating-js-and-templates.html\" target=\"_blank\" rel=\"noopener\">Migrating Luma JavaScript and Templates</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0036",
            "topic": 4,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "How should jQuery code be refactored to vanilla JavaScript in Hyv\u00e4?",
            "options": {
                "D": "Keep jQuery and load it separately",
                "B": "Convert jQuery selectors to document.querySelector\/querySelectorAll and methods to native JS",
                "C": "Use Alpine.js x-data for all functionality",
                "A": "Leave jQuery code as-is"
            },
            "correctAnswer": [
                "B"
            ],
            "explanation": "<p>jQuery should be refactored to vanilla JavaScript by converting selectors to native DOM methods and replacing jQuery methods with their JavaScript equivalents.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/compatibility-modules/from-luma-to-hyva/migrating-js-and-templates.html\" target=\"_blank\" rel=\"noopener\">Migrating Luma JavaScript and Templates – Native Equivalents for jQuery</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0037",
            "topic": 4,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What file is used to register a module with the compatibility module registry?",
            "options": {
                "C": "composer.json",
                "B": "hyva-themes.json",
                "A": "module.xml",
                "D": "registration.php"
            },
            "correctAnswer": [
                "B"
            ],
            "explanation": "<p>The hyva-themes.json file is used to register modules with the compatibility module registry, allowing Hyv\u00e4 to recognize and process compatibility modules correctly.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/compatibility-modules/index.html\" target=\"_blank\" rel=\"noopener\">Compatibility Modules – Registering a module for inclusion in hyva-themes.json</a> (Hyv\u00e4 docs)</li><li><a href=\"https://docs.hyva.io/hyva-themes/compatibility-modules/getting-started.html\" target=\"_blank\" rel=\"noopener\">Getting Started with Compatibility Modules</a> (Hyv\u00e4 docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0038",
            "topic": 4,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What are the common steps to replace Knockout.js with Alpine components?",
            "options": {
                "B": "Keep Knockout and add Alpine",
                "D": "Convert Knockout observables to Alpine data properties and bindings to Alpine directives",
                "A": "Remove all JavaScript",
                "C": "Use jQuery instead"
            },
            "correctAnswer": [
                "D"
            ],
            "explanation": "<p>To replace Knockout.js, convert observables to Alpine data properties, replace data-bind attributes with Alpine directives (x-show, x-text, etc.), and refactor computed properties to Alpine methods.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/compatibility-modules/from-luma-to-hyva/migrating-js-and-templates.html\" target=\"_blank\" rel=\"noopener\">Migrating Luma JavaScript and Templates</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0039",
            "topic": 4,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What is the purpose of a compatibility module in Hyv\u00e4?",
            "options": {
                "A": "To replace the Hyv\u00e4 theme",
                "B": "To make third-party Magento extensions work with Hyv\u00e4 themes",
                "C": "To modify core Magento functionality",
                "D": "To disable Hyv\u00e4 features"
            },
            "correctAnswer": [
                "B"
            ],
            "explanation": "<p>Compatibility modules bridge the gap between third-party Magento extensions (designed for Luma) and Hyv\u00e4 themes, providing necessary templates and JavaScript adaptations.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/compatibility-modules/index.html\" target=\"_blank\" rel=\"noopener\">Compatibility Modules</a> (Hyv\u00e4 docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0040",
            "topic": 4,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "When converting x-magento-init scripts, what should replace the Magento widget initialization?",
            "options": {
                "C": "jQuery plugins",
                "A": "Alpine.js components with data attributes",
                "D": "Knockout.js observables",
                "B": "Inline JavaScript only"
            },
            "correctAnswer": [
                "A"
            ],
            "explanation": "<p>x-magento-init scripts should be replaced with Alpine.js components that use data attributes for configuration, maintaining functionality while following Hyv\u00e4 best practices.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/compatibility-modules/from-luma-to-hyva/migrating-js-and-templates.html\" target=\"_blank\" rel=\"noopener\">Migrating Luma JavaScript and Templates</a> (Hyv\u00e4 docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0041",
            "topic": 4,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What is the first step when refactoring jQuery code to vanilla JavaScript?",
            "options": {
                "D": "Remove all jQuery immediately",
                "B": "Identify jQuery selectors and methods, then convert to native DOM APIs",
                "A": "Keep jQuery and add Alpine",
                "C": "Rewrite everything from scratch"
            },
            "correctAnswer": [
                "B"
            ],
            "explanation": "<p>The first step is to analyze the jQuery code to understand what it does, then systematically convert selectors (jQuery to querySelector) and methods (jQuery to native JS equivalents).</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/compatibility-modules/from-luma-to-hyva/migrating-js-and-templates.html\" target=\"_blank\" rel=\"noopener\">Migrating Luma JavaScript and Templates</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0042",
            "topic": 4,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "How should Knockout.js computed properties be converted to Alpine.js?",
            "options": {
                "D": "Keep them as computed properties",
                "B": "Convert to Alpine getter methods or computed properties",
                "C": "Remove them entirely",
                "A": "Use jQuery instead"
            },
            "correctAnswer": [
                "B"
            ],
            "explanation": "<p>Knockout computed properties should be converted to Alpine getter methods (using get keyword) or Alpine computed properties, maintaining reactive behavior.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/compatibility-modules/from-luma-to-hyva/migrating-js-and-templates.html\" target=\"_blank\" rel=\"noopener\">Migrating Luma JavaScript and Templates</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0043",
            "topic": 4,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What information is stored in hyva-themes.json for compatibility modules?",
            "options": {
                "D": "Module version numbers only",
                "C": "Module registration and compatibility metadata",
                "A": "Template file paths",
                "B": "JavaScript file locations"
            },
            "correctAnswer": [
                "C"
            ],
            "explanation": "<p>hyva-themes.json stores module registration information and compatibility metadata, allowing Hyv\u00e4 to recognize and properly process compatibility modules.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/compatibility-modules/technical-deep-dive.html\" target=\"_blank\" rel=\"noopener\">Technical Deep-Dive – Tailwind Asset Merging</a> (Hyv\u00e4 docs)</li><li><a href=\"https://docs.hyva.io/hyva-themes/compatibility-modules/getting-started.html\" target=\"_blank\" rel=\"noopener\">Getting Started with Compatibility Modules</a> (Hyv\u00e4 docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0044",
            "topic": 4,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What is the difference between overriding a template from an original module versus a compatibility module?",
            "options": {
                "D": "There is no difference",
                "A": "Compatibility module templates use the compatibility module name in the theme path",
                "B": "Original modules cannot have templates overridden",
                "C": "Only compatibility modules support template overrides"
            },
            "correctAnswer": [
                "A"
            ],
            "explanation": "<p>When overriding templates from compatibility modules, you must use the compatibility module's folder name in the theme structure, not the original module name.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/compatibility-modules/technical-deep-dive.html\" target=\"_blank\" rel=\"noopener\">Technical Deep-Dive – Overriding a Compatibility Template in a Theme</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0045",
            "topic": 4,
            "difficulty": "medium",
            "type": "multiple_choice"
        }
    ]
};
