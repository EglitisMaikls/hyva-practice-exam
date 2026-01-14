/**
 * Topic 2 Data - Auto-generated
 * Topic: Templates
 * Questions: 6
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
            "explanation": "JSON data in data attributes must be properly escaped. Using json_encode() with the appropriate flags ensures safe rendering in HTML attributes.",
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
            "explanation": "Product names should be escaped using Magento's Escaper class ($escaper->escapeHtml()) to prevent XSS attacks and ensure proper HTML encoding.",
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
            "explanation": "For textarea content, use $escaper->escapeHtml() as the content is rendered as HTML text content, not as an attribute.",
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
            "explanation": "The fetchView() method allows rendering a template programmatically from within another template, providing flexibility without requiring child block configuration.",
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
            "explanation": "escapeHtml() is for HTML text content, while escapeHtmlAttr() is specifically for HTML attribute values, handling quotes and special characters differently.",
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
            "explanation": "Different contexts have different syntax rules and attack vectors. Proper context-specific escaping prevents XSS attacks while maintaining correct rendering.",
            "isMultiple": false,
            "id": "q_0031",
            "topic": 2,
            "difficulty": "medium",
            "type": "multiple_choice"
        }
    ]
};
