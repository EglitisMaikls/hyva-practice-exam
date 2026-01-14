/**
 * Topic 3 Data - Auto-generated
 * Topic: Themes
 * Questions: 3
 */

window.TOPIC_DATA = window.TOPIC_DATA || {};
window.TOPIC_DATA[3] = {
    "topicNumber": 3,
    "topicName": "Themes",
    "questionCount": 3,
    "questions": [
        {
            "question": "How can styles and Tailwind configuration be shared between multiple themes?",
            "options": {
                "D": "Copy the tailwind.config.js to each theme",
                "C": "Use a common parent directory and extend the configuration",
                "A": "Modify the core Hyv\u00e4 theme",
                "B": "Use CSS imports only"
            },
            "correctAnswer": [
                "C"
            ],
            "explanation": "Styles and Tailwind configuration can be shared by organizing themes with a common parent directory and using the extends feature in tailwind.config.js to reference shared configurations.",
            "isMultiple": false,
            "id": "q_0032",
            "topic": 3,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What is a common customization in a child theme's tailwind.config.js?",
            "options": {
                "B": "Changing the color palette",
                "A": "Modifying core Magento files",
                "D": "Removing all Tailwind utilities",
                "C": "Disabling the CSS compiler"
            },
            "correctAnswer": [
                "B"
            ],
            "explanation": "Common customizations in child theme tailwind.config.js include changing color palettes, adjusting breakpoints, and extending the theme configuration while maintaining parent theme compatibility.",
            "isMultiple": false,
            "id": "q_0033",
            "topic": 3,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What is the recommended approach for sharing Tailwind configuration between multiple themes?",
            "options": {
                "C": "Copy tailwind.config.js to each theme",
                "B": "Use a common parent directory and reference shared configs",
                "D": "Modify the core Hyv\u00e4 theme",
                "A": "Use CSS variables only"
            },
            "correctAnswer": [
                "B"
            ],
            "explanation": "Organizing themes with a common parent directory allows sharing Tailwind configuration files, reducing duplication and ensuring consistency across themes.",
            "isMultiple": false,
            "id": "q_0034",
            "topic": 3,
            "difficulty": "medium",
            "type": "multiple_choice"
        }
    ]
};
