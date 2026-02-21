/**
 * @author    Magebit <info@magebit.com>
 * @copyright Copyright (c) Magebit, Ltd. (https://magebit.com)
 * @license   https://magebit.com/code-license
 */

window.TOPIC_DATA = window.TOPIC_DATA || {};
window.TOPIC_DATA[1] = {
    "topicNumber": 1,
    "topicName": "Layout XML Blocks and View Models",
    "questionCount": 25,
    "questions": [
        {
            "question": "A developer needs to add a custom block to the header container in a child theme. What is the correct approach using layout XML?",
            "options": {
                "A": "Use <referenceContainer> with the block name in the child theme layout XML",
                "B": "Modify the parent theme layout XML directly",
                "D": "Add the block directly in the template file",
                "C": "Use JavaScript to inject the block dynamically"
            },
            "correctAnswer": [
                "A"
            ],
            "explanation": "<p>The correct approach is to use <referenceContainer> in the child theme layout XML to add blocks without modifying the parent theme. This maintains upgradability.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/layout-and-templates/referencing-parent-theme-blocks.html\" target=\"_blank\" rel=\"noopener\">Referencing parent-theme blocks</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0001",
            "topic": 1,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What happens when a block is redeclared in a child theme that already exists in the parent theme?",
            "options": {
                "C": "The child theme block completely replaces the parent block",
                "D": "The parent theme block takes precedence",
                "A": "Both blocks are rendered, causing duplication",
                "B": "An error is thrown during page rendering"
            },
            "correctAnswer": [
                "C"
            ],
            "explanation": "<p>When a block is redeclared in a child theme, it completely replaces the parent theme block. This allows full customization while maintaining the parent theme structure.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/layout-and-templates/referencing-parent-theme-blocks.html\" target=\"_blank\" rel=\"noopener\">Referencing parent-theme blocks</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0002",
            "topic": 1,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "A developer wants to determine all layout handles applied to a specific route. What is the best method?",
            "options": {
                "D": "Check the page source code for layout handle comments",
                "B": "Use Magento's layout handle debugging tools",
                "C": "Inspect the layout XML files manually",
                "A": "Check the browser console for layout information"
            },
            "correctAnswer": [
                "B"
            ],
            "explanation": "<p>Magento provides debugging tools to determine all layout handles applied to a route. This is essential for understanding the layout merge order and customization points.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/layout-and-templates/the-hyva_-layout-handles.html\" target=\"_blank\" rel=\"noopener\">The hyva_ layout handles</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0003",
            "topic": 1,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What is a potential issue when using the block_html cache for a block that contains customer-specific data?",
            "options": {
                "B": "The cache will not work at all",
                "D": "Customer-specific data may be shown to other customers",
                "C": "The block will render slower",
                "A": "The cache key will be invalid"
            },
            "correctAnswer": [
                "D"
            ],
            "explanation": "<p>Using block_html cache for blocks with customer-specific data can cause privacy issues where one customer's data is shown to another. Cache tags must be properly configured.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/advanced-topics/core-block-html-full-page-caching.html\" target=\"_blank\" rel=\"noopener\">Block HTML and Full Page Caching</a> (Hyvä docs)</li><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/csp/csp-and-block-caching.html\" target=\"_blank\" rel=\"noopener\">CSP and block_html cache</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0004",
            "topic": 1,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "How can code duplication be avoided when customizing layouts for multiple pages?",
            "options": {
                "A": "Copy the layout XML to each page",
                "C": "Use custom layout handles",
                "D": "Modify the parent theme directly",
                "B": "Use JavaScript to apply changes"
            },
            "correctAnswer": [
                "C"
            ],
            "explanation": "<p>Custom layout handles allow you to create reusable layout configurations that can be applied to multiple pages, avoiding code duplication.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/layout-and-templates/the-hyva_-layout-handles.html\" target=\"_blank\" rel=\"noopener\">The hyva_ layout handles</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0005",
            "topic": 1,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What is the correct way to move a child block from a container into a template block?",
            "options": {
                "A": "Copy the block HTML directly into the template",
                "D": "Use <move> directive in layout XML to move the block",
                "B": "Delete the block and recreate it in the template",
                "C": "Use JavaScript to move the DOM element"
            },
            "correctAnswer": [
                "D"
            ],
            "explanation": "<p>The <move> directive in layout XML allows you to move blocks between containers without duplicating code, maintaining proper block hierarchy.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/layout-and-templates/referencing-parent-theme-blocks.html\" target=\"_blank\" rel=\"noopener\">Referencing parent-theme blocks</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0006",
            "topic": 1,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "How does the ViewModelRegistry differ from declaring view models in layout XML?",
            "options": {
                "B": "ViewModelRegistry requires more XML configuration",
                "C": "ViewModelRegistry allows accessing view models directly in templates without XML",
                "A": "ViewModelRegistry is slower than XML declarations",
                "D": "ViewModelRegistry only works with custom view models"
            },
            "correctAnswer": [
                "C"
            ],
            "explanation": "<p>The ViewModelRegistry ($viewModels) is automatically available in Hyvä templates, allowing direct access to view models without needing to declare them in layout XML.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/working-with-view-models/index.html\" target=\"_blank\" rel=\"noopener\">Working with View Models</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0007",
            "topic": 1,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What interface must a view model implement to contribute cache tags for proper cache invalidation?",
            "options": {
                "C": "Magento\\Framework\\View\\Element\\BlockInterface",
                "A": "Magento\\Framework\\DataObject\\IdentityInterface",
                "D": "Magento\\Framework\\View\\Element\\TemplateInterface",
                "B": "Hyva\\Theme\\Model\\ViewModelInterface"
            },
            "correctAnswer": [
                "A"
            ],
            "explanation": "<p>View models implementing IdentityInterface can return cache tags that are automatically included in HTTP response headers for proper FPC cache invalidation.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/advanced-topics/view-model-cache-tags.html\" target=\"_blank\" rel=\"noopener\">View Model Cache Tags</a> (Hyvä docs)</li><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/working-with-view-models/index.html\" target=\"_blank\" rel=\"noopener\">Working with View Models</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0008",
            "topic": 1,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What is the impact of layout handle merge order on page rendering?",
            "options": {
                "A": "Merge order has no impact",
                "B": "Later handles can override earlier handle configurations",
                "C": "Earlier handles always take precedence",
                "D": "Only the first handle is processed"
            },
            "correctAnswer": [
                "B"
            ],
            "explanation": "<p>Layout handles are processed in merge order, with later handles able to override or extend configurations from earlier handles, allowing for flexible customization.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/layout-and-templates/referencing-parent-theme-blocks.html\" target=\"_blank\" rel=\"noopener\">Referencing parent-theme blocks</a> (Hyvä docs)</li><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/layout-and-templates/the-hyva_-layout-handles.html\" target=\"_blank\" rel=\"noopener\">The hyva_ layout handles</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0009",
            "topic": 1,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What is the purpose of hyva_ prefixed layout handles?",
            "options": {
                "D": "They replace standard Magento handles",
                "B": "They allow Hyv\u00e4-specific customizations without affecting Luma stores",
                "A": "They are required for all Hyv\u00e4 themes",
                "C": "They disable standard Magento functionality"
            },
            "correctAnswer": [
                "B"
            ],
            "explanation": "<p>Hyvä automatically creates hyva_ prefixed handles for every standard handle, allowing Hyvä-specific customizations that only apply when a Hyvä theme is active, enabling side-by-side Luma and Hyvä stores.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/layout-and-templates/the-hyva_-layout-handles.html\" target=\"_blank\" rel=\"noopener\">The hyva_ layout handles</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0010",
            "topic": 1,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "When should <referenceBlock> be used instead of <block> in a child theme?",
            "options": {
                "B": "Always use <block> in child themes",
                "A": "Use <referenceBlock> when modifying blocks that exist in the parent theme",
                "C": "Use <referenceBlock> only for new blocks",
                "D": "<referenceBlock> and <block> are identical"
            },
            "correctAnswer": [
                "A"
            ],
            "explanation": "<p><referenceBlock> updates existing block configurations without replacing them, ensuring parent theme updates are not masked. <block> replaces the entire block definition.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/layout-and-templates/referencing-parent-theme-blocks.html\" target=\"_blank\" rel=\"noopener\">Referencing parent-theme blocks</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0011",
            "topic": 1,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What are the four distinct caching layers in Magento?",
            "options": {
                "D": "Browser, Server, Database, File system",
                "A": "Low-Level Cache, Full Page Cache (FPC), ESI Cache, Browser Cache",
                "B": "HTML Cache, CSS Cache, JS Cache, Image Cache",
                "C": "Session Cache, Application Cache, Database Cache, File Cache"
            },
            "correctAnswer": [
                "A"
            ],
            "explanation": "<p>Magento uses four caching layers: Low-Level Cache (config, layout, EAV), Full Page Cache (complete HTML), ESI Cache (page fragments), and Browser Cache (static assets, localStorage).</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/advanced-topics/core-block-html-full-page-caching.html\" target=\"_blank\" rel=\"noopener\">Block HTML and Full Page Caching</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0012",
            "topic": 1,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "How do cache tags work for cache invalidation?",
            "options": {
                "D": "Cache tags are not used for invalidation",
                "A": "Cache tags associate cache records with data, allowing grouped invalidation when data changes",
                "C": "Cache tags only work with Varnish",
                "B": "Each cache record has only one tag"
            },
            "correctAnswer": [
                "A"
            ],
            "explanation": "<p>Cache tags are string identifiers that associate cache records with data. When data changes, all cache records with matching tags are invalidated together across all caching layers.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/advanced-topics/core-block-html-full-page-caching.html\" target=\"_blank\" rel=\"noopener\">Block HTML and Full Page Caching</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0013",
            "topic": 1,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "How are cache tags added to Block HTML cache?",
            "options": {
                "C": "Tags are added automatically",
                "A": "Blocks override getCacheTags() method or call setCacheTags() before rendering",
                "D": "Tags cannot be added to Block HTML cache",
                "B": "Tags are only in FPC"
            },
            "correctAnswer": [
                "A"
            ],
            "explanation": "<p>Blocks add cache tags by overriding getCacheTags() or calling setCacheTags($tagsArray) before rendering, ensuring proper cache invalidation when related data changes.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/advanced-topics/core-block-html-full-page-caching.html\" target=\"_blank\" rel=\"noopener\">Block HTML and Full Page Caching</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0014",
            "topic": 1,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "How are cache tags added to Full Page Cache (FPC) responses?",
            "options": {
                "D": "Using getCacheTags() method",
                "B": "Blocks implement IdentityInterface with getIdentities() method, tags aggregated in X-Magento-Tags header",
                "A": "Tags are added in templates",
                "C": "FPC does not use cache tags"
            },
            "correctAnswer": [
                "B"
            ],
            "explanation": "<p>FPC cache tags come from blocks implementing IdentityInterface::getIdentities(). All identities are aggregated into the X-Magento-Tags HTTP response header for Varnish invalidation.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/advanced-topics/core-block-html-full-page-caching.html\" target=\"_blank\" rel=\"noopener\">Block HTML and Full Page Caching</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0015",
            "topic": 1,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What problem does Hyv\u00e4 solve with View Model Cache Tags?",
            "options": {
                "A": "View models are too slow",
                "C": "View models cannot contribute cache tags to blocks in standard Magento architecture",
                "B": "View models cause cache issues",
                "D": "View models are not cached"
            },
            "correctAnswer": [
                "C"
            ],
            "explanation": "<p>Standard Magento has no API for view models to add cache tags. Hyvä allows view models to implement IdentityInterface, automatically adding their cache tags to page responses.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/advanced-topics/view-model-cache-tags.html\" target=\"_blank\" rel=\"noopener\">View Model Cache Tags</a> (Hyvä docs)</li><li><a href=\"https://docs.hyva.io/hyva-themes/advanced-topics/core-block-html-full-page-caching.html\" target=\"_blank\" rel=\"noopener\">Block HTML and Full Page Caching</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0016",
            "topic": 1,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "How does Varnish handle FPC cache invalidation?",
            "options": {
                "A": "Varnish does not support cache invalidation",
                "B": "Magento sends HTTP PURGE requests with X-Magento-Tags-Pattern header, Varnish evicts matching records",
                "D": "Varnish clears all cache",
                "C": "Cache must be cleared manually"
            },
            "correctAnswer": [
                "B"
            ],
            "explanation": "<p>Varnish FPC invalidation uses HTTP PURGE requests with X-Magento-Tags-Pattern containing regex patterns. Varnish evicts all cache records whose tags match the pattern.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/advanced-topics/core-block-html-full-page-caching.html\" target=\"_blank\" rel=\"noopener\">Block HTML and Full Page Caching</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0017",
            "topic": 1,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What is the difference between Block HTML cache and Full Page Cache?",
            "options": {
                "D": "There is no difference",
                "B": "Block HTML cache stores individual block output, FPC stores complete HTML page responses",
                "C": "Block HTML cache is faster",
                "A": "FPC only works with Varnish"
            },
            "correctAnswer": [
                "B"
            ],
            "explanation": "<p>Block HTML cache stores rendered output of individual blocks. FPC stores complete HTML page responses, dramatically reducing server load by serving cached pages without Magento execution.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/advanced-topics/core-block-html-full-page-caching.html\" target=\"_blank\" rel=\"noopener\">Block HTML and Full Page Caching</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0018",
            "topic": 1,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What is ESI (Edge Side Includes) cache used for?",
            "options": {
                "B": "To cache only images",
                "C": "To cache page fragments that can be assembled at the edge, allowing mostly-static pages with dynamic blocks",
                "A": "To disable caching",
                "D": "ESI is not used in Magento"
            },
            "correctAnswer": [
                "C"
            ],
            "explanation": "<p>ESI allows caching page fragments separately with different TTLs. A mostly-static page can include dynamic blocks (like mini-cart) that are cached and assembled at the edge (Varnish).</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/advanced-topics/core-block-html-full-page-caching.html\" target=\"_blank\" rel=\"noopener\">Block HTML and Full Page Caching</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0019",
            "topic": 1,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "How is browser cache invalidated for static assets (JS, CSS)?",
            "options": {
                "A": "By clearing browser cache manually",
                "D": "By changing the version hash in the URL path (e.g., \/static\/version1234567890\/)",
                "B": "Browser cache cannot be invalidated",
                "C": "By using cache-control headers only"
            },
            "correctAnswer": [
                "D"
            ],
            "explanation": "<p>Static assets are invalidated by changing the version hash in their URL path. When Magento deploys new assets, the version changes, forcing browsers to fetch fresh files.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/advanced-topics/core-block-html-full-page-caching.html\" target=\"_blank\" rel=\"noopener\">Block HTML and Full Page Caching</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0020",
            "topic": 1,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What happens if a block with customer-specific data uses block_html cache without proper cache tags?",
            "options": {
                "B": "The cache works perfectly",
                "D": "Customer data may be shown to other customers, causing privacy issues",
                "C": "The block is not cached",
                "A": "Cache tags are not needed"
            },
            "correctAnswer": [
                "D"
            ],
            "explanation": "<p>Without proper cache tags, block_html cache may serve cached content containing one customer's data to another customer, causing serious privacy and security issues.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/advanced-topics/core-block-html-full-page-caching.html\" target=\"_blank\" rel=\"noopener\">Block HTML and Full Page Caching</a> (Hyvä docs)</li><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/csp/csp-and-block-caching.html\" target=\"_blank\" rel=\"noopener\">CSP and block_html cache</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0021",
            "topic": 1,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What interface must blocks implement to contribute cache tags to FPC?",
            "options": {
                "C": "Magento\\Framework\\View\\Element\\BlockInterface",
                "B": "Magento\\Framework\\DataObject\\IdentityInterface",
                "D": "Magento\\Framework\\View\\Element\\TemplateInterface",
                "A": "Hyva\\Theme\\Model\\ViewModelInterface"
            },
            "correctAnswer": [
                "B"
            ],
            "explanation": "<p>Blocks must implement IdentityInterface with getIdentities() method to contribute cache tags to FPC responses. The identities are aggregated into X-Magento-Tags header.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/advanced-topics/core-block-html-full-page-caching.html\" target=\"_blank\" rel=\"noopener\">Block HTML and Full Page Caching</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0022",
            "topic": 1,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "How does Hyv\u00e4 enable view models to contribute FPC cache tags?",
            "options": {
                "B": "View models cannot contribute cache tags",
                "D": "View models implement IdentityInterface, ViewModelRegistry collects tags and adds them to page responses",
                "A": "View models must be blocks",
                "C": "Cache tags are added manually in templates"
            },
            "correctAnswer": [
                "D"
            ],
            "explanation": "<p>Hyvä's ViewModelRegistry automatically collects cache tags from view models that implement IdentityInterface and adds them to both Block HTML cache and FPC responses.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/advanced-topics/view-model-cache-tags.html\" target=\"_blank\" rel=\"noopener\">View Model Cache Tags</a> (Hyvä docs)</li><li><a href=\"https://docs.hyva.io/hyva-themes/writing-code/working-with-view-models/index.html\" target=\"_blank\" rel=\"noopener\">Working with View Models</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0023",
            "topic": 1,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What is cache TTL (Time To Live)?",
            "options": {
                "B": "Total Time Limit - maximum cache size",
                "D": "Time To Live - expiration time after which cache records are automatically discarded",
                "C": "Time To Load - how long cache takes to load",
                "A": "TTL is not used in caching"
            },
            "correctAnswer": [
                "D"
            ],
            "explanation": "<p>TTL is the expiration time for cache records. After the TTL expires, cache backends automatically discard records, even if they haven't been invalidated by cache tags.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/advanced-topics/core-block-html-full-page-caching.html\" target=\"_blank\" rel=\"noopener\">Block HTML and Full Page Caching</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0024",
            "topic": 1,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What is the difference between cache:clean and cache:flush in Magento?",
            "options": {
                "A": "They are identical",
                "D": "cache:clean removes specific cache types, cache:flush removes all cache types",
                "B": "cache:clean is faster",
                "C": "Only cache:flush works"
            },
            "correctAnswer": [
                "D"
            ],
            "explanation": "<p>cache:clean removes specific cache types (e.g., config, layout). cache:flush removes all cache types. Use cache:clean during development, cache:flush only when necessary.</p><div class=\"study-references\"><strong>References</strong><ul><li><a href=\"https://docs.hyva.io/hyva-themes/advanced-topics/core-block-html-full-page-caching.html\" target=\"_blank\" rel=\"noopener\">Block HTML and Full Page Caching</a> (Hyvä docs)</li></ul></div>",
            "isMultiple": false,
            "id": "q_0025",
            "topic": 1,
            "difficulty": "medium",
            "type": "multiple_choice"
        }
    ]
};
