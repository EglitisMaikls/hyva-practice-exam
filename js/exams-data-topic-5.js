/**
 * Topic 5 Data - Auto-generated
 * Topic: Tailwind CSS and Hyvä
 * Questions: 11
 */

window.TOPIC_DATA = window.TOPIC_DATA || {};
window.TOPIC_DATA[5] = {
    "topicNumber": 5,
    "topicName": "Tailwind CSS and Hyv\u00e4",
    "questionCount": 11,
    "questions": [
        {
            "question": "How can the color theme be customized in a Hyv\u00e4 theme using Tailwind configuration?",
            "options": {
                "B": "Modify the core Hyv\u00e4 CSS files",
                "D": "Use the extends section in tailwind.config.js to override color values",
                "A": "Use inline styles only",
                "C": "Create a separate CSS file that overrides everything"
            },
            "correctAnswer": [
                "D"
            ],
            "explanation": "The extends section in tailwind.config.js allows you to customize the color theme while maintaining compatibility with Hyv\u00e4 updates. This is the recommended approach.",
            "isMultiple": false,
            "id": "q_0046",
            "topic": 5,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What is the benefit of using CSS variables to customize a Hyv\u00e4 theme?",
            "options": {
                "C": "CSS variables are faster than Tailwind classes",
                "B": "CSS variables allow customization without template overrides",
                "A": "CSS variables work in all browsers without polyfills",
                "D": "CSS variables are required for Hyv\u00e4 to function"
            },
            "correctAnswer": [
                "B"
            ],
            "explanation": "CSS variables allow you to customize theme colors and other values without modifying templates, making upgrades easier and maintaining separation of concerns.",
            "isMultiple": false,
            "id": "q_0047",
            "topic": 5,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What is the recommended approach for using custom fonts in Hyv\u00e4 to minimize performance impact?",
            "options": {
                "B": "Use CDN-hosted fonts",
                "C": "Use local font files with size-adjust and ascent-override to avoid preloading",
                "A": "Load all fonts synchronously",
                "D": "Use @font-face without any optimization"
            },
            "correctAnswer": [
                "C"
            ],
            "explanation": "Using local font files with size-adjust and ascent-override allows the browser to reserve space correctly without requiring font preloading, improving performance metrics like CLS.",
            "isMultiple": false,
            "id": "q_0048",
            "topic": 5,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What does the extends section in tailwind.config.js do?",
            "options": {
                "A": "It replaces all Tailwind defaults",
                "D": "It extends the default Tailwind configuration with custom values",
                "B": "It disables Tailwind compilation",
                "C": "It imports external CSS files"
            },
            "correctAnswer": [
                "D"
            ],
            "explanation": "The extends section allows you to add to or override specific parts of the Tailwind configuration while keeping all other defaults intact.",
            "isMultiple": false,
            "id": "q_0049",
            "topic": 5,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "How can breakpoints be customized in a Hyv\u00e4 theme?",
            "options": {
                "B": "Modify the core Hyv\u00e4 breakpoint definitions",
                "C": "Use the extends section in tailwind.config.js to override the screens configuration",
                "A": "Use media queries in a separate CSS file",
                "D": "Breakpoints cannot be customized"
            },
            "correctAnswer": [
                "C"
            ],
            "explanation": "Breakpoints can be customized by extending the screens configuration in tailwind.config.js, allowing you to define custom breakpoint values while maintaining Hyv\u00e4 compatibility.",
            "isMultiple": false,
            "id": "q_0050",
            "topic": 5,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What is the purpose of size-adjust when using custom fonts?",
            "options": {
                "A": "To increase font file size",
                "C": "To adjust the font size to match the fallback font's metrics",
                "B": "To compress the font file",
                "D": "To change font weight"
            },
            "correctAnswer": [
                "C"
            ],
            "explanation": "size-adjust scales the custom font to match the fallback font's metrics, preventing layout shift (CLS) while the custom font loads.",
            "isMultiple": false,
            "id": "q_0051",
            "topic": 5,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "Why should local font files be preferred over CDN-hosted fonts for performance?",
            "options": {
                "B": "Local files are always smaller",
                "D": "Local files reduce external DNS lookups and improve TTFB",
                "A": "CDN fonts don't work with Hyv\u00e4",
                "C": "Local files load faster in all cases"
            },
            "correctAnswer": [
                "D"
            ],
            "explanation": "Local font files reduce external DNS lookups and network requests, improving Time to First Byte (TTFB) and overall page load performance.",
            "isMultiple": false,
            "id": "q_0052",
            "topic": 5,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What is the purpose of ascent-override when using custom fonts?",
            "options": {
                "A": "To change font weight",
                "D": "To adjust the font's ascent metric to match the fallback font",
                "B": "To increase font size",
                "C": "To compress the font file"
            },
            "correctAnswer": [
                "D"
            ],
            "explanation": "ascent-override adjusts the font's ascent metric to match the fallback font, preventing layout shift by ensuring consistent line heights during font loading.",
            "isMultiple": false,
            "id": "q_0053",
            "topic": 5,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "How can CSS variables be used with Tailwind arbitrary values?",
            "options": {
                "A": "CSS variables cannot be used with Tailwind",
                "C": "Use arbitrary value syntax like text-[var(--color-primary)]",
                "B": "Only predefined Tailwind colors work",
                "D": "CSS variables must be defined in tailwind.config.js only"
            },
            "correctAnswer": [
                "C"
            ],
            "explanation": "Tailwind arbitrary values allow direct reference to CSS variables using syntax like text-[var(--color-primary)], providing flexibility for dynamic values.",
            "isMultiple": false,
            "id": "q_0054",
            "topic": 5,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What is the benefit of using twProps and twVar helper functions in Tailwind v3?",
            "options": {
                "C": "They are not needed in Tailwind v3",
                "A": "They correctly handle opacity modifiers and convert values to CSS variables",
                "B": "They disable Tailwind compilation",
                "D": "They only work with Tailwind v4"
            },
            "correctAnswer": [
                "A"
            ],
            "explanation": "twProps and twVar from @hyva-themes\/hyva-modules convert Tailwind config values to CSS variables while preserving opacity modifier functionality.",
            "isMultiple": false,
            "id": "q_0055",
            "topic": 5,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "How should Tailwind configuration be structured to support both theme and CMS Tailwind JIT compiler?",
            "options": {
                "B": "Only configure the theme tailwind.config.js",
                "A": "Configure both theme tailwind.config.js and CMS compiler configuration separately",
                "C": "CMS compiler uses the same config automatically",
                "D": "CMS content cannot use Tailwind classes"
            },
            "correctAnswer": [
                "A"
            ],
            "explanation": "The CMS Tailwind JIT compiler has its own configuration. Both the theme tailwind.config.js and CMS compiler configuration must be updated for classes to be available in CMS content.",
            "isMultiple": false,
            "id": "q_0056",
            "topic": 5,
            "difficulty": "medium",
            "type": "multiple_choice"
        }
    ]
};
