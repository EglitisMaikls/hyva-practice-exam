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
            content: `<h3 class="study-content-heading">1. Overriding global JS functions using Proxy or wrapper</h3>
<p>Avoid copying the entire .phtml template into your theme: that masks upstream changes and makes upgrades costly. Instead, customize only the functions or properties that need to change.</p>

<p><strong>Recipe:</strong></p>
<ol>
    <li>Find the template and layout XML block that render the original JS.</li>
    <li>Declare a new block in your theme that renders <em>after</em> the original (e.g. <code>after="head.hyva-scripts"</code> or <code>after="options_configurable_js"</code>).</li>
    <li>In the new template, keep a reference to the original function, then redeclare it (or wrap it with a Proxy).</li>
</ol>

<p><strong>Wrapper approach</strong> — store original, redeclare with <code>function</code> so <code>arguments</code> is available:</p>
<pre><code class="language-javascript">(() => {
const origFormatPrice = hyva.formatPrice;
hyva.formatPrice = function (value, showSign, options = {}) {
  if (value > 0) return origFormatPrice.apply(this, arguments);
  return 'FREE!';
};
})();</code></pre>

<p><strong>Proxy approach</strong> — intercept calls without redeclaring; handler uses <code>apply(target, thisArg, argArray)</code>:</p>
<pre><code class="language-javascript">hyva.formatPrice = new Proxy(hyva.formatPrice, {
  apply(target, thisArg, argArray) {
    const value = argArray[0];
    if (value > 0) return target.apply(thisArg, argArray);
    return 'FREE!';
  }
});</code></pre>

<p>For Alpine component constructors (e.g. <code>initConfigurableOptions</code>), override the constructor, call the original, then mutate the returned instance (e.g. wrap <code>instance.init</code>) before returning it. Multiple modules can customize the same function by each calling the previous reference.</p>

<h3 class="study-content-heading">2. Calling the original function maintaining the correct object context</h3>
<p>When delegating to the original, pass the correct <code>this</code> so the original runs in the right context.</p>

<ul>
    <li><strong>Simple global function:</strong> use <code>origFn.apply(this, arguments)</code> so the original sees the same <code>this</code> and all arguments (including any added in future releases).</li>
    <li><strong>Alpine component method (e.g. <code>init</code>):</strong> call the original with the <em>component instance</em> as context: <code>origInit.apply(instance, arguments)</code>. If you use a Proxy on the method, the handler receives <code>thisArg</code> as the instance when the method is called.</li>
</ul>

<pre><code class="language-javascript">const instance = origInitConfigurableOptions.apply(this, arguments);
const origInit = instance.init;
instance.init = function () {
  origInit.apply(instance, arguments);  // correct context
  // your custom logic
};
return instance;</code></pre>

<h3 class="study-content-heading">3. Using global functions instead of inline functions with Alpine.data()</h3>
<p>In Alpine CSP, <code>x-data</code> cannot evaluate inline expressions. The value must refer to a function <strong>registered with <code>Alpine.data()</code></strong>. Hyvä uses <strong>named functions in global scope</strong> so they can be proxied or wrapped (as in Overriding JavaScript).</p>

<p><strong>Pattern:</strong></p>
<ol>
    <li>Declare a named constructor function in global scope (e.g. <code>function initMyComponent() { return { ... }; }</code>).</li>
    <li>Register it in an <code>alpine:init</code> listener so <code>Alpine.data</code> is available: <code>Alpine.data('initMyComponent', initMyComponent)</code>.</li>
    <li>In the template use <code>x-data="initMyComponent"</code> (no parentheses).</li>
</ol>

<pre><code class="language-javascript">function initMyComponent() {
  return { open: false };
}
window.addEventListener('alpine:init', () => Alpine.data('initMyComponent', initMyComponent), { once: true });</code></pre>

<p>When composing with other helpers (e.g. <code>hyva.modal</code>, <code>hyva.formValidation</code>), preserve Alpine object context by calling them with <code>.call(this)</code> or <code>.apply(this, ...)</code> inside the constructor (e.g. <code>hyva.modal.call(this)</code>).</p>

<p>References: <a href="https://docs.hyva.io/hyva-themes/writing-code/patterns/overriding-js.html" target="_blank" rel="noopener">Overriding JavaScript</a>; <a href="https://docs.hyva.io/hyva-themes/writing-code/csp/alpine-csp-constructor-functions.html" target="_blank" rel="noopener">Alpine CSP constructor functions</a>; <a href="https://docs.hyva.io/hyva-themes/writing-code/csp/alpine-csp.html" target="_blank" rel="noopener">Alpine.js CSP</a>.</p>`
        },
        {
            title: "Design JavaScript components to be reused on different pages or multiple times on a single page",
            bullets: [
                "Avoid rendering script instance specific values in the JS by using data attributes instead"
            ],
            content: `<h3 class="study-content-heading">Reusable Alpine components</h3>
<p>Alpine init functions return a <strong>per-instance</strong> object — the same function can power multiple components on one page or across pages. Keep components reusable by never baking instance-specific server values into the script itself.</p>

<div class="study-note study-note-important">
<p><strong>Avoid unique function names or inline values per instance</strong> (e.g. <code>initComponent_&lt;?= $product->getId() ?&gt;</code>). Every variation duplicates JS in the DOM, inflates page size, and adds CSP hashes (risking "Header too large" errors).</p>
</div>

<h3 class="study-content-heading">Pass instance data via data attributes or init arguments</h3>
<p>Define the function <strong>once</strong>; supply per-instance data from PHP through the template:</p>

<p><strong>1. Data attributes</strong> — PHP stays on the element, read in JS via <code>this.$el.dataset</code>:</p>
<pre><code class="language-html">&lt;div x-data="myFunction"
  data-product-id="&lt;?= $escaper->escapeHtmlAttr($block->getProductId()) ?&gt;"
  data-config="&lt;?= $escaper->escapeHtmlAttr($block->getJsonConfig()) ?&gt;"&gt;&lt;/div&gt;</code></pre>
<pre><code class="language-javascript">function myFunction() {
  return {
    id: parseInt(this.$el.dataset.productId, 10),
    config: JSON.parse(this.$el.dataset.config || '{}')
  };
}</code></pre>

<p><strong>2. Init arguments</strong> — pass config directly in <code>x-data</code>:</p>
<pre><code class="language-html">&lt;div x-data="initMyComponent({ productId: &lt;?= (int) $product->getId() ?&gt; })"&gt;...&lt;/div&gt;</code></pre>
<pre><code class="language-javascript">function initMyComponent(config) {
  return { productId: config.productId };
}</code></pre>

<p>When a block renders many times (e.g. product list), load the script <strong>once</strong> via <code>hyva_js_block_dependencies</code> / <code>PageJsDependencyRegistry</code> and use data attributes or init arguments for per-instance data.</p>

<p>References: <a href="https://docs.hyva.io/hyva-themes/writing-code/patterns/avoid-conflicting-state-between-alpine-components.html" target="_blank" rel="noopener">Avoid conflicting Alpine state</a> · <a href="https://docs.hyva.io/hyva-themes/writing-code/rendering-javascript-once.html" target="_blank" rel="noopener">Rendering JS once</a></p>`
        },
        {
            title: "Demonstrate how to load .js files without impacting performance metrics",
            bullets: [
                "Use init-external-scripts and facades"
            ],
            content: `<h3 class="study-content-heading">Why external JS hurts performance</h3>
<p>Loading external JavaScript in <code>&lt;head&gt;</code> blocks the main thread and rendering, which hurts Google ranking metrics (PageSpeed, LCP, INP). Defer loading until the script is actually needed—e.g. after user interaction or when content scrolls into view.</p>

<h3 class="study-content-heading">init-external-scripts</h3>
<p>The <strong>init-external-scripts</strong> event is a Hyvä event fired <strong>once</strong> when the user first interacts with the page (any of: <code>touchstart</code>, <code>mouseover</code>, <code>wheel</code>, <code>scroll</code>, <code>keydown</code>). Use it to load analytics, tag managers, tracking pixels, and similar scripts <em>after</em> that first interaction so they do not block initial paint or interactivity.</p>

<p><strong>Example:</strong></p>
<pre><code class="language-javascript">window.addEventListener('init-external-scripts', () => {
  // Load GTM, analytics, or any external script here
  const script = document.createElement('script');
  script.src = 'https://example.com/widget.js';
  script.async = true;
  document.head.appendChild(script);
}, { once: true, passive: true });</code></pre>

<p>Available in Hyvä 1.1.20 and 1.2.0+. On the order success page, the event is fired on page load so conversion tracking still runs. Avoid loading many libraries in a single handler—it can hurt the INP metric.</p>

<h3 class="study-content-heading">Facades</h3>
<p>When the external script <strong>creates or replaces UI</strong> (e.g. live chat button, video embed), loading it after interaction can cause <strong>content layout shift (CLS)</strong> because the real widget appears later and pushes content. Use a <strong>facade</strong>: a static HTML placeholder that reserves the same space and looks like the final widget. When the user interacts with the facade, load the script and let it replace or initialize the real content.</p>

<p><strong>Typical use:</strong> Live chat widgets, search providers, video embeds (YouTube, Vimeo).</p>

<p><strong>Example (live chat facade):</strong></p>
<pre><code class="language-html">&lt;button data-role="init-live-chat"
  class="btn btn-primary"&gt;
  Click to chat!
&lt;/button&gt;</code></pre>
<pre><code class="language-javascript">document.querySelector('[data-role="init-live-chat"]')
  .addEventListener('click', () => {
    // Load live chat script, then e.g. trigger real button click
  }, { once: true });</code></pre>

<p>The facade’s class, ID, or <code>data-*</code> attributes should match what the provider’s script expects so it can replace the placeholder when initialized. Style the facade to avoid layout shift.</p>

<p>Load scripts programmatically (e.g. <code>document.createElement('script')</code>, set <code>src</code>, <code>appendChild</code>) instead of putting blocking <code>&lt;script src="..."&gt;</code> in <code>&lt;head&gt;</code>. For Magento URLs in templates, escape with <code>$escaper->escapeUrl()</code> or <code>$escaper->escapeJs()</code> as appropriate.</p>

<p>Reference: <a href="https://docs.hyva.io/hyva-themes/writing-code/patterns/loading-external-javascript.html" target="_blank" rel="noopener">Loading External JavaScript</a>.</p>`
        },
        {
            title: "Design decoupled components without nesting",
            bullets: [
                "Using events to trigger updates between related components instead of relying on nesting Alpine components",
                "Moving related components into different parts of a page"
            ],
            content: `<h3 class="study-content-heading">1. Using events to trigger updates between related components</h3>
<p>In Hyvä, <strong>events</strong> are how decoupled components on a page communicate state changes. The event/subscriber pattern keeps components extensible and independent: they do not need to be nested or share a parent scope.</p>

<p><strong>Dispatch from one component:</strong> use <code>$dispatch('event-name', payload)</code> to send a custom event. The payload is available as <code>event.detail</code> to listeners.</p>

<pre><code class="language-html">&lt;button @click="$dispatch('name-changed', { name: 'John Doe' })"&gt;John Doe&lt;/button&gt;</code></pre>

<p><strong>Listen in another component:</strong> use <code>@event-name.window="handleEvent(event)"</code> so the listener runs in the component’s context. The handler is a method on the component (CSP-friendly); it reads <code>event.detail</code> to update local state.</p>

<pre><code class="language-javascript">function initReceiver() {
  return {
    name: "unknown",
    handleNameChange(event) {
      this.name = event.detail.name;
    }
  };
}</code></pre>

<pre><code class="language-html">&lt;div x-data="initReceiver" @name-changed.window="handleNameChange(event)"&gt;
  &lt;span x-text="name"&gt;&lt;/span&gt;
&lt;/div&gt;</code></pre>

<p>Events are <strong>native browser custom events</strong>, so you can also subscribe with <code>window.addEventListener('event-name', ...)</code> and trigger from the console for debugging, e.g. <code>window.dispatchEvent(new CustomEvent('name-changed', { detail: { name: 'Test' } }))</code>.</p>

<p>When a <strong>nested</strong> component needs to call a parent method, avoid relying on Alpine’s parent scope (especially in Alpine v2 where outer scope is not accessible). Use <code>$dispatch('action-name')</code> on the child and <code>@action-name="parentMethod()"</code> on the parent so the parent handles the action without tight coupling.</p>

<h3 class="study-content-heading">2. Moving related components into different parts of a page</h3>
<p>Because communication is event-based, components do not need to live next to each other in the DOM. You can place the mini-cart, messages bar, authentication slider, or PDP price-box in different layout blocks or templates; they still work as long as they listen for or dispatch the same events.</p>

<p><strong>Hyvä examples:</strong></p>
<ul>
    <li><code>toggle-cart</code> — any component can dispatch it to open the mini-cart; the cart drawer can live in the header or footer.</li>
    <li><code>clear-messages</code> — clears splash messages no matter where the message component is rendered.</li>
    <li><code>update-product-final-price</code> / <code>update-gallery</code> — product detail sections (price, gallery, options) can stay in different blocks and react to the same events.</li>
</ul>

<p>Dispatch global events with <code>window.dispatchEvent(new Event('toggle-cart'))</code> or <code>new CustomEvent('name', { detail: { ... } })</code> when payload is needed. Listen with <code>@event-name.window="methodName(event)"</code> on the target component so it updates from <code>event.detail</code>.</p>

<p>This decoupling makes layout and theme structure flexible: you can move or replace a single block (e.g. messages bar, cart drawer) without rewriting the components that trigger or react to it.</p>

<p>References: <a href="https://docs.hyva.io/hyva-themes/writing-code/patterns/communication-between-alpine-components.html" target="_blank" rel="noopener">Communication between Alpine components</a>; <a href="https://docs.hyva.io/hyva-themes/writing-code/hyva-javascript-events.html" target="_blank" rel="noopener">Hyvä JavaScript events</a>; <a href="https://docs.hyva.io/hyva-themes/writing-code/patterns/nested-components-with-alpine-js-v2.html" target="_blank" rel="noopener">Nested components with Alpine.js v2</a>.</p>`
        },
        {
            title: "Demonstrate ability to implement a frontend component without generating an excessive DOM size",
            bullets: [],
            content: `<h3 class="study-content-heading">1. Render JavaScript once instead of duplicating per item</h3>
<p>When HTML is rendered many times (e.g. product list items), inlining JS in the same template duplicates script in the page source and inflates DOM size. Split the JS into a separate block or template and render it <strong>once</strong> in the <code>before-body-end</code> container.</p>

<p><strong>Layout XML:</strong> declare dependencies with the block argument <code>hyva_js_block_dependencies</code> so the named JS block is rendered automatically when the block is rendered:</p>
<pre><code class="language-xml">&lt;block name="product_list_item" template="Magento_Catalog::product/list/item.phtml"&gt;
  &lt;arguments&gt;
    &lt;argument name="hyva_js_block_dependencies" xsi:type="array"&gt;
      &lt;item name="category.products.list.js.wishlist" xsi:type="boolean"&gt;true&lt;/item&gt;
    &lt;/argument&gt;
  &lt;/arguments&gt;
&lt;/block&gt;</code></pre>

<p><strong>From a template (PHP):</strong> use <code>BlockJsDependencies</code> (or <code>PageJsDependencyRegistry</code> in Hyvä 1.3.6+): <code>$pageJsRegistry->setBlockNameDependency($block, 'block.name')</code> or <code>setBlockTemplateDependency($block, 'Vendor_Module::path/to/js.phtml')</code>. Prefer Layout XML when the block or a parent uses <code>block_html</code> cache, since cached output may not re-run the template and thus not register the dependency.</p>

<p>Use a single Alpine init function for all instances and pass per-instance data via <strong>data attributes</strong> or <strong>init arguments</strong> (see subsection 6.2). Avoid unique function names per instance (e.g. <code>initComponent_&lt;?= $product->getId() ?&gt;</code>) — they duplicate JS and inflate DOM; use them only when strictly necessary.</p>

<h3 class="study-content-heading">2. Reduce DOM size with Alpine &lt;template x-if&gt;</h3>
<p>Google Lighthouse counts all nodes in the document. Content that is only hidden with CSS (e.g. <code>display: none</code>) still counts toward DOM size. Use Alpine’s <code>&lt;template x-if="condition"&gt;</code> so the inner HTML is <strong>not</strong> in the initial DOM; the browser does not parse the template as real nodes until Alpine injects the content when the condition is true.</p>

<pre><code class="language-html">&lt;div x-data="initComponent()" x-init="init()"&gt;
  &lt;template x-if="!isMobile"&gt;
    &lt;div&gt;This block is not in the DOM until x-if is true.&lt;/div&gt;
  &lt;/template&gt;
&lt;/div&gt;</code></pre>

<p>Combine with <code>window.matchMedia</code> in <code>init()</code> to show/hide by viewport without keeping hidden markup in the DOM. Caveat: content inside <code>x-if</code> is not in the initial document, so it can be hidden from crawlers; use with care for SEO-critical content.</p>

<p><strong>Alternative:</strong> Load below-the-fold content via AJAX when the user scrolls there. The document stays smaller and uses less bandwidth; same SEO consideration as with <code>x-if</code> for injected content.</p>

<h3 class="study-content-heading">3. Avoid per-instance script and unique component names</h3>
<p>Unique init function names per product or item (e.g. <code>initWishlist_123</code>) force the same script to be output many times in the HTML. Prefer one global init function and pass instance data via <code>data-*</code> attributes (read in JS with <code>this.$el.dataset</code>) or as arguments to the init function in <code>x-data</code>. That keeps a single script in the page and avoids inflating DOM and CSP hash lists.</p>

<p>References: <a href="https://docs.hyva.io/hyva-themes/writing-code/rendering-javascript-once.html" target="_blank" rel="noopener">Rendering JS once</a>; <a href="https://docs.hyva.io/hyva-themes/writing-code/patterns/avoid-conflicting-state-between-alpine-components.html" target="_blank" rel="noopener">Avoid conflicting Alpine state</a>; <a href="https://docs.hyva.io/hyva-themes/writing-code/patterns/running-js-only-on-mobile.html" target="_blank" rel="noopener">Running JS only on mobile</a>; <a href="https://docs.hyva.io/hyva-themes/faqs/performance-optimization.html" target="_blank" rel="noopener">Performance optimization (excessive DOM size)</a>.</p>`
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
            content: `<h3 class="study-content-heading">1. Avoiding scripts within Alpine templates</h3>
<p>Under strict CSP, HTML attributes cannot contain JavaScript <strong>expressions</strong> — the Alpine CSP build disallows <code>new Function()</code>-style evaluation (which would require <code>unsafe-eval</code>). In templates, use only <strong>property names</strong> or <strong>method names</strong>, not inline expressions.</p>

<p><strong>No inline expressions:</strong> negation, ternaries, and mutations must live in component methods.</p>
<ul>
    <li>❌ <code>x-show="!open"</code> → ✅ <code>x-show="isClosed"</code> and add <code>isClosed() { return !this.open; }</code></li>
    <li>❌ <code>@click="open = false"</code> → ✅ <code>@click="close"</code> and add <code>close() { this.open = false; }</code></li>
    <li>❌ <code>:class="{'hidden': !open}"</code> → ✅ <code>:class="hiddenClass"</code> and a method returning the class object</li>
</ul>

<p>Do not put <code>&lt;script&gt;</code> tags inside Alpine template markup that is repeated or dynamically rendered; keep all logic in registered components and external scripts authorized by CSP (nonce or hash).</p>

<h3 class="study-content-heading">2. Using Alpine.data()</h3>
<p>In Alpine CSP, <code>x-data</code> must reference a function <strong>registered with <code>Alpine.data()</code></strong>. Inline objects like <code>x-data="{ open: false }"</code> are not allowed because they require evaluating an expression.</p>

<pre><code class="language-javascript">function initMyComponent() {
  return { open: false };
}
window.addEventListener('alpine:init', () => {
  Alpine.data('initMyComponent', initMyComponent);
}, { once: true });</code></pre>

<pre><code class="language-html">&lt;div x-data="initMyComponent"&gt;...&lt;/div&gt;</code></pre>

<p><code>Alpine.data()</code> is only available after Alpine loads, so register in an <code>alpine:init</code> listener. For composition (e.g. <code>hyva.modal</code>, <code>hyva.formValidation</code>), merge inside the constructor with <code>Object.assign(hyva.modal.call(this), hyva.formValidation(this.$el), { ... })</code>.</p>

<h3 class="study-content-heading">3. Using data attributes as arguments</h3>
<p>CSP does not allow passing arguments from the template into a method (e.g. <code>@click="setTab('shipping')"</code>). Use <strong>data attributes</strong> and read them in the method via <code>this.$el.dataset</code> or <code>this.$event.target.dataset</code>.</p>

<pre><code class="language-html">&lt;button @click="setTab" data-tab="shipping"&gt;Shipping&lt;/button&gt;</code></pre>

<pre><code class="language-javascript">setTab(event) {
  this.activeTab = event.target.dataset.tab;
}</code></pre>

<p>For server-supplied config, put JSON on a <code>data-config</code> (or similar) attribute and parse in <code>init()</code>: <code>this.config = JSON.parse(this.$el.dataset.config || '{}')</code>. Use <code>$escaper->escapeHtmlAttr()</code> for the value in PHP, not <code>escapeJs()</code>.</p>

<h3 class="study-content-heading">4. Using iteration variables within component methods</h3>
<p>In <code>x-for</code>, the value-provider must be a <strong>property or method with no arguments</strong> (e.g. <code>items</code> or <code>getItems</code>, not <code>getItems('category')</code>). The iteration variable and index are available as <code>this.item</code> and <code>this.index</code> inside any method called from the loop.</p>

<pre><code class="language-html">&lt;template x-for="(item, index) in items" :key="index"&gt;
  &lt;span @click="goToItem"&gt;&lt;span x-text="item.name"&gt;&lt;/span&gt;&lt;/span&gt;
&lt;/template&gt;</code></pre>

<pre><code class="language-javascript">goToItem() {
  // this.item and this.index are set by Alpine for the current iteration
  window.location = \`/product/\${this.item.id}\`;
}</code></pre>

<p>Use methods for any transformation (e.g. <code>listItemClasses()</code> using <code>this.item</code> and <code>this.index</code>) instead of inline expressions in the template.</p>

<h3 class="study-content-heading">5. Avoiding injecting scripts from Ajax responses</h3>
<p>Under strict CSP, only scripts that are part of the initial page and authorized (via nonce or hash in the CSP header) can run. <strong>Do not inject <code>&lt;script&gt;</code> tags from Ajax HTML</strong> (e.g. via <code>innerHTML</code> or <code>hyva.activateScripts()</code>) — those scripts are not in the original document and will not have a valid nonce/hash, so the browser will block them.</p>

<p><strong>Preferred approach:</strong> Have the server return <strong>data only</strong> (e.g. JSON). The existing page JS (already loaded and authorized) then updates the DOM or Alpine state. If you must replace HTML from a fetch response, strip or avoid <code>&lt;script&gt;</code> in that HTML and drive behavior with the JS already on the page (e.g. pass data into existing components or dispatch events).</p>

<p>References: <a href="https://docs.hyva.io/hyva-themes/writing-code/csp/alpine-csp.html" target="_blank" rel="noopener">Alpine.js CSP</a>; <a href="https://docs.hyva.io/hyva-themes/writing-code/csp/alpine-csp-constructor-functions.html" target="_blank" rel="noopener">Alpine CSP constructor functions</a>; <a href="https://docs.hyva.io/hyva-themes/writing-code/csp/alpine-csp-properties.html" target="_blank" rel="noopener">Alpine CSP properties</a>; <a href="https://docs.hyva.io/hyva-themes/writing-code/csp/alpine-csp-x-for.html" target="_blank" rel="noopener">Alpine CSP x-for</a>; <a href="https://docs.hyva.io/hyva-themes/writing-code/csp/csp-compatibility.html" target="_blank" rel="noopener">CSP compatibility</a>.</p>`
        }
    ]
};
