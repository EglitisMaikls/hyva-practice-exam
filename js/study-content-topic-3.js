/**
 * @author    Magebit <info@magebit.com>
 * @copyright Copyright (c) Magebit, Ltd. (https://magebit.com)
 * @license   https://magebit.com/code-license
 */

window.STUDY_CONTENT = window.STUDY_CONTENT || {};
window.STUDY_CONTENT[3] = {
    name: "Themes",
    subsections: [
        {
            title: "Demonstrate how to share styles and Tailwind configuration between themes",
            bullets: [
                "Common customizations in a child theme tailwind.config.js",
                "Sourcing parent theme files (content / hyva-sources)",
                "Importing parent theme CSS and using presets",
                "Sharing styles with CSS variables"
            ],
            content: `<h3 class="study-content-heading">Common customizations in a child theme tailwind.config.js</h3>
<p>In Magento 2 Luma, CSS inheritance via Less was automatic. In Hyvä, <strong>Tailwind config and CSS do not inherit from the parent theme</strong> if they are missing in the child. You must explicitly import settings and styles from the parent into the child.</p>
<p>Inside <code>theme.extend</code>, override only what you need:</p>
<ul>
<li><strong>Colors:</strong> Override <code>primary</code>, <code>secondary</code>, or use <code>twProps</code> (v3) for variable-based colors.</li>
<li><strong>Screens:</strong> Add or override breakpoints (e.g. <code>"3xl": "2200px"</code>).</li>
<li><strong>Font family:</strong> Set <code>fontFamily.sans</code> (or others) for custom fonts.</li>
</ul>
<pre><code class="language-javascript">theme: {
    extend: {
        colors: {
            primary: {
                DEFAULT: '#0055aa',
                lighter: '#4488cc'
            }
        },
        fontFamily: {
            sans: ['"Open Sans"', 'sans-serif']
        }
    }
}</code></pre>
<div class="study-note study-note-important"><strong>Important:</strong> Always use <code>theme.extend</code> for overrides. Defining keys directly under <code>theme</code> (without extend) overwrites that entire section and you lose default colors, screens, etc.</div>
<p><strong>Overriding or excluding module CSS:</strong> To override or remove default CSS from a Hyvä module (e.g. checkout):</p>
<ul>
<li><strong>Tailwind v4:</strong> In the theme's <code>hyva.config.json</code>, use <code>tailwind.exclude</code> array (e.g. <code>{ "src": "vendor/hyva-themes/magento2-hyva-checkout/src" }</code>).</li>
<li><strong>Tailwind v3:</strong> In <code>web/tailwind/postcss.config.js</code>, use <code>postcssImportHyvaModules({ excludeDirs: ["vendor/hyva-themes/magento2-hyva-checkout/src"] })</code>.</li>
</ul>
<table class="study-table">
<thead><tr><th>Hyvä Default Theme</th><th>Tailwind</th></tr></thead>
<tbody>
<tr><td>1.4.x</td><td>Tailwind v4.x</td></tr>
<tr><td>1.2.x, 1.3.x</td><td>Tailwind v3.x</td></tr>
<tr><td>1.0.x, 1.1.x</td><td>Tailwind v2.x</td></tr>
</tbody>
</table>

<h3 class="study-content-heading">Sourcing parent theme files (content / hyva-sources)</h3>
<p>Before importing CSS or config, Tailwind must <strong>scan the parent theme's files</strong> for utility classes. Otherwise, classes used in the parent's .phtml/.xml won't be generated and those parts of the site will look broken.</p>
<ul>
<li><strong>Tailwind v3</strong> (Hyvä 1.3.x and earlier): Add the parent theme's file paths to the <code>content</code> array in your child theme's <code>tailwind.config.js</code>.</li>
<li><strong>Tailwind v4</strong> (Hyvä 1.4.0+): Use the <code>hyva-sources</code> command and configure include paths in <code>hyva.config.json</code> (e.g. <code>"tailwind": { "include": [{ "src": "vendor/hyva-themes/magento2-default-theme" }] }</code>).</li>
</ul>

<h3 class="study-content-heading">Importing parent theme CSS and using presets</h3>
<p><strong>Sharing Tailwind configuration:</strong> Use <code>mergeTailwindConfig</code> from <code>@hyva-themes/hyva-modules</code> and the <code>presets</code> key to inherit the parent theme's config, then override in <code>theme.extend</code>.</p>
<pre><code class="language-javascript">const { mergeTailwindConfig } = require("@hyva-themes/hyva-modules");
const parentTheme = require("../../../../../../../vendor/hyva-themes/magento2-default-theme/web/tailwind/tailwind.config.js");

/** @type {import('tailwindcss').Config} */
module.exports = mergeTailwindConfig({
    presets: [parentTheme],
    content: [
        // Include both child and parent theme paths
    ],
    theme: {
        extend: {
            // Your overrides only — do not replace entire sections here
        }
    }
});</code></pre>
<p><strong>Alternative (granular):</strong> You can <code>require</code> the parent config and merge only specific parts (e.g. <code>...parentTheme.theme.extend.screens</code>) instead of using presets.</p>
<p><strong>Importing parent theme CSS:</strong> In your child theme's <code>tailwind-source.css</code>, you can <code>@import</code> specific CSS files from the parent theme to reuse base, components, theme, and utilities.</p>
<pre><code class="language-css">/* Import from Hyvä default theme - specific files, not the whole tailwind-source.css */
@import "../../../../../../../vendor/hyva-themes/magento2-default-theme/web/tailwind/base";
@import "../../../../../../../vendor/hyva-themes/magento2-default-theme/web/tailwind/components";
@import "../../../../../../../vendor/hyva-themes/magento2-default-theme/web/tailwind/theme";
@import "../../../../../../../vendor/hyva-themes/magento2-default-theme/web/tailwind/utilities";
</code></pre>
<div class="study-note"><strong>Do not</strong> import the parent's entire <code>tailwind-source.css</code> — that can cause redundant Tailwind imports.</div>

<h3 class="study-content-heading">Sharing styles with CSS variables</h3>
<p>CSS variables (custom properties) let a parent theme define the structure (e.g. <code>--color-primary</code>) and a child theme provide new values. This is the <strong>recommended approach</strong> for theming and variations like dark mode — no need to touch underlying CSS or config for each variation.</p>
<ul>
<li><strong>Where to declare variables:</strong> In global CSS (<code>:root</code> in a file imported by tailwind-source.css), in Magento Design Configuration → HTML Head → Scripts and Style Sheets, or in .phtml in a <code>&lt;style&gt;</code> block for dynamic values.</li>
<li><strong>Tailwind v4:</strong> Uses CSS variables by default; main colors are declared in tailwind-source.css via <code>@theme { --color-bg: ...; }</code>.</li>
<li><strong>Tailwind v3:</strong> Use <code>twProps</code> and <code>twVar</code> from <code>@hyva-themes/hyva-modules</code> in tailwind.config.js so variables work correctly with Tailwind's opacity modifiers (they rely on <code>color-mix</code>).</li>
</ul>

<div class="study-references"><strong>References</strong>
<ul>
<li><a href="https://docs.hyva.io/hyva-themes/working-with-tailwindcss/sharing-common-css-between-themes.html" target="_blank" rel="noopener">Sharing common CSS between themes</a> (Hyvä docs)</li>
<li><a href="https://docs.hyva.io/hyva-themes/working-with-tailwindcss/using-hyva-modules/sources.html" target="_blank" rel="noopener">The hyva-sources command</a> (Hyvä docs)</li>
<li><a href="https://docs.hyva.io/hyva-themes/working-with-tailwindcss/css-variables-plus-tailwindcss.html" target="_blank" rel="noopener">CSS Variables + TailwindCSS</a> (Hyvä docs)</li>
<li><a href="https://docs.hyva.io/hyva-themes/working-with-tailwindcss/overriding-module-css.html" target="_blank" rel="noopener">Overriding CSS from modules</a> (Hyvä docs)</li>
<li><a href="https://docs.hyva.io/hyva-themes/working-with-tailwindcss/hyva-theme-css-files.html" target="_blank" rel="noopener">The Hyvä theme CSS file directory structure</a> (Hyvä docs)</li>
</ul></div>`
        }
    ]
};
