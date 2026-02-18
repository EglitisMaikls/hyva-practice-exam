/**
 * Study content - Topic 8: Hyvä Features
 */
window.STUDY_CONTENT = window.STUDY_CONTENT || {};
window.STUDY_CONTENT[8] = {
    name: "Hyvä Features",
    subsections: [
        {
            title: "Demonstrate ability to use the Hyvä modal library to create custom dialogs",
            bullets: [
                "Using multiple modals on the same page, avoiding naming conflicts",
                "Using the return value of the show promise",
                "Updating modal contents depending on outside values when it is opened"
            ],
            content: `<h3 class="study-content-heading">Including the modal library</h3>
<p>Ensure the layout handle <code>hyva_modal</code> is applied so the modal JavaScript is loaded. Use the PHP view model <code>Hyva\\Theme\\ViewModel\\Modal</code> via <code>$viewModels->require(\\Hyva\\Theme\\ViewModel\\Modal::class)</code>, then <code>createModal()</code> to configure and render dialogs. Merge with Alpine using <code>x-data="hyva.modal()"</code> or <code>x-data="Object.assign({}, hyva.modal(), myViewModel())"</code> when you need custom state.</p>

<h3 class="study-content-heading">Multiple modals and naming</h3>
<p>Each dialog needs a <strong>unique Alpine.js x-ref name</strong>. With the PHP view model, the ref name is set automatically per modal instance. When calling <code>show()</code> from JavaScript, pass the dialog name as the first argument: <code>show('my-modal', $event)</code>. Use <code>$modal->getShowJs()</code> in PHP so the correct name and <code>$event</code> are emitted (e.g. <code>show('dialog-ref-name', $event)</code>). For extensions or pages with more than one modal, always pass the dialog name or use <code>getShowJs()</code>. Without the PHP view model, set <code>x-ref</code> and pass the same name to <code>show('outer', $event)</code> and <code>overlay('outer')</code> for each dialog to avoid conflicts.</p>

<h3 class="study-content-heading">Return value of show() (promise)</h3>
<p><code>show()</code> returns a <strong>Promise</strong> that resolves when the modal is closed. The resolved value is the argument passed to <code>hide()</code>. Use this for confirmation dialogs or post-close actions:</p>
<pre><code>@click="<?= $confirmation->getShowJs() ?>.then(result => result && doConfirm() || doCancel())"</code></pre>
<p>If the user confirms, pass a value from the OK button (e.g. <code>hide('ok')</code>); on Cancel, <code>hide()</code> with no argument yields a falsy result. Chain <code>.then(result => ...)</code> to run logic after the modal closes.</p>

<h3 class="study-content-heading">Updating modal content when opened</h3>
<p>To show content that depends on outside values when the modal opens:</p>
<ul>
    <li><strong>Template with data:</strong> Use <code>withTemplate('My_Module::dialog.phtml')</code> and pass data via <code>getContentRenderer()->assign('key', $value)</code> or <code>setData('key', $value)</code> before rendering <code>$modal</code>. The template is rendered when the page loads, so for dynamic values you need one of the approaches below.</li>
    <li><strong>AJAX-loaded content:</strong> Use a placeholder in <code>withContent()</code> (e.g. a div with <code>id="dom-element-id"</code>). In the button handler call <code>show('the-modal', $event)</code> and a method that fetches content and replaces the placeholder with <code>hyva.replaceDomElement('#dom-element-id', content)</code>. Ensure the same ID appears in the initial modal markup, in the fetched response wrapper, and in <code>replaceDomElement</code>.</li>
    <li><strong>Custom event from outside:</strong> Dispatch <code>hyva-modal-show</code> with <code>{dialog: 'my-modal', focusAfterHide: '#selector'}</code>, or use a custom event and <code>@open-my-dialog.window="<?= $modal->getShowJs() ?>"</code>. The modal content can be set via template/block and updated server-side on next load, or combined with the AJAX pattern above.</li>
</ul>
<p>Sources: <a href="https://docs.hyva.io/hyva-themes/view-utilities/modal-dialogs/index.html" target="_blank" rel="noopener">Modal dialogs</a>; <a href="https://docs.hyva.io/hyva-themes/view-utilities/modal-dialogs/opening-a-modal-from-anywhere.html" target="_blank" rel="noopener">Opening from anywhere</a>; <a href="https://docs.hyva.io/hyva-themes/view-utilities/modal-dialogs/loading-modal-contents-with-ajax.html" target="_blank" rel="noopener">Loading modal contents with AJAX</a>; <a href="https://docs.hyva.io/hyva-themes/view-utilities/modal-dialogs/confirmation-dialogs.html" target="_blank" rel="noopener">Confirmation dialogs</a>.</p>`
        },
        {
            title: "Demonstrate ability to use and customize the Hyvä product sliders and demonstrate the ability to compare slider implementations",
            bullets: [
                "Changing the item template for a specific product slider",
                "Keeping the regular item template for product listings and other product sliders"
            ],
            content: `<h3 class="study-content-heading">Product sliders (SSR)</h3>
<p>Product sliders use the layout handle <code>hyva_product_slider</code> and the template <code>Magento_Catalog::product/slider/product-slider.phtml</code>. As of Hyvä 1.4.0, product item rendering is <strong>consistent</strong>: all product sliders and the product listing use <code>Magento_Catalog/templates/product/list/item.phtml</code>. The deprecated <code>item_template</code> argument has been removed.</p>

<h3 class="study-content-heading">Changing the item template for a specific product slider</h3>
<p>To use a different item template for one product slider only, use <strong>layout XML</strong>: reference that slider block and add or replace the child block with alias <code>slider.item.template</code> (or the alias used by the product slider implementation), setting your custom template on it. That way only that slider uses the custom item template; the default theme and other sliders keep using <code>product/list/item.phtml</code>. Alternatively, override the product slider block’s template in your theme and pass a different item template via the block’s arguments if the block supports it in your Hyvä version.</p>

<h3 class="study-content-heading">Keeping the regular item template elsewhere</h3>
<p>Do not override <code>Magento_Catalog/templates/product/list/item.phtml</code> globally just to change one slider; that would affect the main product listing and every other product slider. Keep the default item template for catalog list and for sliders that should look like the listing. Limit custom item templates to specific slider blocks via layout or block-level template configuration.</p>

<h3 class="study-content-heading">Custom sliders (non-product) and slider implementations</h3>
<p><strong>Generic/custom sliders</strong> (e.g. <code>Hyva_Theme::elements/slider.phtml</code> or the Slider view model) are separate from product sliders. Use <code>Slider</code> view model: <code>getSliderForItems($itemsTemplate, $items)</code> or <code>getSliderForItems($itemsTemplate, $items, $sliderWrapperTemplate)</code>. The first argument is the <strong>item template</strong> (e.g. <code>My_Module::slider-item.phtml</code>); the third is the optional wrapper template (default <code>Magento_Theme/templates/elements/slider-php.phtml</code>). The block expects a child with alias <code>slider.item.template</code> for items. Product sliders are SSR and use Magento_Catalog product slider template and list item; custom sliders use the Snap Slider (Alpine) and your own item template. Compare by: product slider = layout + product-slider.phtml + list/item.phtml; custom = Slider view model or layout block with slider.phtml + your item template.</p>
<p>Sources: <a href="https://docs.hyva.io/hyva-themes/view-utilities/product-sliders.html" target="_blank" rel="noopener">Product sliders</a>; <a href="https://docs.hyva.io/hyva-themes/view-utilities/custom-sliders.html" target="_blank" rel="noopener">Custom sliders</a>.</p>`
        },
        {
            title: "Demonstrate how to use a custom Tailwind configuration for the CMS Tailwind JIT compiler",
            bullets: [
                "Apply customizations to both the theme and the CMS compiler configuration",
                "Debug why classes are not compiled"
            ],
            content: `<h3 class="study-content-heading">CMS Tailwind JIT overview</h3>
<p>The <code>hyva-themes/magento2-cms-tailwind-jit</code> module compiles Tailwind for CMS content (blocks, pages, category/product descriptions) when content is saved in the admin. Classes used only in the database are not in the theme’s compiled <code>styles.css</code>; the CMS JIT compiler runs in the browser and stores the generated CSS in the database, then it is injected inline when rendering that content.</p>

<h3 class="study-content-heading">Custom config for theme and CMS compiler</h3>
<p><strong>Theme (Node):</strong> Customize <code>tailwind.config.js</code> and/or <code>tailwind-source.css</code> in your theme as usual. This drives the main storefront stylesheet.</p>
<p><strong>CMS JIT (browser):</strong> Add <code>web/tailwind/tailwind.browser-jit-config.js</code> in your theme. Only a <strong>subset</strong> of Tailwind config is supported (no <code>require()</code> for arbitrary files, no plugins except what the browser build provides). Typically only <code>module.exports.theme</code> with <code>extend</code> is used; you can use <code>require('tailwindcss/defaultTheme')</code> and <code>require('tailwindcss/colors')</code> as documented. To keep theme and CMS in sync, <strong>merge the browser config into the main config</strong>: at the end of <code>tailwind.config.js</code>, if <code>tailwind.browser-jit-config.js</code> exists, <code>mergeDeep(module.exports, require('./tailwind.browser-jit-config.js'))</code>. The browser JIT config must be required from the main config, not the other way around. For custom CSS that applies only to CMS-compiled content, add <code>web/tailwind/tailwind.browser-jit.css</code> in the theme (the main <code>tailwind-source.css</code> is not used by the CMS JIT).</p>
<p>Theme-specific paths can be set in <code>etc/cms-tailwind-jit-theme-config.json</code> in the theme: <code>tailwindBrowserJitConfigPath</code> and <code>tailwindBrowserJitCssPath</code> (relative or absolute).</p>

<h3 class="study-content-heading">Why classes are not compiled (debugging)</h3>
<ul>
    <li><strong>Theme styles.css:</strong> Classes are purged if they never appear in files scanned by Tailwind (content paths in theme config). CMS-only classes will not be in <code>styles.css</code>; that’s expected—use the CMS Tailwind JIT module so they are compiled on save.</li>
    <li><strong>CMS JIT:</strong> (1) No custom config or wrong path — ensure <code>tailwind.browser-jit-config.js</code> exists in the theme and path in <code>cms-tailwind-jit-theme-config.json</code> is correct. (2) Browser config uses unsupported features (e.g. Node-only <code>require</code>, plugins) — stick to the documented subset. (3) Content not re-saved after adding classes — compilation runs on save; save the CMS block/page/description again. (4) Wrong store/theme — compilation is per store view with a Hyvä theme; ensure the entity is assigned to that store. (5) Quote-escaping in dynamic class bindings — Tailwind JIT can miscompile escaped quotes; use the HTML comment workaround (unquoted class in a comment before the element) as in the docs.</li>
</ul>
<p>Sources: <a href="https://docs.hyva.io/hyva-themes/cms/using-tailwind-classes-in-cms-content.html" target="_blank" rel="noopener">Using Tailwind classes in CMS content</a>; <a href="https://docs.hyva.io/hyva-themes/cms/cms-tailwind-jit-module.html" target="_blank" rel="noopener">CMS Tailwind JIT module</a>.</p>`
        },
        {
            title: "Demonstrate ability to use the Hyvä JavaScript form validation library in custom forms",
            bullets: [
                "Making the form validation library available on the page",
                "Benefits and downsides of browser native HTML5 validation compared to JS validation",
                "Writing custom validation rules"
            ],
            content: `<h3 class="study-content-heading">Making the form validation library available</h3>
<p>Apply the layout handle <code>hyva_form_validation</code> so the validation script is loaded:</p>
<pre><code>&lt;page&gt;
  &lt;update handle="hyva_form_validation"/&gt;
&lt;/page&gt;</code></pre>
<p>Initialize the Alpine component on the form: <code>x-data="hyva.formValidation($el)"</code>. For custom logic, merge with your view model: <code>x-data="{...initMyForm(), ...hyva.formValidation($el)}"</code>. Use <code>@submit="onSubmit"</code> to validate on submit (submit is prevented until valid). Wrap inputs in a container with classes <code>field field-reserved</code> to reserve space for error messages and avoid layout shift. Use <code>data-validate='{"required": true}'</code> (JSON) or HTML5 attributes like <code>required</code>, <code>min</code>, <code>max</code>, <code>pattern</code>. For CSP, pass the form element: <code>hyva.formValidation(this.$el)</code> or <code>hyva.formValidation($el)</code> on the root.</p>

<h3 class="study-content-heading">Browser native HTML5 vs JS validation</h3>
<p><strong>Native (HTML5 / constraint API):</strong> No extra JS, good accessibility (screen readers, keyboard), mobile-friendly input types (e.g. email keyboard). Limited to built-in rules and browser message styling/location. Hyvä’s library uses the constraint API where possible (required, min, max, pattern, etc.) so many rules are still native under the hood.</p>
<p><strong>JS validation (Hyvä library):</strong> Custom messages in a fixed place, custom and async rules (e.g. API checks), consistent UX across browsers, and accessibility handled by the library. Downsides: more script, need to keep rules in sync (data-validate / HTML attributes). Use native when it’s enough; add the JS library when you need custom messages, custom rules, or async validation.</p>

<h3 class="study-content-heading">Writing custom validation rules</h3>
<p>Register a rule with <code>hyva.formValidation.addRule(name, callback)</code>. The callback receives <code>(value, options, field, context)</code> and returns <code>true</code> if valid, or a string message (or <code>{type: 'html', content: '...'}</code>) if invalid. Return a Promise for async validation (e.g. username uniqueness). Example:</p>
<pre><code>hyva.formValidation.addRule('phone', function(value, options, field, context) {
  const digits = value.trim().replace(/\\s/g, '');
  if (digits.length !== 9) return 'Enter correct phone number.';
  return true;
});</code></pre>
<p>Use in markup: <code>data-validate='{"phone": true}'</code>. Override message with <code>data-msg-phone="Custom message"</code>. Map rules to input types or attributes: <code>hyva.formValidation.setInputTypeRuleName('url')</code>, <code>hyva.formValidation.setInputAttributeRuleName('accept', 'validate-file-types')</code>. Custom submit: call <code>this.validate().then(() => event.target.submit()).catch(invalid => { invalid[0].focus(); })</code> in your submit handler.</p>
<p>Sources: <a href="https://docs.hyva.io/hyva-themes/writing-code/form-validation/javascript-form-validation.html" target="_blank" rel="noopener">JavaScript form validation</a>; <a href="https://docs.hyva.io/hyva-themes/writing-code/form-validation/index.html" target="_blank" rel="noopener">Form validation overview</a>.</p>`
        }
    ]
};
