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
            content: `<h3 class="study-content-heading">1. JSON in Data Attributes</h3>
<p>When passing data to Alpine.js via attributes (like <code>x-data</code> or <code>data-config</code>), you must prevent quotes in the JSON from breaking the HTML attribute syntax.</p>
<p><strong>The Rule:</strong> Wrap <code>json_encode</code> with <code>escapeHtmlAttr</code>.</p>
<pre><code class="language-php">&lt;!-- Correct usage for attributes --&gt;
&lt;div x-data="&lt;?= $escaper-&gt;escapeHtmlAttr(json_encode($data)) ?&gt;"&gt;
...
&lt;/div&gt;</code></pre>

<h3 class="study-content-heading">2. JSON in JavaScript Strings</h3>
<p>If you are injecting JSON into a script tag or a JS string literal (e.g., inside <code>JSON.parse('...')</code>), you need to escape characters that would break the JS string.</p>
<p><strong>The Rule:</strong> Wrap <code>json_encode</code> with <code>escapeJs</code>.</p>
<pre><code class="language-php">&lt;script&gt;
// Common pattern for passing complex data to JS
const config = JSON.parse('&lt;?= $escaper-&gt;escapeJs(json_encode($config)) ?&gt;');
&lt;/script&gt;</code></pre>

<h3 class="study-content-heading">3. Textarea and General HTML</h3>
<p><strong>Textareas:</strong> The content inside a <code>&lt;textarea&gt;</code> tag is treated as text, not a value attribute. It is vulnerable to XSS if a user inputs closing tags.</p>
<p><strong>Product Names:</strong> Displayed text often contains special chars. Prevent them from being interpreted as HTML.</p>
<p><strong>The Rule:</strong> Use <code>escapeHtml</code>.</p>
<pre><code class="language-php">&lt;!-- Textarea Content --&gt;
&lt;textarea name="comment"&gt;&lt;?= $escaper-&gt;escapeHtml($userInput) ?&gt;&lt;/textarea&gt;

&lt;!-- General Output --&gt;
&lt;h1&gt;&lt;?= $escaper-&gt;escapeHtml($product-&gt;getName()) ?&gt;&lt;/h1&gt;</code></pre>

<h3 class="study-content-heading">Summary Table: Choosing the Right Method</h3>
<table class="study-table">
<thead>
<tr><th>Context</th><th>Escaper Method</th><th>Why?</th></tr>
</thead>
<tbody>
<tr><td>Inside Tags (<code>&lt;span&gt;...&lt;/span&gt;</code>)</td><td><code>escapeHtml()</code></td><td>Prevents <code>&lt;script&gt;</code> or <code>&lt;div&gt;</code> tags from rendering.</td></tr>
<tr><td>Inside Attributes (<code>title="..."</code>)</td><td><code>escapeHtmlAttr()</code></td><td>Prevents quotes from closing the attribute early.</td></tr>
<tr><td>Inside JS (<code>&lt;script&gt;var x=...&lt;/script&gt;</code>)</td><td><code>escapeJs()</code></td><td>Prevents breaking out of a string literal.</td></tr>
<tr><td>Inside URL Params (<code>?name=...</code>)</td><td><code>escapeUrl()</code></td><td>Percent-encodes characters for URI compliance.</td></tr>
</tbody>
</table>`
        },
        {
            title: "Determine how to render a child template with the current block instance",
            bullets: [
                "Rendering a template programmatically from a template without using a child block"
            ],
            content: "<h3 class=\"study-content-heading\">Direct Template Rendering</h3>\n" +
                "<p>Sometimes you need to include a specific template file (<code>.phtml</code>) to split up large files or reuse a snippet, but you do not want the overhead of declaring a new block in Layout XML.</p>\n" +
                "\n" +
                "<h3 class=\"study-content-heading\">The Method: fetchView</h3>\n" +
                "<p>To render a template file using the <strong>current block instance</strong>, you use <code>fetchView</code>. This ensures that <code>$block</code> inside the child template refers to the exact same object as the parent template.</p>\n" +
                "\n" +
                "<pre><code class=\"language-php\">&lt;?php\n" +
                "// 1. Resolve the absolute path to the template using the Module::file syntax\n" +
                "$templatePath = $block->getTemplateFile('Vendor_Module::directory/filename.phtml');\n" +
                "\n" +
                "// 2. Render it using the current block context\n" +
                "echo $block->fetchView($templatePath);\n" +
                "?&gt;</code></pre>\n" +
                "\n" +
                "<h3 class=\"study-content-heading\">Why use this over createBlock?</h3>\n" +
                "<p>You might see developers creating a new block instance inline:</p>\n" +
                "<pre><code class=\"language-php\">&lt;!-- Heavier approach --&gt;\n" +
                "&lt;?= $this->getLayout()\n" +
                "->createBlock(\\Magento\\Framework\\View\\Element\\Template::class)\n" +
                "->setTemplate('Vendor_Module::file.phtml')\n" +
                "->toHtml(); ?&gt;</code></pre>\n" +
                "<p>Using <code>fetchView</code> is preferred when you want to share the context because:</p>\n" +
                "<ul>\n" +
                "<li>It is more performant (no new Object instantiation).</li>\n" +
                "<li>It shares the <strong>ViewModel</strong> and data of the parent block automatically.</li>\n" +
                "</ul>\n" +
                "\n" +
                "<div class=\"study-note\"><strong>Note:</strong> Since <code>fetchView</code> shares the block instance, <code>$block->getData()</code> in the child template will return the same data as the parent.</div>"
        }
    ]
};
