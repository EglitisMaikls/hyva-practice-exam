/**
 * @author    Magebit <info@magebit.com>
 * @copyright Copyright (c) Magebit, Ltd. (https://magebit.com)
 * @license   https://magebit.com/code-license
 */

window.TOPIC_DATA = window.TOPIC_DATA || {};
window.TOPIC_DATA[2] = {
    "topicNumber": 2,
    "topicName": "Templates",
    "questionCount": 6,
    "questions": [
        {
            "question": "What is the correct method to escape JSON data for use in a data attribute in a Hyv\u00e4 template?",
            "options": {
                "B": "Use htmlspecialchars()",
                "D": "Use json_encode() with JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP",
                "C": "Use strip_tags()",
                "A": "No escaping is needed for JSON"
            },
            "correctAnswer": [
                "D"
            ],
            "explanation": "<p>JSON data in data attributes must be properly escaped. Using json_encode() with the appropriate flags ensures safe rendering in HTML attributes.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/csp/alpine-csp-properties.html\" target=\"_blank\" rel=\"noopener\">Component properties in Alpine CSP</a> (Hyvä docs)</li><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/csp/alpine-csp-example-component.html\" target=\"_blank\" rel=\"noopener\">Alpine CSP example component</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0026",
            "topic": 2,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "How should a product name be escaped when displayed in a template?",
            "options": {
                "C": "Use $escaper->escapeHtml()",
                "B": "Use htmlspecialchars() directly",
                "A": "No escaping needed, Magento handles it",
                "D": "Use strip_tags()"
            },
            "correctAnswer": [
                "C"
            ],
            "explanation": "<p>Product names should be escaped using Magento's Escaper class ($escaper->escapeHtml()) to prevent XSS attacks and ensure proper HTML encoding.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/form-validation/javascript-form-validation.html\" target=\"_blank\" rel=\"noopener\">JavaScript form validation</a> (Hyvä docs)</li><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/patterns/loading-external-javascript.html\" target=\"_blank\" rel=\"noopener\">Loading external JavaScript</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0027",
            "topic": 2,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What is the correct way to escape a value for use in a textarea input?",
            "options": {
                "C": "Use $escaper->escapeHtml()",
                "B": "Use $escaper->escapeHtmlAttr()",
                "D": "Use htmlspecialchars() with ENT_QUOTES",
                "A": "No escaping needed for textarea"
            },
            "correctAnswer": [
                "C"
            ],
            "explanation": "<p>For textarea content, use $escaper->escapeHtml() as the content is rendered as HTML text content, not as an attribute.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/csp/alpine-csp-properties.html\" target=\"_blank\" rel=\"noopener\">Component properties in Alpine CSP</a> (Hyvä docs)</li><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/form-validation/javascript-form-validation.html\" target=\"_blank\" rel=\"noopener\">JavaScript form validation</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0028",
            "topic": 2,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "How can a child template be rendered programmatically from a parent template without using a child block?",
            "options": {
                "B": "Use $block->fetchView()",
                "D": "Use include() directly",
                "C": "Use $block->getChildHtml()",
                "A": "Use JavaScript to load the template"
            },
            "correctAnswer": [
                "B"
            ],
            "explanation": "<p>The fetchView() method allows rendering a template programmatically from within another template, providing flexibility without requiring child block configuration.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/working-with-alpinejs/alpine-v2-and-v3-compatible-code.html\" target=\"_blank\" rel=\"noopener\">Alpine v2 and v3 compatible code</a> (Hyvä docs)</li><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/layout-and-templates/referencing-parent-theme-blocks.html\" target=\"_blank\" rel=\"noopener\">Referencing parent-theme blocks</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0029",
            "topic": 2,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What is the difference between escaping for HTML content versus HTML attributes?",
            "options": {
                "B": "There is no difference",
                "D": "HTML content uses escapeHtml(), attributes use escapeHtmlAttr()",
                "A": "Attributes require double escaping",
                "C": "Content doesn't need escaping"
            },
            "correctAnswer": [
                "D"
            ],
            "explanation": "<p>escapeHtml() is for HTML text content, while escapeHtmlAttr() is specifically for HTML attribute values, handling quotes and special characters differently.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/csp/alpine-csp-properties.html\" target=\"_blank\" rel=\"noopener\">Component properties in Alpine CSP</a> (Hyvä docs)</li><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/form-validation/javascript-form-validation.html\" target=\"_blank\" rel=\"noopener\">JavaScript form validation</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0030",
            "topic": 2,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "Why is it important to escape user input differently based on context?",
            "options": {
                "B": "It's not important, all contexts are the same",
                "C": "Different contexts (HTML, attributes, JavaScript) require different escaping to prevent XSS attacks",
                "A": "Escaping is only needed for attributes",
                "D": "Escaping slows down rendering"
            },
            "correctAnswer": [
                "C"
            ],
            "explanation": "<p>Different contexts have different syntax rules and attack vectors. Proper context-specific escaping prevents XSS attacks while maintaining correct rendering.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/csp/alpine-csp-properties.html\" target=\"_blank\" rel=\"noopener\">Component properties in Alpine CSP</a> (Hyvä docs)</li><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/patterns/loading-external-javascript.html\" target=\"_blank\" rel=\"noopener\">Loading external JavaScript</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0031",
            "topic": 2,
            "difficulty": "medium",
            "type": "multiple_choice"
        }
    ]
};
