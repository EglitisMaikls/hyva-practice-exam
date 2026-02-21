/**
 * @author    Magebit <info@magebit.com>
 * @copyright Copyright (c) Magebit, Ltd. (https://magebit.com)
 * @license   https://magebit.com/code-license
 */

window.STUDY_CONTENT = window.STUDY_CONTENT || {};
window.STUDY_CONTENT[7] = {
    name: "Frontend Performance",
    subsections: [
        {
            title: "Demonstrate understanding of FCP, INP, TBT, LCP, CLS",
            bullets: [
                "Understanding the dependency of all metrics on TTFB"
            ],
            content: `<h3 class="study-content-heading">Core Web Vitals and key metrics</h3>
<p>Google's Core Web Vitals measure real-world user experience through three main metrics: <strong>Largest Contentful Paint (LCP)</strong> for loading performance, <strong>Cumulative Layout Shift (CLS)</strong> for visual stability, and <strong>Interaction to Next Paint (INP)</strong> for responsiveness. These metrics directly influence search rankings and SEO.</p>

<p><strong>Metric definitions:</strong></p>
<ul>
    <li><strong>LCP</strong> — when the largest image or text block in the viewport is painted. Improves with faster resource delivery and less render-blocking work.</li>
    <li><strong>CLS</strong> — unexpected layout movement during load (e.g. images without dimensions, content injected after paint). Lower is better; aim for minimal shift.</li>
    <li><strong>INP</strong> — responsiveness: time from user input to next paint. Affected by main-thread blocking (e.g. heavy JS on first interaction).</li>
    <li><strong>FCP (First Contentful Paint)</strong> — when the first text or image is rendered. Preloading fonts can block FCP and hurt LCP.</li>
    <li><strong>TBT (Total Blocking Time)</strong> — total time the main thread was blocked long enough to delay input. Deferring Alpine components and non-critical JS reduces TBT.</li>
</ul>

<h3 class="study-content-heading">Dependency on TTFB (Time to First Byte)</h3>
<p><strong>All loading-related metrics depend on TTFB.</strong> Server-side caching (Varnish, Redis, Fastly) improves TTFB; a cached response can be delivered in around 200ms. A slow TTFB degrades LCP significantly because the browser cannot start parsing and rendering until the first byte arrives.</p>
<p>Once a page is cached, backend optimization no longer affects the request; remaining performance issues are frontend-related (asset size, render-blocking resources, layout stability, main-thread work). If a cached page is delivered within ~200ms and Lighthouse still scores below 100, the missing points are due to frontend factors.</p>
<p>Sources: <a href="https://docs.hyva.io/hyva-themes/building-your-theme/preserving-good-google-page-rank-metrics.html" target="_blank" rel="noopener">Preserving good Google page rank metrics</a>; <a href="https://docs.hyva.io/hyva-themes/faqs/performance-optimization.html" target="_blank" rel="noopener">Performance optimization</a>.</p>`
        },
        {
            title: "Demonstrate ability to improve given performance metrics of a page",
            bullets: [
                "Resolving excessive DOM size issues",
                "Resolving CLS issues",
                "Resolving LCP issues"
            ],
            content: `<h3 class="study-content-heading">Resolving excessive DOM size</h3>
<p>Lighthouse flags excessive DOM size when the initial document has too many nodes. Google and the browser count every node; hidden (CSS-only) content still counts.</p>
<ul>
    <li><strong>Alpine <code>&lt;template x-if="…"&gt;</code></strong> — Content inside <code>&lt;template x-if&gt;</code> is not in the initial DOM until Alpine injects it when the condition is true. Use for conditionally visible sections. Downside: that content is not in the initial HTML, so it may not be indexed by crawlers; use with care.</li>
    <li><strong>Conditional DOM with <code>matchMedia</code></strong> — For viewport-dependent content (e.g. mobile vs desktop), use Alpine's <code>&lt;template x-if&gt;</code> with <code>window.matchMedia</code> so only the relevant branch exists in the DOM. Elements hidden only with CSS still count toward DOM size.</li>
    <li><strong>AJAX injection</strong> — Remove below-the-fold content from the initial HTML and load it via AJAX when the user scrolls. Reduces both DOM size and initial payload; same indexing caveat as <code>x-if</code>.</li>
    <li>Avoid large Alpine components on catalog/CMS pages; large DOM branches increase initialization time and main-thread blocking. Prefer vanilla JS or minimal DOM for hot paths.</li>
</ul>

<h3 class="study-content-heading">Resolving CLS issues</h3>
<p>Layout shifts occur when elements move after the page starts rendering. Prevent them with:</p>
<ul>
    <li><strong>Image and video dimensions</strong> — Always set <code>width</code> and <code>height</code> (or aspect-ratio) so the browser reserves space before the asset loads.</li>
    <li><strong>Avoid JS-driven visibility changes after paint</strong> — Do not show/hide major UI (e.g. cookie banners) only with JS after load without reserving space. Pre-allocate space in CSS or inline dimensions.</li>
    <li><strong>Optimize image sizes</strong> — Serve appropriately sized images to avoid reflow from oversized assets.</li>
    <li><strong>Facade for third-party widgets</strong> — Chat, search, video embeds: show a placeholder (facade) that reserves the same space as the real widget; load the script on interaction and swap. Prevents CLS from content appearing late.</li>
    <li><strong>Forms</strong> — Use the <code>field field-reserved</code> wrapper classes to reserve space for validation messages so error text does not cause layout shift.</li>
    <li><strong>Fonts</strong> — Avoid preloading fonts when possible; use <code>font-display: swap</code> and system fallbacks with matching metrics. Set line-height to reserve vertical space and reduce shift when custom fonts load.</li>
</ul>

<h3 class="study-content-heading">Resolving LCP issues</h3>
<ul>
    <li><strong>Lazy load below-the-fold images</strong> — Use <code>loading="lazy"</code> for images not in the initial viewport so they do not compete for bandwidth with LCP candidates.</li>
    <li><strong>Defer non-critical JavaScript</strong> — Load scripts when needed (on interaction, on scroll, or via <code>x-defer</code>) so parsing/execution does not delay first paint and LCP.</li>
    <li><strong>Server and caching</strong> — Improve TTFB with Varnish/Redis so the HTML and critical assets arrive sooner; this directly helps LCP.</li>
    <li><strong>Font loading</strong> — Preloading custom fonts can block FCP and hurt LCP. Prefer system fallbacks, <code>font-display: swap</code>, and reserving space with line-height instead of blocking preloads.</li>
</ul>
<p>Sources: <a href="https://docs.hyva.io/hyva-themes/building-your-theme/preserving-good-google-page-rank-metrics.html" target="_blank" rel="noopener">Preserving good Google page rank metrics</a>; <a href="https://docs.hyva.io/hyva-themes/faqs/performance-optimization.html" target="_blank" rel="noopener">Performance optimization</a>; <a href="https://docs.hyva.io/hyva-themes/writing-code/patterns/loading-external-javascript.html" target="_blank" rel="noopener">Loading external JavaScript</a>; <a href="https://docs.hyva.io/hyva-themes/writing-code/patterns/running-js-only-on-mobile.html" target="_blank" rel="noopener">Running JS only on mobile</a>.</p>`
        },
        {
            title: "Demonstrate ability to use performance measuring tooling effectively and follow recommendations (Lighthouse, CWV)",
            bullets: [
                "Following advice to improve performance in pagespeed results",
                "Determining low-hanging fruit in pagespeed recommendations"
            ],
            content: `<h3 class="study-content-heading">Following advice to improve performance in pagespeed results.</h3>
<p><strong>Lab data</strong> (Lighthouse, Performance panel) is collected in a controlled environment and is useful for debugging; it may not reflect real-world bottlenecks. <strong>Field data</strong> (Chrome UX Report / CrUX) reflects actual user experience but has a more limited set of metrics. PageSpeed Insights uses both when enough CrUX data exists.</p>

<p>Runs tests against a URL in the browser (lab data). Run in a <strong>private browsing window</strong> (no extensions), throttle to <strong>Slow 3G</strong> in the Network panel, and use the <strong>Mobile Device</strong> setting. The report includes links to documentation for each recommendation—follow them to apply fixes. Useful before deployment since it does not require live traffic.</p>

<p>Use <strong>CrUX (Chrome UX Report)</strong> for real-user data when available, plus lab data. Better reflects how the site performs for actual visitors (device, location, network). If CrUX data is insufficient, only a Lighthouse-style lab report is shown (run on Google's baseline environment). Reports link to frontend performance topics; use them to prioritize and implement fixes.</p>

<p>The <strong>Performance</strong> panel records a timeline (script, layout, paint) for detailed analysis; it is lab-based and requires some familiarity with browser internals. The <strong>Performance Insights</strong> panel focuses on page load and Core Web Vitals with an insights timeline and actionable suggestions. For both, use throttling (e.g. Slow 3G + 4x CPU slowdown for Insights) to simulate typical user conditions.</p>

<p>CrUX is the public field dataset from Chrome users. For deeper analysis, use the <strong>PerformanceObserver</strong> API (e.g. for <code>largest-contentful-paint</code> or custom <code>elementtiming</code> entries) or third-party RUM tools (e.g. RumVision, Debugbear, JaJuMa RUM for Hyvä) to collect real-user metrics.</p>

<h3 class="study-content-heading">Following advice and low-hanging fruit</h3>
<ul>
    <li><strong>Use recommendations in order</strong> — Address what Lighthouse/PageSpeed reports first; each report links to docs that explain how to fix the issue.</li>
    <li><strong>Low-effort wins:</strong>
        <ul>
            <li><strong>x-defer</strong> — Defer below-the-fold Alpine components with <code>x-defer="intersect"</code> (or <code>interact</code> / <code>idle</code> / <code>event:…</code>) to reduce main-thread blocking and improve TBT/INP. Hyvä can inject defer rules via config (e.g. product sliders, filters, review form). Do not add x-defer everywhere; test impact.</li>
            <li><strong>Lazy load images</strong> — Add <code>loading="lazy"</code> to below-the-fold images.</li>
            <li><strong>DOM size</strong> — Wrap heavy, conditional UI in <code>&lt;template x-if&gt;</code> or load below-the-fold content via AJAX.</li>
            <li><strong>Third-party scripts</strong> — Defer analytics/chat/tracking until user interaction (e.g. <code>init-external-scripts</code>), or use facades for widgets to avoid CLS. Avoid loading many scripts on first interaction to protect INP.</li>
            <li><strong>Images and fonts</strong> — Compress images, set dimensions, avoid render-blocking font preloads.</li>
        </ul>
    </li>
</ul>
<p>Sources: <a href="https://docs.hyva.io/hyva-themes/advanced-topics/performance-and-crux.html" target="_blank" rel="noopener">Performance and CrUX</a>; <a href="https://docs.hyva.io/hyva-themes/faqs/performance-optimization.html" target="_blank" rel="noopener">Performance optimization</a>.</p>`
        }
    ]
};
