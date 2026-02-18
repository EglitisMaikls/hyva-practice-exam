window.STUDY_CONTENT = window.STUDY_CONTENT || {};
window.STUDY_CONTENT[5] = {
    name: "Tailwind CSS and Hyvä",
    subsections: [
        {
            title: "Customize a theme using the theme Tailwind configuration",
            bullets: [
                "Changing of the color theme, breakpoints etc",
                "Demonstrate an understanding of the extends section in the tailwind.config.js"
            ],
            content: `<h3 class="study-content-heading">1. The "extend" Concept</h3>
<p>The most important concept in <code>tailwind.config.js</code> is the difference between defining values directly under <code>theme</code> versus under <code>theme.extend</code>.</p>

<ul>
    <li><strong>Direct Definition (Overwriting):</strong> If you define <code>colors</code> directly under <code>theme</code>, you <strong>replace</strong> all default Tailwind colors. You will lose access to standard utility classes like <code>text-red-500</code> unless you re-add them.</li>
    <li><strong>Extend Definition (Merging):</strong> If you define values under <code>theme.extend</code>, your values are <strong>merged</strong> with the defaults.</li>
</ul>

<pre><code class="language-javascript">// tailwind.config.js
module.exports = {
    theme: {
        // WRONG (usually): This wipes out all default colors (gray, red, blue, etc.)
        colors: {
            primary: '#000000'
        },
        
        // CORRECT: This adds 'primary' while keeping 'red-500', 'blue-700', etc.
        extend: {
            colors: {
                primary: {
                    lighter: '#4488cc',
                    DEFAULT: '#0055aa',
                    darker: '#002244'
                }
            }
        }
    }
}</code></pre>

<h3 class="study-content-heading">2. Customizing Colors</h3>
<p>Hyvä themes typically declare a standard set of semantic color names (primary, secondary, container-background) in the <code>extend</code> section. Changing the color scheme of a site usually involves updating these specific hex codes.</p>
<pre><code class="language-javascript">theme: {
    extend: {
        colors: {
            primary: {
                DEFAULT: '#FF5733', // Brand Orange
                dark: '#C70039'
            },
            secondary: {
                DEFAULT: '#900C3F'
            }
        },
        // Using CSS Variables for dynamic theming
        borderColor: {
            DEFAULT: 'var(--border-color, #e5e7eb)' 
        }
    }
}</code></pre>

<h3 class="study-content-heading">3. Customizing Breakpoints</h3>
<p>Breakpoints are defined in the <code>screens</code> object. You can override them to match specific design requirements (e.g., a wider desktop view).</p>
<pre><code class="language-javascript">theme: {
    // It is common to overwrite screens directly if you want to enforce a specific grid system
    screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px'
    }
}</code></pre>`
        },
        {
            title: "Demonstrate ability to use CSS variables to customize a Hyvä theme",
            bullets: [
                "Declaring and using CSS variables to avoid template overrides"
            ],
            content: `<h3 class="study-content-heading">1. Why use CSS Variables?</h3>
<p>Hardcoding colors or spacing in <code>tailwind.config.js</code> creates static values. If you want to change a color based on a store view configuration or a user selection, you normally have to rebuild the CSS.</p>
<p><strong>The Solution:</strong> Map Tailwind utility classes to <strong>CSS Variables</strong> (Custom Properties). This allows you to change the visual design by simply updating the variable's value in a CSS file or an inline style, without touching the Tailwind build process or overriding templates.</p>

<h3 class="study-content-heading">2. Configuring Tailwind (The 'twProps' Helper)</h3>
<p>Hyvä provides a helper function <code>twProps</code> (available in <code>@hyva-themes/hyva-modules</code>) to easily map Tailwind configuration to CSS variables while maintaining support for opacity modifiers.</p>

<pre><code class="language-javascript">// tailwind.config.js
const { twProps } = require('@hyva-themes/hyva-modules');
const colors = require('tailwindcss/colors');

module.exports = {
    theme: {
        extend: {
            // Automatically creates mappings to --color-primary-* variables
            colors: twProps({
                primary: {
                    lighter: colors.blue['400'], // Fallback value
                    DEFAULT: colors.blue['600'],
                    darker: colors.blue['800']
                }
            })
        }
    }
}</code></pre>
<p><strong>Result:</strong> Use <code>bg-primary</code> in your HTML. Tailwind generates CSS using <code>var(--color-primary, #2563eb)</code>.</p>

<h3 class="study-content-heading">3. Overriding Values Without Recompiling</h3>
<p>Once your Tailwind config relies on variables, you can change the theme globally or locally.</p>

<p><strong>Scenario A: Global Theme Change</strong><br>
In your theme's CSS file, simply redefine the variables:</p>
<pre><code class="language-css">:root {
    /* Changes 'bg-primary' across the whole site instantly */
    --color-primary: #ff5500; 
}</code></pre>

<p><strong>Scenario B: Dynamic/Scoped Change</strong><br>
Inject values via PHP into the <code>style</code> attribute. This is powerful for CMS blocks or user-configurable widgets.</p>
<pre><code class="language-php">&lt;!-- Example: A banner with a custom background color set in admin --&gt;
&lt;div class="bg-primary p-4" style="--color-primary: &lt;?= $block-&gt;getCustomColor() ?&gt;"&gt;
    &lt;h1&gt;I am dynamically colored!&lt;/h1&gt;
&lt;/div&gt;</code></pre>

<h3 class="study-content-heading">4. Arbitrary Values</h3>
<p>For one-off values that don't need to be in the config, you can use Tailwind's arbitrary value syntax with variables:</p>
<pre><code class="language-html">&lt;div class="w-[var(--container-width)]"&gt;...&lt;/div&gt;</code></pre>`
        },
        {
            title: "Demonstrate ability to use custom fonts with the lowest possible impact on performance metrics",
            bullets: [
                "Local font files vs CDNs",
                "Required steps to use a custom font in Hyvä",
                "Using size-adjust and ascent-override to avoid preloading"
            ],
            content: `<h3 class="study-content-heading">1. Local vs. CDN (Google Fonts)</h3>
<p>For Hyvä and Core Web Vitals, <strong>Self-Hosting (Local)</strong> is universally recommended over CDNs.</p>
<ul>
    <li><strong>CDN (Google Fonts):</strong> Requires a separate DNS lookup, TCP connection, and SSL handshake. This adds latency. It also introduces a dependency on an external server.</li>
    <li><strong>Local (Self-Hosted):</strong> Font files (WOFF2) are served from the same domain as your HTML/CSS. They benefit from HTTP/2 multiplexing and give you full control over caching headers.</li>
</ul>

<h3 class="study-content-heading">2. Implementation Steps</h3>
<p><strong>Step 1: Add Files</strong><br>
Place your WOFF2 files in your theme's web directory:<br>
<code>app/design/frontend/Vendor/Theme/web/fonts/myfont.woff2</code></p>

<p><strong>Step 2: Declare @font-face</strong><br>
Add the declaration to your main CSS file (e.g., <code>web/tailwind/tailwind-source.css</code>):</p>
<pre><code class="language-css">@font-face {
    font-family: 'MyCustomFont';
    src: url('../fonts/myfont.woff2') format('woff2');
    font-weight: 400;
    font-display: swap; /* Critical for perceived performance */
}</code></pre>

<p><strong>Step 3: Update Tailwind Config</strong><br>
Map the font family in <code>tailwind.config.js</code> so you can use utility classes like <code>font-sans</code>.</p>
<pre><code class="language-javascript">theme: {
    extend: {
        fontFamily: {
            sans: ['"MyCustomFont"', 'sans-serif'] // Set as default sans
        }
    }
}</code></pre>

<h3 class="study-content-heading">3. The "No-Preload" Strategy (size-adjust)</h3>
<p>Historically, developers used <code>&lt;link rel="preload"&gt;</code> to prevent layout shifts (CLS) caused by fonts loading late. However, preloading fonts consumes bandwidth early, delaying the Largest Contentful Paint (LCP) image.</p>
<p><strong>The Hyvä/Modern Solution:</strong></p>
<ol>
    <li>Use <code>font-display: swap</code> (Text is shown immediately in a fallback font).</li>
    <li>Use <strong>Metric Overrides</strong> to make the fallback font take up the exact same physical space as the custom font.</li>
</ol>

<pre><code class="language-css">@font-face {
    font-family: 'MyFallbackParams';
    src: local('Arial');
    /* Adjust these values until Arial matches MyCustomFont exactly */
    ascent-override: 95%;
    descent-override: 20%;
    size-adjust: 105%; 
}

/* Usage stack */
font-family: 'MyCustomFont', 'MyFallbackParams', sans-serif;</code></pre>

<div class="study-note study-note-important"><strong>Why?</strong> By tuning the fallback font metrics, the page renders text instantly (0ms blocking time). When the custom font loads, the text style changes, but the layout <strong>does not move</strong> (0 CLS). This allows you to remove <code>preload</code> tags, freeing up bandwidth for the LCP image.</div>`
        }
    ]
};
