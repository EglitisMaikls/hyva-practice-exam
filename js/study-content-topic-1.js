/**
 * @author    Magebit <info@magebit.com>
 * @copyright Copyright (c) Magebit, Ltd. (https://magebit.com)
 * @license   https://magebit.com/code-license
 */

window.STUDY_CONTENT = window.STUDY_CONTENT || {};
window.STUDY_CONTENT[1] = {
    name: "Layout XML Blocks and View Models",
    subsections: [
        {
            title: "Demonstrate the ability to use Layout Merging for theme customization",
            bullets: [
                "Adding a block to a container",
                "Effects of redeclaring a block from a parent theme in a child theme",
                "Avoiding code duplication with custom layout handles",
                "Moving a child block from a container into a template block"
            ],
            content: `<h3 class="study-content-heading">Adding a block to a container</h3>
  <p>To add a new block, reference the target container and define your block. You do not need to specify the class if it is a standard template block.</p>
  <pre><code class="language-xml">&lt;referenceContainer name="content"&gt;
  &lt;block name="custom.block" template="Magento_Theme::custom.phtml" /&gt;
  &lt;/referenceContainer&gt;</code></pre>
  <div class="study-note"><strong>Note:</strong> Omit <code>class="..."</code> when using standard template blocks. Magento defaults to <code>Magento\\Framework\\View\\Element\\Template</code> automatically.</div>

  <h3 class="study-content-heading">Effects of redeclaring a block from a parent theme in a child theme</h3>
  <p>If you define a block in a child theme using the same <code>name</code> as a block in the parent theme, Magento <strong>merges</strong> the definitions: when the process finds another <code>&lt;block&gt;</code> tag with the same block name, it discards the existing record and replaces it with the new one. A <code>&lt;referenceBlock&gt;</code> tag updates the existing record instead of replacing it.</p>
  <ul>
  <li><strong>Effect:</strong> The child theme's attributes (e.g. <code>template</code>) overwrite the parent's; copying block declarations masks parent-theme changes and complicates upgrades.</li>
  <li><strong>Best practice:</strong> Use <code>&lt;referenceBlock name="example"&gt;</code> in child themes instead of re-declaring <code>&lt;block name="example"&gt;</code> so new block arguments from parent theme updates apply automatically.</li>
  </ul>

  <h3 class="study-content-heading">Avoiding code duplication with custom layout handles</h3>
  <p>If you have a set of layout updates used on multiple unrelated pages (e.g. CMS and Product pages), do not duplicate the XML. Create a custom handle.</p>
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

  <h3 class="study-content-heading">Moving a child block from a container into a template block</h3>
  <p>When you move a block from a <strong>container</strong> (renders automatically) to a <strong>block</strong> (renders manually), the block is not output unless the parent template calls it.</p>
  <p><strong>The move:</strong></p>
  <pre><code class="language-xml">&lt;move element="catalog.product.related" destination="product.info.main" as="related_products" /&gt;</code></pre>
  <div class="study-note study-note-important"><strong>Important:</strong> Moving a block into another block does not render it automatically. You must call <code>$block->getChildHtml('alias')</code> or <code>$block->getChildHtml()</code> in the parent template.</div>
  <p><strong>Rendering in the parent template</strong> (e.g. inside <code>product.info.main</code>):</p>
  <pre><code class="language-php">&lt;?= $block-&gt;getChildHtml('related_products') ?&gt;</code></pre>

  <div class="study-references"><strong>References</strong>
  <ul>
  <li><a href="https://docs.hyva.io/hyva-themes/writing-code/layout-and-templates/referencing-parent-theme-blocks.html" target="_blank" rel="noopener">Referencing parent-theme blocks</a> (Hyvä docs)</li>
  </ul></div>`
        },
        {
            title: "Demonstrate the ability to use Layout handles to implement customizations",
            bullets: [
                "Determining the action layout handle for a page",
                "Determining all layout handles applied to a route",
                "Impact of layout handle merge order"
            ],
            content: `<h3 class="study-content-heading">Determining the action layout handle for a page</h3>
<p>The primary handle for a page is the "Full Action Name" (route_controller_action). The easiest way to find it without code is to inspect the <code>&lt;body&gt;</code> tag in the browser.</p>
<pre><code class="language-html">&lt;!-- Browser element inspector --&gt;
&lt;body class="page-layout-1column catalog-product-view ..."&gt;</code></pre>
<div class="study-note"><strong>Tip:</strong> Convert the body class <code>catalog-product-view</code> to underscores: <code>catalog_product_view</code>. That is the action layout handle and the XML file name you should target.</div>

<h3 class="study-content-heading">Determining all layout handles applied to a route</h3>
<p>A single page request uses many layered handles. For example, a Luma store might load: <code>default</code>, <code>cms_index_index</code>, <code>cms_page</code>, <code>customer_logged_out</code>. On a product page you also get the action handle, type-specific handles (e.g. <code>catalog_product_view_type_simple</code>), and context handles. The body class only shows the main action handle.</p>
<p>To see <strong>every</strong> handle applied, debug programmatically:</p>
<pre><code class="language-php">&lt;?php dump($block->getLayout()->getUpdate()->getHandles()); ?&gt;</code></pre>
<p>On store views using a Hyvä theme, for every layout handle applied, a handle with the <code>hyva_</code> prefix is also applied (e.g. <code>default</code> → <code>hyva_default</code>, <code>catalog_product_view</code> → <code>hyva_catalog_product_view</code>). The prefixed handles are always loaded after the regular handles.</p>

<h3 class="study-content-heading">Impact of layout handle merge order</h3>
<p>Layout instructions are processed from the lowest-priority fallback theme up to the current theme. Layout updates are merged sequentially; later instructions override earlier ones. Values from the original handle can be overridden in <code>hyva_*</code> handles. This allows compatibility modules: Luma blocks/phtml can live in default handles and Hyvä-specific overrides in <code>hyva_</code> layout files, so only Hyvä store views are affected.</p>
<ol>
    <li>Module layouts (<code>vendor/...</code>)</li>
    <li>Theme layouts (<code>app/design/...</code>)</li>
    <li>Hyvä-prefixed handles (<code>hyva_catalog_product_view</code>, etc.)</li>
    <li>Database / widget updates</li>
</ol>

<div class="study-references"><strong>References</strong>
<ul>
<li><a href="https://docs.hyva.io/hyva-themes/writing-code/layout-and-templates/the-hyva_-layout-handles.html" target="_blank" rel="noopener">The hyva_ layout handles</a> (Hyvä docs)</li>
</ul></div>`
        },
        {
            title: "Demonstrate the ability to use the Magento block cache effectively",
            bullets: [
                "Caching a block in the block_html cache",
                "Possible issues that can arise from using the block_html cache"
            ],
            content: `<h3 class="study-content-heading">Caching a block in the block_html cache</h3>
<p>A block with a <code>cache_lifetime</code> data record that is not <code>false</code> or <code>null</code> will be cached in the <code>block_html</code> cache (a value of <code>0</code> means the cache record never expires). If <code>cache_lifetime</code> is not set or is null, the block is not cached.</p>
<p>Often the value is set in layout XML; it can also be set in the block class or in the template.</p>
<pre><code class="language-xml">&lt;block name="example.block" template="file.phtml"&gt;
    &lt;arguments&gt;
        &lt;argument name="cache_lifetime" xsi:type="string"&gt;3600&lt;/argument&gt;
        &lt;argument name="cache_tags" xsi:type="array"&gt;
            &lt;item name="0" xsi:type="string"&gt;CATALOG_PRODUCT&lt;/item&gt;
        &lt;/argument&gt;
    &lt;/arguments&gt;
&lt;/block&gt;</code></pre>
<p>Magento generates a unique cache ID from <code>getCacheKeyInfo()</code>. If the block output depends on context (e.g. store, customer group), override this method to include those values.</p>

<h3 class="study-content-heading">Possible issues that can arise from using the block_html cache</h3>
<ul>
    <li><strong>User-specific data:</strong> Cached HTML is static. Caching "Welcome, John!" shows that to the next user. Use private content (e.g. Alpine.js/AJAX) for user data.</li>
    <li><strong>Form keys (CSRF):</strong> Do not cache a block that contains a form with a Form Key; the key expires and submissions break for other users.</li>
    <li><strong>CSP and inline scripts:</strong> If <code>unsafe-inline</code> is excluded from the script-src CSP policy, blocks with scripts cached in <code>block_html</code> can cause issues (including when the script is rendered by a child block). How it shows depends on full-page cache:
        <ul>
            <li><strong>Uncached pages:</strong> A nonce is injected into script tags and must be different per request. Cached block HTML contains an old nonce, so the script is not executed. Disabling full-page cache makes this occur on all pages; with strict CSP, keep FPC enabled or disable both full_page and block_html cache.</li>
            <li><strong>Cached pages (FPC):</strong> Script SHAs are added to the CSP HTTP header. If the block is served from block_html cache when the page is rendered, the inline script is not registered and the SHA is missing from the header. Exclude scripts from blocks cached in block_html: either exclude the whole block from block_html (set <code>cache_lifetime</code> to <code>false</code> in layout, block class, or template as appropriate), or extract the script into a separate uncached template block.</li>
        </ul>
    </li>
</ul>
<p><strong>Example — top menu:</strong> The top-menu block is used on all pages. If you have custom uncached pages, exclude it from block_html on those routes so cached script with an old nonce does not break. Use the same level where cache was set (e.g. layout):</p>
<pre><code class="language-xml">&lt;referenceBlock name="topmenu_generic"&gt;
    &lt;arguments&gt;
        &lt;argument name="cache_lifetime" xsi:type="boolean"&gt;false&lt;/argument&gt;
    &lt;/arguments&gt;
&lt;/referenceBlock&gt;</code></pre>
<p>In PHP, whether the page will be stored in the full-page cache can be checked via <code>$this->layout->isCacheable()</code>.</p>

<div class="study-references"><strong>References</strong>
<ul>
<li><a href="https://docs.hyva.io/hyva-themes/writing-code/csp/csp-and-block-caching.html" target="_blank" rel="noopener">CSP &amp; block_html Cache</a> (Hyvä docs)</li>
</ul></div>`
        }
    ]
};
