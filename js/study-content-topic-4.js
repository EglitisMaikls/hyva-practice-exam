/**
 * Study content - Topic 4: Compatibility Modules
 */
window.STUDY_CONTENT = window.STUDY_CONTENT || {};
window.STUDY_CONTENT[4] = {
    name: "Compatibility Modules",
    subsections: [
        {
            title: "4.1 Override a template provided by a compatibility module in a theme",
            bullets: [
                "Choosing the correct module folder name for template overrides",
                "Original module vs compatibility module"
            ],
            content: `<h3 class="study-content-heading">1. The Golden Rule of Overrides</h3>
<p>When you want to customize a template that is already being provided by a Compatibility Module (e.g., <code>Hyva_SmileElasticsuite</code>), you must place your override in the folder of the <strong>Original Module</strong>, not the Compatibility Module.</p>

<div class="study-note study-note-important"><strong>Rule:</strong> Always use the namespace of the module that <em>owns the block</em> class.</div>

<p><strong>Example Scenario:</strong></p>
<ul>
    <li><strong>Original Module:</strong> <code>Smile_ElasticsuiteCatalog</code></li>
    <li><strong>Compat Module:</strong> <code>Hyva_SmileElasticsuite</code> (provides <code>attributes.phtml</code>)</li>
    <li><strong>Your Goal:</strong> Change <code>attributes.phtml</code> in your theme.</li>
</ul>

<p><strong>Correct Path:</strong><br>
<code>app/design/frontend/Vendor/Theme/Smile_ElasticsuiteCatalog/templates/attributes.phtml</code></p>

<p><strong>Incorrect Path:</strong><br>
<code>app/design/frontend/Vendor/Theme/Hyva_SmileElasticsuite/templates/attributes.phtml</code></p>

<p><strong>Why?</strong> The compatibility module typically uses Layout XML to set the template of an existing block. The block itself still belongs to the original module (<code>Smile_ElasticsuiteCatalog</code>), so Magento's theme fallback system looks there.</p>
References: <ul><li>Hyvä Themes – Compatibility Modules: Technical Deep-Dive (Automatic Template Overrides, Overriding a Compatibility Template in a Theme, DI Configuration for Fallback): <a href=\\"https://docs.hyva.io/hyva-themes/compatibility-modules/technical-deep-dive.html\\" target=\\"_blank\\" rel=\\"noopener\\">docs.hyva.io/hyva-themes/compatibility-modules/technical-deep-dive.html</a></li></ul>`
        },
        {
            title: "4.2 Demonstrate understanding of common steps to replace Luma JS with Alpine/vanilla JS",
            bullets: [
                "Replacing x-magento-init with inline JS",
                "Refactoring jQuery to vanilla JS",
                "Refactoring KO to Alpine components"
            ],
            content: `<h3 class="study-content-heading">1. Replacing x-magento-init</h3>
<p>Luma uses <code>x-magento-init</code> scripts to initialize widgets with JSON configuration. In Hyvä, we pass this configuration directly to Alpine.js components or vanilla JS functions.</p>

<p><strong>Luma Approach:</strong></p>
<pre><code class="language-html">&lt;script type="text/x-magento-init"&gt;
{
    "#element": { "Magento_Ui/js/modal": { "title": "Hello" } }
}
&lt;/script&gt;</code></pre>

<p><strong>Hyvä Approach:</strong></p>
<pre><code class="language-html">&lt;div x-data="initModal(&lt;?= $escaper-&gt;escapeHtmlAttr(json_encode($config)) ?&gt;)"&gt;
    ...
&lt;/div&gt;</code></pre>

<h3 class="study-content-heading">2. Refactoring jQuery to Vanilla JS</h3>
<p>Hyvä does not load jQuery. You must use native DOM APIs.</p>
<table class="study-table">
    <thead><tr><th>jQuery</th><th>Vanilla JS</th></tr></thead>
    <tbody>
        <tr><td><code>$('.class')</code></td><td><code>document.querySelectorAll('.class')</code></td></tr>
        <tr><td><code>$('#id')</code></td><td><code>document.getElementById('id')</code></td></tr>
        <tr><td><code>$(el).on('click', fn)</code></td><td><code>el.addEventListener('click', fn)</code></td></tr>
        <tr><td><code>$.ajax(...)</code></td><td><code>fetch(...)</code></td></tr>
        <tr><td><code>$(document).ready(fn)</code></td><td>Place script at bottom or use <code>'DOMContentLoaded'</code></td></tr>
    </tbody>
</table>

<h3 class="study-content-heading">3. Refactoring Knockout (KO) to Alpine</h3>
<p>Both libraries uses a declarative binding syntax, making translation straightforward.</p>
<ul>
    <li><strong>Observables:</strong> KO's <code>ko.observable('foo')</code> becomes a property in Alpine's <code>x-data="{ value: 'foo' }"</code>.</li>
    <li><strong>Text Binding:</strong> <code>data-bind="text: label"</code> becomes <code>x-text="label"</code>.</li>
    <li><strong>Visibility:</strong> <code>data-bind="visible: isOpen"</code> becomes <code>x-show="isOpen"</code>.</li>
    <li><strong>Loops:</strong> <code>data-bind="foreach: items"</code> becomes <code>x-for="item in items"</code>.</li>
</ul>`
        },
        {
            title: "4.3 Creating Compatibility Modules",
            bullets: [
                "Registering a module with the compatibility module registry",
                "Understanding hyva-themes.json"
            ],
            content: `<h3 class="study-content-heading">1. Registering with the Compatibility Module Registry</h3>
<p>The compatibility module skeleton relies on <code>hyva-themes/magento2-compat-module-fallback</code>. To register your module, you must add it to the <code>CompatModuleRegistry</code> via <code>di.xml</code>.</p>

<p><strong>File:</strong> <code>etc/frontend/di.xml</code></p>
<pre><code class="language-xml">&lt;type name="Hyva\CompatModuleFallback\Model\CompatModuleRegistry"&gt;
    &lt;arguments&gt;
        &lt;argument name="compatModules" xsi:type="array"&gt;
            &lt;item name="unique_id" xsi:type="array"&gt;
                &lt;item name="original_module" xsi:type="string"&gt;Original_Module&lt;/item&gt;
                &lt;item name="compat_module" xsi:type="string"&gt;Hyva_OriginalModule&lt;/item&gt;
            &lt;/item&gt;
        &lt;/argument&gt;
    &lt;/arguments&gt;
&lt;/type&gt;</code></pre>

<p><strong>The Effects of Registration:</strong></p>
<ul>
    <li><strong>Template Injection:</strong> The module's <code>view/frontend/templates</code> directory is automatically injected into the design fallback for the original module.</li>
    <li><strong>Tailwind Inclusion:</strong> The module is automatically added to the Tailwind compilation process (no manual JSON config needed).</li>
</ul>
<div class="study-note study-note-important"><strong>Rule:</strong> The automatic override does not work for price renderer templates. These must be overridden using layout XML.</div>


<h3 class="study-content-heading">2. Understanding hyva-themes.json</h3>
<p><code>app/etc/hyva-themes.json</code> is a <strong>generated file</strong> used by build tools (like <code>npx hyva-sources</code>) to determine which modules to scan for CSS classes.</p>

<p><strong>How it is populated:</strong></p>
<ul>
    <li><strong>Automatically:</strong> Modules registered in <code>CompatModuleRegistry</code> (as shown above) are added automatically.</li>
    <li><strong>Manually:</strong> Custom modules not using the registry must observe the <code>hyva_config_generate_before</code> event and append their path to <code>$config['extensions']</code>.</li>
</ul>

<p><strong>Generation:</strong></p>
<p>The file is regenerated when running:</p>
<pre><code class="language-bash">bin/magento hyva:config:generate</code></pre>

<h3 class="study-content-heading">3. Excluding Modules from Tailwind</h3>
<p>If you need to prevent a registered compatibility module from adding its styles (e.g., to troubleshoot style conflicts), you can exclude it via <code>di.xml</code>.</p>
<pre><code class="language-xml">&lt;type name="Hyva\CompatModuleFallback\Observer\HyvaThemeHyvaConfigGenerateBefore"&gt;
    &lt;arguments&gt;
        &lt;argument name="exclusions" xsi:type="array"&gt;
            &lt;item name="Hyva_SomeModule" xsi:type="string"&gt;Hyva_SomeModule&lt;/item&gt;
        &lt;/argument&gt;
    &lt;/arguments&gt;
&lt;/type&gt;</code></pre>`
        }
    ]
};
