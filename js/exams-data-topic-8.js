/**
 * Topic 8 Data - Auto-generated
 * Topic: Hyvä Features
 * Questions: 18
 */

window.TOPIC_DATA = window.TOPIC_DATA || {};
window.TOPIC_DATA[8] = {
    "topicNumber": 8,
    "topicName": "Hyv\u00e4 Features",
    "questionCount": 18,
    "questions": [
        {
            "question": "How can multiple modals be used on the same page without naming conflicts?",
            "options": {
                "B": "Use the same modal name for all",
                "C": "Pass a unique modal name to the show() method",
                "D": "Only one modal can exist per page",
                "A": "Use different Alpine components for each modal"
            },
            "correctAnswer": [
                "C"
            ],
            "explanation": "When using multiple modals, each must have a unique name passed to the show() method. The PHP Modal view model's getShowJs() method handles this automatically.",
            "isMultiple": false,
            "id": "q_0120",
            "topic": 8,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What can be done with the return value of the modal show() promise?",
            "options": {
                "C": "Nothing, it returns void",
                "B": "It can be used to execute code after the modal is shown or handle modal dismissal",
                "D": "It returns the modal HTML",
                "A": "It returns the Alpine component"
            },
            "correctAnswer": [
                "B"
            ],
            "explanation": "The show() method returns a promise that resolves when the modal is shown and can be used to chain actions or handle modal lifecycle events.",
            "isMultiple": false,
            "id": "q_0121",
            "topic": 8,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "How can the item template be changed for a specific product slider while keeping the regular template for other sliders?",
            "options": {
                "B": "Modify the core Hyv\u00e4 slider template",
                "A": "Use the item_template argument (deprecated in 1.4.0+)",
                "D": "Override Magento_Catalog\/templates\/product\/list\/item.phtml with layout XML",
                "C": "It is not possible to have different templates"
            },
            "correctAnswer": [
                "D"
            ],
            "explanation": "Since Hyv\u00e4 1.4.0, product sliders use the standard item template. To customize a specific slider, override the template using layout XML with a specific block reference.",
            "isMultiple": false,
            "id": "q_0122",
            "topic": 8,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What layout handle is required to use the Hyv\u00e4 modal library?",
            "options": {
                "C": "hyva_theme",
                "D": "hyva_modal",
                "A": "hyva_alpine",
                "B": "hyva_tailwind"
            },
            "correctAnswer": [
                "D"
            ],
            "explanation": "The hyva_modal layout handle must be included in the page layout XML to load the modal JavaScript library.",
            "isMultiple": false,
            "id": "q_0123",
            "topic": 8,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "How can a custom Tailwind configuration be applied to the CMS Tailwind JIT compiler?",
            "options": {
                "D": "Modify the theme tailwind.config.js only",
                "A": "Apply customizations to both the theme and CMS compiler configuration",
                "B": "Use inline styles only",
                "C": "CMS content cannot use Tailwind classes"
            },
            "correctAnswer": [
                "A"
            ],
            "explanation": "The CMS Tailwind JIT compiler has its own configuration. Customizations must be applied to both the theme tailwind.config.js and the CMS compiler configuration for classes to be available in CMS content.",
            "isMultiple": false,
            "id": "q_0124",
            "topic": 8,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What layout handle is required to enable JavaScript form validation in Hyv\u00e4?",
            "options": {
                "B": "hyva_validation",
                "D": "hyva_form_validation",
                "C": "hyva_forms",
                "A": "hyva_alpine"
            },
            "correctAnswer": [
                "D"
            ],
            "explanation": "The hyva_form_validation layout handle must be included to load the form validation library.",
            "isMultiple": false,
            "id": "q_0125",
            "topic": 8,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What are the benefits of using browser native HTML5 validation compared to JavaScript validation?",
            "options": {
                "B": "Native validation is always more powerful",
                "A": "Native validation works without JavaScript and provides better accessibility",
                "D": "JavaScript validation is always better",
                "C": "There are no differences"
            },
            "correctAnswer": [
                "A"
            ],
            "explanation": "Browser native HTML5 validation works without JavaScript, provides better accessibility, and integrates with screen readers. However, JS validation offers more customization options.",
            "isMultiple": false,
            "id": "q_0126",
            "topic": 8,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "How are custom validation rules added to the Hyv\u00e4 form validation library?",
            "options": {
                "C": "Modify the core validation library",
                "A": "Use hyva.formValidation.addRule() method",
                "D": "Use jQuery validation",
                "B": "Custom rules cannot be added"
            },
            "correctAnswer": [
                "A"
            ],
            "explanation": "Custom validation rules are added using hyva.formValidation.addRule(), passing the rule name and a validation function.",
            "isMultiple": false,
            "id": "q_0127",
            "topic": 8,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What CSS classes should wrap input elements when using Hyv\u00e4 form validation?",
            "options": {
                "D": "input-wrapper",
                "C": "field field-reserved",
                "A": "form-field",
                "B": "validation-field"
            },
            "correctAnswer": [
                "C"
            ],
            "explanation": "Input elements should be wrapped in a container with class=\"field field-reserved\" to reserve space for error messages and prevent layout shift.",
            "isMultiple": false,
            "id": "q_0128",
            "topic": 8,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "How can modal contents be updated depending on outside values when the modal is opened?",
            "options": {
                "B": "Modals cannot be updated dynamically",
                "A": "Use the show() promise and update modal content based on the trigger element's data attributes",
                "D": "Reload the entire page",
                "C": "Use jQuery to update content"
            },
            "correctAnswer": [
                "A"
            ],
            "explanation": "Modal content can be dynamically updated by reading data attributes from the trigger element and updating the modal content when show() is called, allowing different content based on context.",
            "isMultiple": false,
            "id": "q_0129",
            "topic": 8,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What is the correct way to merge hyva.modal() with custom Alpine component logic?",
            "options": {
                "D": "Replace hyva.modal() completely",
                "C": "Use Object.assign() or object spread to merge hyva.modal() with custom properties",
                "B": "Create a separate Alpine component",
                "A": "Modify hyva.modal() directly"
            },
            "correctAnswer": [
                "C"
            ],
            "explanation": "Use Object.assign({}, hyva.modal(), customLogic()) or object spread {...hyva.modal(), ...customLogic()} to merge modal functionality with custom component logic without overwriting modal methods.",
            "isMultiple": false,
            "id": "q_0130",
            "topic": 8,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "How can product sliders be configured to show products from specific categories?",
            "options": {
                "A": "Use JavaScript to filter products",
                "B": "Use the category_ids argument in the slider block configuration",
                "D": "Modify the core slider template",
                "C": "Product sliders cannot filter by category"
            },
            "correctAnswer": [
                "B"
            ],
            "explanation": "The category_ids argument accepts a comma-separated list of category IDs to display products from those categories in the slider.",
            "isMultiple": false,
            "id": "q_0131",
            "topic": 8,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What argument is used to filter products by price range in a product slider?",
            "options": {
                "D": "price_filter",
                "A": "price_from and price_to",
                "B": "min_price and max_price",
                "C": "price_range"
            },
            "correctAnswer": [
                "A"
            ],
            "explanation": "The price_from and price_to arguments filter products to show only those within the specified price range in the slider.",
            "isMultiple": false,
            "id": "q_0132",
            "topic": 8,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "How can custom validation messages be displayed in Hyv\u00e4 form validation?",
            "options": {
                "B": "Modify the core validation library",
                "C": "Use data-msg-VALIDATOR_NAME attributes to override default messages",
                "D": "Use JavaScript alerts",
                "A": "Custom messages are not supported"
            },
            "correctAnswer": [
                "C"
            ],
            "explanation": "The data-msg-VALIDATOR_NAME attribute allows overriding default validator messages. For example, data-msg-required=\"Custom message\" overrides the required validator message.",
            "isMultiple": false,
            "id": "q_0133",
            "topic": 8,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What is the purpose of the field-reserved CSS class in form validation?",
            "options": {
                "C": "To hide the field",
                "B": "To reserve space for error messages and prevent layout shift",
                "A": "To make the field required",
                "D": "To disable the field"
            },
            "correctAnswer": [
                "B"
            ],
            "explanation": "The field-reserved class reserves space below the input for error messages, preventing Cumulative Layout Shift (CLS) when validation errors appear.",
            "isMultiple": false,
            "id": "q_0134",
            "topic": 8,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "How can asynchronous validation be implemented in Hyv\u00e4 form validation?",
            "options": {
                "B": "Asynchronous validation is not supported",
                "D": "Return a Promise from the validation function",
                "C": "Use setTimeout only",
                "A": "Use jQuery Ajax"
            },
            "correctAnswer": [
                "D"
            ],
            "explanation": "Validation functions can return a Promise that resolves to true (valid) or a message string (invalid), enabling async operations like API calls for validation.",
            "isMultiple": false,
            "id": "q_0135",
            "topic": 8,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "What is the default timeout for x-defer=\"idle\" component initialization?",
            "options": {
                "A": "1000ms",
                "B": "2000ms",
                "D": "4000ms",
                "C": "No timeout"
            },
            "correctAnswer": [
                "D"
            ],
            "explanation": "The default timeout for x-defer=\"idle\" is 4000ms, configurable in Hyv\u00e4 Themes > General > Deferred Alpine.js Components > Defer until idle timeout.",
            "isMultiple": false,
            "id": "q_0136",
            "topic": 8,
            "difficulty": "medium",
            "type": "multiple_choice"
        },
        {
            "question": "How can the CMS Tailwind JIT compiler be debugged when classes are not compiled?",
            "options": {
                "D": "Check browser console only",
                "A": "Verify classes are in both theme tailwind.config.js and CMS compiler configuration, check purging settings",
                "C": "Restart the server",
                "B": "Classes cannot be debugged"
            },
            "correctAnswer": [
                "A"
            ],
            "explanation": "Debugging CMS Tailwind JIT compilation requires checking that classes exist in both configurations, verifying purging\/content scanning settings, and ensuring the CMS compiler is processing the correct content.",
            "isMultiple": false,
            "id": "q_0137",
            "topic": 8,
            "difficulty": "medium",
            "type": "multiple_choice"
        }
    ]
};
