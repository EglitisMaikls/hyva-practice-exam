/**
 * @author    Magebit <info@magebit.com>
 * @copyright Copyright (c) Magebit, Ltd. (https://magebit.com)
 * @license   https://magebit.com/code-license
 */

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
            content: `<h3 class="study-content-heading">Changing of the color theme, breakpoints etc</h3>
<p>Hyvä themes typically declare semantic color names (primary, secondary, container-background) and breakpoints in the Tailwind config. Customizing the look usually means updating these.</p>
<p><strong>Colors:</strong> Override in <code>theme.extend.colors</code> so default Tailwind colors remain available:</p>
<pre><code class="language-javascript">theme: {
    extend: {
        colors: {
            primary: {
                DEFAULT: '#FF5733',
                dark: '#C70039'
            },
            secondary: {
                DEFAULT: '#900C3F'
            },
            borderColor: {
                DEFAULT: 'var(--border-color, #e5e7eb)'
            }
        }
    }
}</code></pre>
<p><strong>Breakpoints:</strong> Defined in <code>screens</code>. You can override them to match your grid (e.g. wider desktop). It is common to overwrite <code>screens</code> directly if you want one specific grid system:</p>
<pre><code class="language-javascript">theme: {
    screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px'
    }
}</code></pre>

<h3 class="study-content-heading">Demonstrate an understanding of the extends section in the tailwind.config.js</h3>
<p>The most important concept is the difference between defining values directly under <code>theme</code> versus under <code>theme.extend</code>.</p>
<ul>
<li><strong>Direct definition (overwriting):</strong> Defining <code>colors</code> (or <code>screens</code>, etc.) directly under <code>theme</code> <strong>replaces</strong> all defaults. You lose utilities like <code>text-red-500</code> unless you re-add them.</li>
<li><strong>Extend definition (merging):</strong> Defining under <code>theme.extend</code> <strong>merges</strong> your values with the defaults.</li>
</ul>
<pre><code class="language-javascript">// tailwind.config.js
module.exports = {
    theme: {
        // WRONG (usually): wipes out all default colors
        // colors: { primary: '#000000' },

        // CORRECT: adds 'primary' while keeping red-500, blue-700, etc.
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
};</code></pre>
<div class="study-note study-note-important"><strong>Rule:</strong> Use <code>theme.extend</code> for overrides so you do not lose default theme keys.</div>

<div class="study-references"><strong>References</strong>
<ul>
<li><a href="https://docs.hyva.io/hyva-themes/working-with-tailwindcss/sharing-common-css-between-themes.html" target="_blank" rel="noopener">Sharing common CSS between themes</a> (Hyvä docs)</li>
<li><a href="https://docs.hyva.io/hyva-themes/faqs/tailwindcss.html" target="_blank" rel="noopener">TailwindCSS troubleshooting</a> (Hyvä docs)</li>
</ul></div>`
        },
        {
            title: "Demonstrate ability to use CSS variables to customize a Hyvä theme",
            bullets: [
                "Declaring and using CSS variables to avoid template overrides"
            ],
            content: `<h3 class="study-content-heading">Declaring and using CSS variables to avoid template overrides</h3>
<p>Hardcoding colors or spacing in <code>tailwind.config.js</code> creates static values. To change a color by store view or user selection you would normally have to rebuild CSS. Mapping Tailwind utilities to <strong>CSS variables</strong> lets you change the design by updating the variable (in CSS or inline style) without touching the Tailwind build or overriding templates.</p>
<p><strong>Configuring Tailwind (twProps):</strong> Hyvä provides <code>twProps</code> in <code>@hyva-themes/hyva-modules</code> to map config to CSS variables while keeping opacity modifiers working.</p>
<pre><code class="language-javascript">const { twProps } = require('@hyva-themes/hyva-modules');
const colors = require('tailwindcss/colors');

module.exports = {
    theme: {
        extend: {
            colors: twProps({
                primary: {
                    lighter: colors.blue['400'],
                    DEFAULT: colors.blue['600'],
                    darker: colors.blue['800']
                }
            })
        }
    }
};</code></pre>
<p><strong>Result:</strong> Use <code>bg-primary</code> in HTML; Tailwind generates CSS like <code>var(--color-primary, #2563eb)</code>.</p>
<p><strong>Overriding without recompiling:</strong></p>
<ul>
<li><strong>Global:</strong> Redefine variables in your theme CSS, e.g. <code>:root { --color-primary: #ff5500; }</code>.</li>
<li><strong>Dynamic/scoped:</strong> Inject from PHP into a <code>style</code> attribute (e.g. CMS or admin-configured widgets): <code>style="--color-primary: &lt;?= $block-&gt;getCustomColor() ?&gt;"</code>.</li>
</ul>
<p><strong>Arbitrary values:</strong> For one-off values not in config, use Tailwind's arbitrary value syntax: <code>class="w-[var(--container-width)]"</code>.</p>

<div class="study-references"><strong>References</strong>
<ul>
<li><a href="https://docs.hyva.io/hyva-themes/working-with-tailwindcss/css-variables-plus-tailwindcss.html" target="_blank" rel="noopener">CSS Variables + TailwindCSS</a> (Hyvä docs)</li>
<li><a href="https://docs.hyva.io/hyva-themes/working-with-tailwindcss/using-hyva-modules/tokens.html" target="_blank" rel="noopener">The hyva-tokens command</a> (Hyvä docs)</li>
</ul></div>`
        },
        {
            title: "Demonstrate ability to use custom fonts with the lowest possible impact on performance metrics",
            bullets: [
                "Local font files vs CDNs",
                "Required steps to use a custom font in Hyvä",
                "Using size-adjust and ascent-override to avoid preloading"
            ],
            content: `<h3 class="study-content-heading">Local font files vs CDNs</h3>
<p>For Hyvä and Core Web Vitals, <strong>self-hosting (local)</strong> is recommended over CDNs.</p>
<ul>
<li><strong>CDN (e.g. Google Fonts):</strong> Extra DNS lookup, TCP connection, and SSL handshake add latency and create a dependency on an external server. Using Google servers can also raise GDPR concerns.</li>
<li><strong>Local (self-hosted):</strong> WOFF2 files are served from the same domain as the site, benefit from HTTP/2 and your caching, and give you full control.</li>
</ul>

<h3 class="study-content-heading">Required steps to use a custom font in Hyvä</h3>
<p><strong>Step 1 — Add files:</strong> Place WOFF2 files in your theme's web directory, e.g. <code>app/design/frontend/Vendor/Theme/web/fonts/myfont.woff2</code>.</p>
<p><strong>Step 2 — Declare @font-face:</strong> Add the declaration in your main CSS (e.g. <code>web/tailwind/tailwind-source.css</code> or <code>web/tailwind/components/typography.css</code>). Use <code>font-display: swap</code> for better perceived performance.</p>
<pre><code class="language-css">@font-face {
    font-family: 'MyCustomFont';
    src: url('../fonts/myfont.woff2') format('woff2');
    font-weight: 400;
    font-display: swap;
}</code></pre>
<p><strong>Step 3 — Update Tailwind config:</strong> Map the font in <code>tailwind.config.js</code> so you can use classes like <code>font-sans</code>:</p>
<pre><code class="language-javascript">theme: {
    extend: {
        fontFamily: {
            sans: ['"MyCustomFont"', 'sans-serif']
        }
    }
}</code></pre>

<h3 class="study-content-heading">Using size-adjust and ascent-override to avoid preloading</h3>
<p>Preloading fonts with <code>&lt;link rel="preload"&gt;</code> can reduce layout shift (CLS) but uses bandwidth early and can delay LCP. The recommended approach is to avoid preload and instead:</p>
<ol>
<li>Use <code>font-display: swap</code> so text appears immediately in a fallback font.</li>
<li>Use <strong>metric overrides</strong> on the fallback font so it reserves the same space as the custom font (no layout shift when the custom font loads).</li>
</ol>
<pre><code class="language-css">@font-face {
    font-family: 'MyFallbackParams';
    src: local('Arial');
    ascent-override: 95%;
    descent-override: 20%;
    size-adjust: 105%;
}
/* Usage: */
font-family: 'MyCustomFont', 'MyFallbackParams', sans-serif;</code></pre>
<div class="study-note study-note-important"><strong>Why:</strong> With matching fallback metrics, text renders immediately with no blocking and no CLS when the custom font loads. You can omit preload and reserve bandwidth for the LCP image.</div>

<div class="study-references"><strong>References</strong>
<ul>
<li><a href="https://docs.hyva.io/hyva-themes/faqs/how-to-custom-fonts.html" target="_blank" rel="noopener">Using custom fonts with Hyvä</a> (Hyvä docs)</li>
</ul></div>`
        }
    ]
};
