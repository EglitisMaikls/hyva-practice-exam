/**
 * Study content - Topic 1: Layout XML Blocks and View Models
 */
window.STUDY_CONTENT = window.STUDY_CONTENT || {};
window.STUDY_CONTENT[1] = {
    name: "Layout XML Blocks and View Models",
    subsections: [
        {
            title: "1.1 Demonstrate the ability to use Layout Merging for theme customization",
            bullets: [
                "Adding a block to a container",
                "Effects of redeclaring a block from a parent theme in a child theme",
                "Avoiding code duplication with custom layout handles",
                "Moving a child block from a container into a template block"
            ],
            content: `<h3 class="study-content-heading">1. Adding a Block to a Container</h3>
  <p>To add a new block, reference the target container and define your block. You do not need to specify the class if it is a standard template block.</p>
  <pre><code class="language-xml">&lt;referenceContainer name="content"&gt;
  &lt;block name="custom.block" template="Magento_Theme::custom.phtml" /&gt;
  &lt;/referenceContainer&gt;</code></pre>
  <div class="study-note"><strong>Note:</strong> Omit <code>class="..."</code> when using standard template blocks. Magento defaults to <code>Magento\\Framework\\View\\Element\\Template</code> automatically.</div>

  <h3 class="study-content-heading">2. Redeclaring Blocks (Layout Merging)</h3>
  <p>If you define a block in a child theme using the same <code>name</code> as a block in the parent theme, Magento <strong>merges</strong> the definitions rather than creating a duplicate.</p>
  <ul>
  <li><strong>Effect:</strong> The child theme's attributes (like <code>template</code>) overwrite the parent's.</li>
  <li><strong>Best Practice:</strong> Use <code>&lt;referenceBlock&gt;</code> to modify existing blocks explicitly.</li>
  </ul>

  <h3 class="study-content-heading">3. Custom Layout Handles (Avoiding Duplication)</h3>
  <p>If you have a set of layout updates used on multiple unrelated pages (e.g., CMS pages and Product pages), do not duplicate the XML. Create a custom handle.</p>
  <p><strong>Step 1:</strong> Create <code>my_custom_layout.xml</code> in your layout folder.</p>
  <pre><code class="language-xml">&lt;!-- app/design/frontend/Vendor/Theme/Magento_Theme/layout/my_custom_layout.xml --&gt;
  &lt;layout xmlns:xsi="..."&gt;
  &lt;referenceContainer name="sidebar.additional"&gt;
  &lt;block name="my.sidebar.promo" template="Magento_Theme::promo.phtml" /&gt;
  &lt;/referenceContainer&gt;
  &lt;/layout&gt;</code></pre>
  <p><strong>Step 2:</strong> Include it in other layout files.</p>
  <pre><code class="language-xml">&lt;!-- catalog_product_view.xml --&gt;
  &lt;page xmlns:xsi="..."&gt;
  &lt;update handle="my_custom_layout"/&gt;
  &lt;body&gt;...&lt;/body&gt;
  &lt;/page&gt;</code></pre>

  <h3 class="study-content-heading">4. Moving to a Template Block</h3>
  <p>When you move a block from a <strong>Container</strong> (renders automatically) to a <strong>Block</strong> (renders manually), the block disappears unless called in the template.</p>
  <p><strong>The Move:</strong></p>
  <pre><code class="language-xml">&lt;move element="catalog.product.related" destination="product.info.main" as="related_products" /&gt;</code></pre>
  <div class="study-note study-note-important"><strong>Important:</strong> Moving a block into another block does not render it automatically. You must call <code>$block->getChildHtml('alias')</code> or just <code>$block->getChildHtml()</code> in the parent template.</div>
  <p><strong>The Render:</strong><br>Inside the template of <code>product.info.main</code>:</p>
  <pre><code class="language-php">&lt;?= $block-&gt;getChildHtml('related_products') ?&gt;</code></pre>`
        },
        {
            title: "1.2 Demonstrate the ability to use Layout handles to implement customizations",
            bullets: [
                "Determining the action layout handle for a page",
                "Determining all layout handles applied to a route",
                "Impact of layout handle merge order"
            ],
            content: `<h3 class="study-content-heading">1. Identifying the "Full Action Name" Handle</h3>
<p>The primary handle for a page is the "Full Action Name" (route_controller_action). The easiest way to find this without code is inspecting the <code>&lt;body&gt;</code> tag.</p>
<pre><code class="language-html">&lt;!-- Browser Element Inspector --&gt;
&lt;body class="page-layout-1column catalog-product-view ..."&gt;</code></pre>
<div class="study-note"><strong>Tip:</strong> Convert the class <code>catalog-product-view</code> to underscores: <code>catalog_product_view</code>. This is the name of the XML file you should target.</div>

<h3 class="study-content-heading">2. Determining ALL Applied Handles</h3>
<p>A single page request is composed of many layered handles. The body class only shows the main one. To see <strong>every</strong> handle applied (including generic ones like <code>default</code> or specific ones like <code>catalog_product_view_type_simple</code>), you often need to debug.</p>
<p><strong>Programmatic Method:</strong></p>
<pre><code class="language-php">&lt;!-- Temporary debug in a phtml file --&gt;
&lt;?php dump($block->getLayout()->getUpdate()->getHandles()); ?&gt;</code></pre>
<p><strong>Typical Handle Stack (Product Page):</strong></p>
<ul>
    <li><code>default</code> (Global)</li>
    <li><code>catalog_product_view</code> (Action)</li>
    <li><code>catalog_product_view_type_simple</code> (Type specific)</li>
    <li><code>catalog_product_view_id_42</code> (ID specific)</li>
    <li><code>customer_logged_in</code> (Context specific)</li>
</ul>

<h3 class="study-content-heading">3. The "hyva_" Prefix Strategy</h3>
<p>Hyvä automatically adds a duplicate handle prefixed with <code>hyva_</code> for <strong>every</strong> handle applied to the page. This is critical for compatibility.</p>
<p><strong>Hyvä Handle Stack:</strong></p>
<ul>
    <li><code>default</code> <span style="color:#666">→</span> <code>hyva_default</code></li>
    <li><code>catalog_product_view</code> <span style="color:#666">→</span> <code>hyva_catalog_product_view</code></li>
</ul>
<p>This allows you to create <strong>Compatibility Modules</strong>. You can keep Luma's JS/CSS in the standard handles and place Hyvä-specific Alpine/Tailwind overrides in the <code>hyva_</code> handles. The <code>hyva_</code> handles are loaded <strong>after</strong> the standard ones, giving them priority.</p>

<h3 class="study-content-heading">4. Impact of Merge Order</h3>
<p>Layout updates are merged sequentially. Later instructions override earlier ones. The load order is generally:</p>
<ol>
    <li>Module Layouts (<code>vendor/...</code>)</li>
    <li>Theme Layouts (<code>app/design/...</code>)</li>
    <li><strong>Hyvä Prefixed Handles</strong> (<code>hyva_catalog_product_view</code>)</li>
    <li>Database/Widget Updates</li>
</ol>`
        },
        {
            title: "1.3 Demonstrate the ability to use the Magento block cache effectively",
            bullets: [
                "Caching a block in the block_html cache",
                "Possible issues that can arise from using the block_html cache"
            ],
            content: `<h3 class="study-content-heading">1. Caching a Block (block_html)</h3>
<p>To cache a block's HTML output, you must set a <code>cache_lifetime</code>. If this is not set (or null), the block is not cached in the <code>block_html</code> cache.</p>
<pre><code class="language-xml">&lt;block name="example.block" template="file.phtml"&gt;
    &lt;arguments&gt;
        &lt;argument name="cache_lifetime" xsi:type="number"&gt;3600&lt;/argument&gt;
        &lt;argument name="cache_tags" xsi:type="array"&gt;
            &lt;item name="0" xsi:type="string"&gt;CATALOG_PRODUCT&lt;/item&gt;
        &lt;/argument&gt;
    &lt;/arguments&gt;
&lt;/block&gt;</code></pre>

<h3 class="study-content-heading">2. Cache Keys and Uniqueness</h3>
<p>Magento generates a unique Cache ID based on <code>getCacheKeyInfo()</code>. If your block renders different content based on context (e.g., Store View, Currency, or Mobile vs Desktop), you must override this method.</p>
<pre><code class="language-php">public function getCacheKeyInfo() {
    return array_merge(parent::getCacheKeyInfo(), [
        $this->_storeManager->getStore()->getId(),
        $this->httpContext->getValue(\\Magento\\Customer\\Model\\Context::CONTEXT_GROUP)
    ]);
}</code></pre>

<h3 class="study-content-heading">3. Common Issues & Pitfalls</h3>
<ul>
    <li><strong>User Specific Data:</strong> Cached HTML is static. If you cache "Welcome, John!", the next user will see "Welcome, John!".
        <div class="study-note"><strong>Fix:</strong> Use Private Content (Alpine.js/AJAX) to load user data client-side.</div>
    </li>
    <li><strong>Form Keys (CSRF):</strong> Never cache a block containing a form with a Form Key. The key will expire, breaking submissions for subsequent users.</li>
    <li><strong>CSP & Inline Scripts (Critical):</strong>
        <p>If strict CSP is enabled (no <code>unsafe-inline</code>), caching blocks with <code>&lt;script&gt;</code> tags causes failures:</p>
        <ul>
            <li><strong>Uncached Pages:</strong> Scripts need a unique <code>nonce</code> per request. A cached block serves an old <code>nonce</code>, so the browser blocks the script.</li>
            <li><strong>Cached Pages (FPC):</strong> Script SHAs must be in the HTTP header. If a block is loaded from <code>block_html</code> cache, the script isn't "registered", so the SHA is missing.</li>
        </ul>
        <div class="study-note study-note-important"><strong>Fix:</strong> Move the script to a separate, uncached template OR disable caching for that block (<code>cache_lifetime = false</code>).</div>
    </li>
</ul>

<h3 class="study-content-heading">4. Real World Example: Top Menu</h3>
<p>The <code>topmenu_generic</code> block is cached globally. If you have a custom <strong>uncached</strong> page, the menu's cached script (with an old nonce) will break. You must explicitly disable its cache on that route.</p>
<pre><code class="language-xml">&lt;!-- In your custom_uncached_route.xml --&gt;
&lt;referenceBlock name="topmenu_generic"&gt;
    &lt;arguments&gt;
        &lt;argument name="cache_lifetime" xsi:type="boolean"&gt;false&lt;/argument&gt;
    &lt;/arguments&gt;
&lt;/referenceBlock&gt;</code></pre>`
        }
    ]
};
