/**
 * Study content - Topic 6: Alpine.js and JavaScript
 */
window.STUDY_CONTENT = window.STUDY_CONTENT || {};
window.STUDY_CONTENT[6] = {
    name: "Alpine.js and JavaScript",
    subsections: [
        {
            title: "Customize Alpine component logic in an upgradable manner",
            bullets: [
                "Overriding global JS functions using Proxy or wrapper",
                "Calling the original function maintaining the correct object context",
                "Using global functions instead of inline functions with Alpine.data()"
            ],
            content: "[Placeholder: explanations and examples]"
        },
        {
            title: "Design JavaScript components to be reused on different pages or multiple times on a single page",
            bullets: [
                "Avoid rendering script instance specific values in the JS by using data attributes instead"
            ],
            content: "[Placeholder: explanations and examples]"
        },
        {
            title: "Demonstrate how to load .js files without impacting performance metrics",
            bullets: [
                "Use init-external-scripts and facades"
            ],
            content: "[Placeholder: explanations and examples]"
        },
        {
            title: "Design decoupled components without nesting",
            bullets: [
                "Using events to trigger updates between related components instead of relying on nesting Alpine components",
                "Moving related components into different parts of a page"
            ],
            content: "[Placeholder: explanations and examples]"
        },
        {
            title: "Demonstrate ability to implement a frontend component without generating an excessive DOM size",
            bullets: [],
            content: "[Placeholder: explanations and examples]"
        },
        {
            title: "Demonstrate ability to create JS without relying on the content security policies unsafe-eval and unsafe-inline",
            bullets: [
                "Avoiding scripts within Alpine templates",
                "Using Alpine.data()",
                "Using data attributes as arguments",
                "Using iteration variables within component methods",
                "Avoiding injecting scripts from Ajax responses after the initial page load"
            ],
            content: "[Placeholder: explanations and examples]"
        }
    ]
};
