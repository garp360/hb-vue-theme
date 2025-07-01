// =============================================================================
// HB VUE THEME - DEMO SCRIPT
// =============================================================================
// This script demonstrates how to use the custom 'hb' theme
// in various scenarios and configurations

// Example 1: Basic Button Usage
console.log('=== HB Theme Button Examples ===');

// Primary button
const primaryButton = {
  class: 'hb-button hb-button-primary',
  text: 'Primary Action',
  icon: 'pi pi-check'
};

// Secondary button
const secondaryButton = {
  class: 'hb-button hb-button-secondary',
  text: 'Secondary Action',
  icon: 'pi pi-times'
};

// Success button
const successButton = {
  class: 'hb-button hb-button-success',
  text: 'Save Changes',
  icon: 'pi pi-save'
};

// Danger button
const dangerButton = {
  class: 'hb-button hb-button-danger',
  text: 'Delete Item',
  icon: 'pi pi-trash'
};

// Example 2: Input Components
console.log('=== HB Theme Input Examples ===');

// Text input
const textInput = {
  class: 'hb-inputtext',
  placeholder: 'Enter your name...',
  type: 'text'
};

// Number input
const numberInput = {
  class: 'hb-inputnumber',
  placeholder: 'Enter amount...',
  type: 'number'
};

// Search input
const searchInput = {
  class: 'hb-inputtext hb-inputtext-search',
  placeholder: 'Search products...',
  type: 'search'
};

// Example 3: Dropdown Component
console.log('=== HB Theme Dropdown Examples ===');

const dropdown = {
  class: 'hb-dropdown',
  placeholder: 'Select an option...',
  options: ['Option 1', 'Option 2', 'Option 3']
};

// Example 4: DataTable Configuration
console.log('=== HB Theme DataTable Examples ===');

const dataTableConfig = {
  class: 'hb-datatable',
  features: {
    sorting: true,
    filtering: true,
    pagination: true,
    selection: true,
    loading: true
  },
  columns: [
    { field: 'name', header: 'Product Name', sortable: true, filterable: true },
    { field: 'category', header: 'Category', sortable: true, filterable: true },
    { field: 'price', header: 'Price', sortable: true, filterable: true },
    { field: 'stock', header: 'Stock', sortable: true },
    { field: 'actions', header: 'Actions', sortable: false }
  ]
};

// Example 5: Theme Customization
console.log('=== HB Theme Customization Examples ===');

// Custom color scheme
const customColors = {
  primary: '#8B5CF6',    // Purple
  secondary: '#6B7280',  // Gray
  success: '#10B981',    // Emerald
  warning: '#F59E0B',    // Amber
  danger: '#EF4444'      // Red
};

// Custom spacing
const customSpacing = {
  xs: '0.25rem',   // 4px
  sm: '0.5rem',    // 8px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
  xl: '2rem'       // 32px
};

// Example 6: Responsive Utilities
console.log('=== HB Theme Responsive Examples ===');

const responsiveClasses = {
  hideOnMobile: 'hb-hidden-sm',
  showOnMobile: 'hb-visible-sm',
  fullWidthMobile: 'hb-mobile-full',
  hideOnTablet: 'hb-hidden-md',
  showOnDesktop: 'hb-visible-lg'
};

// Example 7: Component Combinations
console.log('=== HB Theme Component Combinations ===');

// Form with custom theme
const customForm = {
  container: 'hb-form-container',
  inputs: [
    { class: 'hb-inputtext', placeholder: 'First Name' },
    { class: 'hb-inputtext', placeholder: 'Last Name' },
    { class: 'hb-dropdown', placeholder: 'Country' },
    { class: 'hb-inputnumber', placeholder: 'Age' }
  ],
  buttons: [
    { class: 'hb-button hb-button-primary', text: 'Submit' },
    { class: 'hb-button hb-button-secondary', text: 'Cancel' }
  ]
};

// Example 8: Loading States
console.log('=== HB Theme Loading States ===');

const loadingStates = {
  button: 'hb-button hb-button-loading',
  input: 'hb-inputtext hb-input-loading',
  dropdown: 'hb-dropdown hb-dropdown-loading',
  datatable: 'hb-datatable hb-datatable-loading'
};

// Example 9: Validation States
console.log('=== HB Theme Validation Examples ===');

const validationStates = {
  valid: 'hb-inputtext ng-valid',
  invalid: 'hb-inputtext ng-invalid',
  error: 'hb-input-error',
  success: 'hb-input-success'
};

// Example 10: Accessibility Features
console.log('=== HB Theme Accessibility Examples ===');

const accessibilityFeatures = {
  focusVisible: 'hb-focus-visible',
  screenReader: 'sr-only',
  keyboardNavigation: 'tabindex="0"',
  ariaLabels: 'aria-label="Description"'
};

// Export examples for use in documentation
export {
  primaryButton,
  secondaryButton,
  successButton,
  dangerButton,
  textInput,
  numberInput,
  searchInput,
  dropdown,
  dataTableConfig,
  customColors,
  customSpacing,
  responsiveClasses,
  customForm,
  loadingStates,
  validationStates,
  accessibilityFeatures
};

console.log('=== HB Theme Demo Complete ===');
console.log('Check the browser at http://localhost:5173 to see the themed components in action!'); 