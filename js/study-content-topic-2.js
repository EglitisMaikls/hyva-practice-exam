/**
 * @author    Magebit <info@magebit.com>
 * @copyright Copyright (c) Magebit, Ltd. (https://magebit.com)
 * @license   https://magebit.com/code-license
 */

window.STUDY_CONTENT = window.STUDY_CONTENT || {};
window.STUDY_CONTENT[2] = {
    name: "Templates",
    subsections: [
        {
            title: "Determine how to escape values securely and depending on context",
            bullets: [
                "Escaping JSON to be rendered in a data attribute",
                "Escaping the value in a textarea input",
                "Escaping a product name"
            ],
            content: `<h3 class="study-content-heading">Escaping JSON to be rendered in a data attribute</h3>
<p>When passing data to Alpine.js or other JS via HTML attributes (e.g. <code>x-data</code>, <code>data-config</code>), you must prevent quotes and other characters in the JSON from breaking the attribute syntax. Use <code>escapeHtmlAttr</code> for attribute values.</p>
<pre><code class="language-php">&lt;input :value="calcValue" data-config="&lt;?= $escaper-&gt;escapeHtmlAttr($block-&gt;getConfig()) ?&gt;"&gt;</code></pre>
<pre><code class="language-php">&lt;div x-data="initComponent" data-config="&lt;?= $escaper-&gt;escapeHtmlAttr(json_encode($data)) ?&gt;"&gt;...&lt;/div&gt;</code></pre>
<p>In the component, read the value via <code>this.$el.dataset.config</code> (or the relevant <code>data-*</code> key). Use <code>escapeHtmlAttr</code> for attributes and <code>escapeJs</code> for script-injected strings; they use different encoding—using the wrong one can prevent the code from working.</p>

<h3 class="study-content-heading">Escaping the value in a textarea input</h3>
<p>The content inside a <code>&lt;textarea&gt;&lt;/textarea&gt;</code> is text node content, not an attribute value. It is vulnerable to XSS if user input includes closing tags or script. Escape output with <code>escapeHtml</code>.</p>
<pre><code class="language-php">&lt;textarea name="comment"&gt;&lt;?= $escaper-&gt;escapeHtml($userInput) ?&gt;&lt;/textarea&gt;</code></pre>

<h3 class="study-content-heading">Escaping a product name</h3>
<p>Displayed text such as product names can contain quotes, angle brackets, or ampersands. To prevent them from being interpreted as HTML or breaking attributes, use <code>escapeHtml</code> for content inside tags.</p>
<pre><code class="language-php">&lt;h1&gt;&lt;?= $escaper-&gt;escapeHtml($product-&gt;getName()) ?&gt;&lt;/h1&gt;</code></pre>

<table class="study-table">
<thead>
<tr><th>Context</th><th>Escaper method</th><th>Why</th></tr>
</thead>
<tbody>
<tr><td>Inside tags (e.g. <code>&lt;span&gt;...&lt;/span&gt;</code>)</td><td><code>escapeHtml()</code></td><td>Prevents tags/script in output from being rendered.</td></tr>
<tr><td>Inside attributes (e.g. <code>data-config="..."</code>)</td><td><code>escapeHtmlAttr()</code></td><td>Prevents quotes from closing the attribute early.</td></tr>
<tr><td>Inside JS string (e.g. <code>&lt;script&gt;...&lt;/script&gt;</code>)</td><td><code>escapeJs()</code></td><td>Prevents breaking out of the string literal.</td></tr>
<tr><td>URL parameters</td><td><code>escapeUrl()</code></td><td>Percent-encodes for URI compliance.</td></tr>
</tbody>
</table>

<div class="study-references"><strong>References</strong>
<ul>
<li><a href="https://docs.hyva.io/hyva-themes/writing-code/csp/alpine-csp-properties.html" target="_blank" rel="noopener">Alpine CSP</a></li>
<li><a href="https://docs.hyva.io/hyva-themes/writing-code/patterns/loading-external-javascript.html" target="_blank" rel="noopener">Loading external JavaScript</a> (Hyvä docs — escape by context: <code>escapeUrl()</code> for HTML attribute values, <code>escapeJs()</code> for JavaScript strings in .phtml)</li>
</ul></div>`
        },
        {
            title: "Determine how to render a child template with the current block instance",
            bullets: [
                "Rendering a template programmatically from a template without using a child block"
            ],
            content: `<h3 class="study-content-heading">Rendering a template programmatically from a template without using a child block</h3>
<p>To include another <code>.phtml</code> template (e.g. to split large files or reuse a snippet) without declaring a new block in layout XML, render it using the <strong>current block instance</strong> so <code>$block</code> (and <code>$viewModels</code>, <code>$escaper</code>) in the included template refer to the same context as the parent.</p>
<p><strong>Method:</strong> Resolve the template path with <code>getTemplateFile()</code> and render it with <code>fetchView()</code>.</p>
<pre><code class="language-php">&lt;?php
$templatePath = $block->getTemplateFile('Vendor_Module::directory/filename.phtml');
echo $block->fetchView($templatePath);
?&gt;</code></pre>
<p>Example from Hyvä (rendering a version-specific script template):</p>
<pre><code class="language-php">&lt;?= /** @noEscape */ $block->fetchView($block->getTemplateFile("Hyva_Theme::page/js/plugins/v\${version}/intersect.phtml")) ?&gt;</code></pre>
<p>Using <code>fetchView</code> avoids creating a new block via <code>getLayout()->createBlock(...)->setTemplate(...)->toHtml()</code>: it is more performant and shares the block's view model and data, so <code>$block->getData()</code> in the included template matches the parent.</p>
<div class="study-note"><strong>Note:</strong> When the included template outputs HTML that is already safe, you may need <code>/** @noEscape */</code> so Magento does not double-escape the result.</div>

<div class="study-references"><strong>References</strong>
<ul>
<li><a href="https://docs.hyva.io/hyva-themes/working-with-alpinejs/alpine-v2-and-v3-compatible-code.html" target="_blank" rel="noopener">Writing Alpine v2 and v3 compatible code</a> (Hyvä docs — fetchView / getTemplateFile pattern)</li>
<li><a href="https://docs.hyva.io/hyva-themes/writing-code/working-with-view-models/index.html" target="_blank" rel="noopener">Working with View Models</a> (Hyvä docs — templates, $block, $viewModels)</li>
</ul></div>`
        }
    ]
};
