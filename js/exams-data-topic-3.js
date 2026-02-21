/**
 * @author    Magebit <info@magebit.com>
 * @copyright Copyright (c) Magebit, Ltd. (https://magebit.com)
 * @license   https://magebit.com/code-license
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
            "explanation": "<p>Styles and Tailwind configuration can be shared by organizing themes with a common parent directory and using the extends feature in tailwind.config.js to reference shared configurations.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/working-with-tailwindcss/sharing-common-css-between-themes.html\" target=\"_blank\" rel=\"noopener\">Sharing Common CSS Between Themes</a> (Hyvä docs)</li></ul></div>",
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
            "explanation": "<p>Common customizations in child theme tailwind.config.js include changing color palettes, adjusting breakpoints, and extending the theme configuration while maintaining parent theme compatibility.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/building-your-theme/index.html\" target=\"_blank\" rel=\"noopener\">Building a Hyvä Child Theme</a> (Hyvä docs)</li></ul></div>",
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
            "explanation": "<p>Organizing themes with a common parent directory allows sharing Tailwind configuration files, reducing duplication and ensuring consistency across themes.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/working-with-tailwindcss/sharing-common-css-between-themes.html\" target=\"_blank\" rel=\"noopener\">Sharing Common CSS Between Themes</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0034",
            "topic": 3,
            "difficulty": "medium",
            "type": "multiple_choice"
        }
    ]
};
