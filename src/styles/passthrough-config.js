/**
 * HB Vue Theme - PassThrough Configuration
 * 
 * This file contains the PassThrough configuration for PrimeVue 4 unstyled mode.
 * It maps PrimeVue's internal component structure to our custom 'hb-' prefixed classes.
 * 
 * Usage:
 * import { passthroughConfig } from './styles/passthrough-config.js'
 * app.use(PrimeVue, { pt: passthroughConfig })
 */

export const passthroughConfig = {
  // DataTable component mapping
  datatable: {
    root: { class: 'hb-datatable' },
    header: { class: 'hb-datatable-header' },
    headerRow: { class: 'hb-datatable-header-row' },
    headerCell: { class: 'hb-datatable-header-cell' },
    body: { class: 'hb-datatable-body' },
    bodyRow: { class: 'hb-datatable-row' },
    bodyCell: { class: 'hb-datatable-body-cell' },
    footer: { class: 'hb-datatable-footer' },
    footerRow: { class: 'hb-datatable-footer-row' },
    footerCell: { class: 'hb-datatable-footer-cell' },
    table: { class: 'hb-datatable-table' },
    thead: { class: 'hb-datatable-thead' },
    tbody: { class: 'hb-datatable-tbody' },
    tfoot: { class: 'hb-datatable-tfoot' },
    loadingOverlay: { class: 'hb-datatable-loading-overlay' },
    loadingIcon: { class: 'hb-datatable-loading-icon' },
    emptyMessage: { class: 'hb-datatable-empty-message' },
    paginator: { class: 'hb-paginator' }
  },
  
  // Column component mapping
  column: {
    root: { class: 'hb-column' },
    header: { class: 'hb-column-header' },
    headerContent: { class: 'hb-column-header-content' },
    headerTitle: { class: 'hb-column-header-title' },
    sortIcon: { class: 'hb-column-sort-icon' },
    filterOverlay: { class: 'hb-column-filter-overlay' },
    filterInput: { class: 'hb-column-filter-input' },
    filterButton: { class: 'hb-column-filter-button' },
    filterClearButton: { class: 'hb-column-filter-clear-button' },
    body: { class: 'hb-column-body' },
    bodyCell: { class: 'hb-column-body-cell' }
  },
  
  // Button component mapping
  button: {
    root: { class: 'hb-button' },
    label: { class: 'hb-button-label' },
    icon: { class: 'hb-button-icon' },
    loadingIcon: { class: 'hb-button-loading-icon' }
  },
  
  // InputText component mapping
  inputtext: {
    root: { class: 'hb-inputtext' }
  },
  
  // Select component mapping
  select: {
    root: { class: 'hb-select' },
    trigger: { class: 'hb-select-trigger' },
    label: { class: 'hb-select-label' },
    panel: { class: 'hb-select-panel' },
    itemsWrapper: { class: 'hb-select-items-wrapper' },
    item: { class: 'hb-select-item' },
    itemLabel: { class: 'hb-select-item-label' },
    itemIcon: { class: 'hb-select-item-icon' },
    itemGroup: { class: 'hb-select-item-group' },
    itemGroupLabel: { class: 'hb-select-item-group-label' },
    header: { class: 'hb-select-header' },
    filterContainer: { class: 'hb-select-filter-container' },
    filterInput: { class: 'hb-select-filter-input' },
    filterIcon: { class: 'hb-select-filter-icon' },
    closeButton: { class: 'hb-select-close-button' },
    closeIcon: { class: 'hb-select-close-icon' }
  },
  
  // Paginator component mapping
  paginator: {
    root: { class: 'hb-paginator' },
    firstPageButton: { class: 'hb-paginator-first' },
    prevPageButton: { class: 'hb-paginator-prev' },
    nextPageButton: { class: 'hb-paginator-next' },
    lastPageButton: { class: 'hb-paginator-last' },
    pageButton: { class: 'hb-paginator-page' },
    pages: { class: 'hb-paginator-pages' },
    pageLinks: { class: 'hb-paginator-page-links' },
    rowsPerPageDropdown: { class: 'hb-paginator-rows-per-page-dropdown' },
    current: { class: 'hb-paginator-current' },
    rppOptions: { class: 'hb-paginator-rpp-options' },
    rppOption: { class: 'hb-paginator-rpp-option' },
    start: { class: 'hb-paginator-start' },
    end: { class: 'hb-paginator-end' },
    totalRecords: { class: 'hb-paginator-total-records' },
    jumpToPageDropdown: { class: 'hb-paginator-jump-to-page-dropdown' },
    jumpToPageInput: { class: 'hb-paginator-jump-to-page-input' }
  },
  
  // Message component mapping
  message: {
    root: { class: 'hb-message' },
    wrapper: { class: 'hb-message-wrapper' },
    text: { class: 'hb-message-text' },
    icon: { class: 'hb-message-icon' },
    closeButton: { class: 'hb-message-close-button' },
    closeIcon: { class: 'hb-message-close-icon' }
  },
  
  // Calendar component mapping
  calendar: {
    root: { class: 'hb-calendar' },
    input: { class: 'hb-calendar-input' },
    panel: { class: 'hb-calendar-panel' },
    header: { class: 'hb-calendar-header' },
    title: { class: 'hb-calendar-title' },
    monthPicker: { class: 'hb-calendar-month-picker' },
    yearPicker: { class: 'hb-calendar-year-picker' },
    decadePicker: { class: 'hb-calendar-decade-picker' },
    prevButton: { class: 'hb-calendar-prev-button' },
    nextButton: { class: 'hb-calendar-next-button' },
    prevIcon: { class: 'hb-calendar-prev-icon' },
    nextIcon: { class: 'hb-calendar-next-icon' },
    table: { class: 'hb-calendar-table' },
    thead: { class: 'hb-calendar-thead' },
    tbody: { class: 'hb-calendar-tbody' },
    headerRow: { class: 'hb-calendar-header-row' },
    headerCell: { class: 'hb-calendar-header-cell' },
    bodyRow: { class: 'hb-calendar-body-row' },
    bodyCell: { class: 'hb-calendar-body-cell' },
    day: { class: 'hb-calendar-day' },
    today: { class: 'hb-calendar-today' },
    selected: { class: 'hb-calendar-selected' },
    otherMonth: { class: 'hb-calendar-other-month' },
    disabled: { class: 'hb-calendar-disabled' },
    footer: { class: 'hb-calendar-footer' },
    timePicker: { class: 'hb-calendar-time-picker' },
    timePickerHour: { class: 'hb-calendar-time-picker-hour' },
    timePickerMinute: { class: 'hb-calendar-time-picker-minute' },
    timePickerSecond: { class: 'hb-calendar-time-picker-second' },
    timePickerSeparator: { class: 'hb-calendar-time-picker-separator' },
    timePickerAmPm: { class: 'hb-calendar-time-picker-ampm' }
  },
  
  // Panel component mapping
  panel: {
    root: { class: 'hb-panel' },
    header: { class: 'hb-panel-header' },
    title: { class: 'hb-panel-title' },
    headerIcon: { class: 'hb-panel-header-icon' },
    headerToggleIcon: { class: 'hb-panel-header-toggle-icon' },
    content: { class: 'hb-panel-content' },
    footer: { class: 'hb-panel-footer' }
  },
  
  // Dialog component mapping
  dialog: {
    root: { class: 'hb-dialog' },
    mask: { class: 'hb-dialog-mask' },
    header: { class: 'hb-dialog-header' },
    headerTitle: { class: 'hb-dialog-header-title' },
    headerIcon: { class: 'hb-dialog-header-icon' },
    closeButton: { class: 'hb-dialog-close-button' },
    closeIcon: { class: 'hb-dialog-close-icon' },
    content: { class: 'hb-dialog-content' },
    footer: { class: 'hb-dialog-footer' },
    resizer: { class: 'hb-dialog-resizer' },
    resizerHandle: { class: 'hb-dialog-resizer-handle' }
  },
  
  // InputNumber component mapping
  inputnumber: {
    root: { class: 'hb-inputnumber' },
    input: { class: 'hb-inputnumber-input' },
    buttonGroup: { class: 'hb-inputnumber-button-group' },
    upButton: { class: 'hb-inputnumber-up-button' },
    downButton: { class: 'hb-inputnumber-down-button' },
    upIcon: { class: 'hb-inputnumber-up-icon' },
    downIcon: { class: 'hb-inputnumber-down-icon' }
  },
  
  // Checkbox component mapping
  checkbox: {
    root: { class: 'hb-checkbox' },
    box: { class: 'hb-checkbox-box' },
    input: { class: 'hb-checkbox-input' },
    icon: { class: 'hb-checkbox-icon' },
    label: { class: 'hb-checkbox-label' }
  },
  
  // RadioButton component mapping
  radiobutton: {
    root: { class: 'hb-radiobutton' },
    box: { class: 'hb-radiobutton-box' },
    input: { class: 'hb-radiobutton-input' },
    icon: { class: 'hb-radiobutton-icon' },
    label: { class: 'hb-radiobutton-label' }
  },
  
  // Textarea component mapping
  textarea: {
    root: { class: 'hb-textarea' }
  },
  
  // Password component mapping
  password: {
    root: { class: 'hb-password' },
    input: { class: 'hb-password-input' },
    panel: { class: 'hb-password-panel' },
    meter: { class: 'hb-password-meter' },
    info: { class: 'hb-password-info' },
    toggleButton: { class: 'hb-password-toggle-button' },
    toggleIcon: { class: 'hb-password-toggle-icon' }
  },
  
  // MultiSelect component mapping
  multiselect: {
    root: { class: 'hb-multiselect' },
    trigger: { class: 'hb-multiselect-trigger' },
    label: { class: 'hb-multiselect-label' },
    panel: { class: 'hb-multiselect-panel' },
    itemsWrapper: { class: 'hb-multiselect-items-wrapper' },
    item: { class: 'hb-multiselect-item' },
    itemLabel: { class: 'hb-multiselect-item-label' },
    itemIcon: { class: 'hb-multiselect-item-icon' },
    itemGroup: { class: 'hb-multiselect-item-group' },
    itemGroupLabel: { class: 'hb-multiselect-item-group-label' },
    header: { class: 'hb-multiselect-header' },
    filterContainer: { class: 'hb-multiselect-filter-container' },
    filterInput: { class: 'hb-multiselect-filter-input' },
    filterIcon: { class: 'hb-multiselect-filter-icon' },
    closeButton: { class: 'hb-multiselect-close-button' },
    closeIcon: { class: 'hb-multiselect-close-icon' },
    token: { class: 'hb-multiselect-token' },
    tokenLabel: { class: 'hb-multiselect-token-label' },
    tokenIcon: { class: 'hb-multiselect-token-icon' }
  },
  
  // Dropdown component mapping (for backward compatibility)
  dropdown: {
    root: { class: 'hb-dropdown' },
    trigger: { class: 'hb-dropdown-trigger' },
    label: { class: 'hb-dropdown-label' },
    panel: { class: 'hb-dropdown-panel' },
    itemsWrapper: { class: 'hb-dropdown-items-wrapper' },
    item: { class: 'hb-dropdown-item' },
    itemLabel: { class: 'hb-dropdown-item-label' },
    itemIcon: { class: 'hb-dropdown-item-icon' },
    itemGroup: { class: 'hb-dropdown-item-group' },
    itemGroupLabel: { class: 'hb-dropdown-item-group-label' },
    header: { class: 'hb-dropdown-header' },
    filterContainer: { class: 'hb-dropdown-filter-container' },
    filterInput: { class: 'hb-dropdown-filter-input' },
    filterIcon: { class: 'hb-dropdown-filter-icon' },
    closeButton: { class: 'hb-dropdown-close-button' },
    closeIcon: { class: 'hb-dropdown-close-icon' }
  },
  
  // Menu component mapping
  menu: {
    root: { class: 'hb-menu' },
    list: { class: 'hb-menu-list' },
    item: { class: 'hb-menu-item' },
    itemLink: { class: 'hb-menu-item-link' },
    itemText: { class: 'hb-menu-item-text' },
    itemIcon: { class: 'hb-menu-item-icon' },
    separator: { class: 'hb-menu-separator' },
    submenuHeader: { class: 'hb-menu-submenu-header' },
    submenuIcon: { class: 'hb-menu-submenu-icon' },
    submenuList: { class: 'hb-menu-submenu-list' }
  },
  
  // TabView component mapping
  tabview: {
    root: { class: 'hb-tabview' },
    nav: { class: 'hb-tabview-nav' },
    navList: { class: 'hb-tabview-nav-list' },
    navItem: { class: 'hb-tabview-nav-item' },
    navLink: { class: 'hb-tabview-nav-link' },
    navText: { class: 'hb-tabview-nav-text' },
    navIcon: { class: 'hb-tabview-nav-icon' },
    closeIcon: { class: 'hb-tabview-close-icon' },
    inkbar: { class: 'hb-tabview-inkbar' },
    content: { class: 'hb-tabview-content' },
    panel: { class: 'hb-tabview-panel' }
  },
  
  // Accordion component mapping
  accordion: {
    root: { class: 'hb-accordion' },
    tab: { class: 'hb-accordion-tab' },
    header: { class: 'hb-accordion-header' },
    headerLink: { class: 'hb-accordion-header-link' },
    headerText: { class: 'hb-accordion-header-text' },
    headerIcon: { class: 'hb-accordion-header-icon' },
    toggleIcon: { class: 'hb-accordion-toggle-icon' },
    content: { class: 'hb-accordion-content' },
    panel: { class: 'hb-accordion-panel' }
  },
  
  // Card component mapping
  card: {
    root: { class: 'hb-card' },
    header: { class: 'hb-card-header' },
    title: { class: 'hb-card-title' },
    subtitle: { class: 'hb-card-subtitle' },
    content: { class: 'hb-card-content' },
    footer: { class: 'hb-card-footer' }
  },
  
  // Divider component mapping
  divider: {
    root: { class: 'hb-divider' },
    content: { class: 'hb-divider-content' }
  },
  
  // Tooltip component mapping
  tooltip: {
    root: { class: 'hb-tooltip' },
    text: { class: 'hb-tooltip-text' },
    arrow: { class: 'hb-tooltip-arrow' }
  },
  
  // OverlayPanel component mapping
  overlaypanel: {
    root: { class: 'hb-overlaypanel' },
    content: { class: 'hb-overlaypanel-content' },
    closeButton: { class: 'hb-overlaypanel-close-button' },
    closeIcon: { class: 'hb-overlaypanel-close-icon' }
  },
  
  // Sidebar component mapping
  sidebar: {
    root: { class: 'hb-sidebar' },
    header: { class: 'hb-sidebar-header' },
    headerContent: { class: 'hb-sidebar-header-content' },
    headerTitle: { class: 'hb-sidebar-header-title' },
    closeButton: { class: 'hb-sidebar-close-button' },
    closeIcon: { class: 'hb-sidebar-close-icon' },
    content: { class: 'hb-sidebar-content' },
    mask: { class: 'hb-sidebar-mask' }
  },
  
  // Toast component mapping
  toast: {
    root: { class: 'hb-toast' },
    message: { class: 'hb-toast-message' },
    messageText: { class: 'hb-toast-message-text' },
    messageIcon: { class: 'hb-toast-message-icon' },
    messageCloseButton: { class: 'hb-toast-message-close-button' },
    messageCloseIcon: { class: 'hb-toast-message-close-icon' },
    container: { class: 'hb-toast-container' }
  },
  
  // ConfirmDialog component mapping
  confirmdialog: {
    root: { class: 'hb-confirmdialog' },
    mask: { class: 'hb-confirmdialog-mask' },
    header: { class: 'hb-confirmdialog-header' },
    headerTitle: { class: 'hb-confirmdialog-header-title' },
    headerIcon: { class: 'hb-confirmdialog-header-icon' },
    closeButton: { class: 'hb-confirmdialog-close-button' },
    closeIcon: { class: 'hb-confirmdialog-close-icon' },
    content: { class: 'hb-confirmdialog-content' },
    message: { class: 'hb-confirmdialog-message' },
    icon: { class: 'hb-confirmdialog-icon' },
    footer: { class: 'hb-confirmdialog-footer' },
    acceptButton: { class: 'hb-confirmdialog-accept-button' },
    rejectButton: { class: 'hb-confirmdialog-reject-button' }
  },
  
  // FileUpload component mapping
  fileupload: {
    root: { class: 'hb-fileupload' },
    input: { class: 'hb-fileupload-input' },
    buttonbar: { class: 'hb-fileupload-buttonbar' },
    chooseButton: { class: 'hb-fileupload-choose-button' },
    uploadButton: { class: 'hb-fileupload-upload-button' },
    cancelButton: { class: 'hb-fileupload-cancel-button' },
    content: { class: 'hb-fileupload-content' },
    files: { class: 'hb-fileupload-files' },
    file: { class: 'hb-fileupload-file' },
    fileName: { class: 'hb-fileupload-file-name' },
    fileSize: { class: 'hb-fileupload-file-size' },
    fileRemove: { class: 'hb-fileupload-file-remove' },
    progressBar: { class: 'hb-fileupload-progress-bar' },
    progressBarValue: { class: 'hb-fileupload-progress-bar-value' }
  },
  
  // Rating component mapping
  rating: {
    root: { class: 'hb-rating' },
    item: { class: 'hb-rating-item' },
    itemOnIcon: { class: 'hb-rating-item-on-icon' },
    itemOffIcon: { class: 'hb-rating-item-off-icon' },
    itemHalfIcon: { class: 'hb-rating-item-half-icon' },
    cancelItem: { class: 'hb-rating-cancel-item' },
    cancelIcon: { class: 'hb-rating-cancel-icon' }
  },
  
  // Slider component mapping
  slider: {
    root: { class: 'hb-slider' },
    range: { class: 'hb-slider-range' },
    handle: { class: 'hb-slider-handle' },
    startHandle: { class: 'hb-slider-start-handle' },
    endHandle: { class: 'hb-slider-end-handle' },
    value: { class: 'hb-slider-value' }
  },
  
  // ToggleButton component mapping
  togglebutton: {
    root: { class: 'hb-togglebutton' },
    label: { class: 'hb-togglebutton-label' },
    icon: { class: 'hb-togglebutton-icon' }
  },
  
  // TriStateCheckbox component mapping
  tristatecheckbox: {
    root: { class: 'hb-tristatecheckbox' },
    box: { class: 'hb-tristatecheckbox-box' },
    input: { class: 'hb-tristatecheckbox-input' },
    icon: { class: 'hb-tristatecheckbox-icon' },
    label: { class: 'hb-tristatecheckbox-label' }
  },
  
  // Tree component mapping
  tree: {
    root: { class: 'hb-tree' },
    container: { class: 'hb-tree-container' },
    node: { class: 'hb-tree-node' },
    content: { class: 'hb-tree-content' },
    label: { class: 'hb-tree-label' },
    icon: { class: 'hb-tree-icon' },
    toggler: { class: 'hb-tree-toggler' },
    togglerIcon: { class: 'hb-tree-toggler-icon' },
    children: { class: 'hb-tree-children' },
    loadingIcon: { class: 'hb-tree-loading-icon' }
  },
  
  // TreeTable component mapping
  treetable: {
    root: { class: 'hb-treetable' },
    header: { class: 'hb-treetable-header' },
    headerRow: { class: 'hb-treetable-header-row' },
    headerCell: { class: 'hb-treetable-header-cell' },
    body: { class: 'hb-treetable-body' },
    bodyRow: { class: 'hb-treetable-row' },
    bodyCell: { class: 'hb-treetable-body-cell' },
    footer: { class: 'hb-treetable-footer' },
    footerRow: { class: 'hb-treetable-footer-row' },
    footerCell: { class: 'hb-treetable-footer-cell' },
    table: { class: 'hb-treetable-table' },
    thead: { class: 'hb-treetable-thead' },
    tbody: { class: 'hb-treetable-tbody' },
    tfoot: { class: 'hb-treetable-tfoot' },
    loadingOverlay: { class: 'hb-treetable-loading-overlay' },
    loadingIcon: { class: 'hb-treetable-loading-icon' },
    emptyMessage: { class: 'hb-treetable-empty-message' },
    paginator: { class: 'hb-paginator' }
  }
}

/**
 * Helper function to merge custom PassThrough configuration with default
 * @param {Object} customConfig - Custom PassThrough configuration to merge
 * @returns {Object} Merged PassThrough configuration
 */
export function mergePassthroughConfig(customConfig = {}) {
  return {
    ...passthroughConfig,
    ...customConfig
  }
}

/**
 * Helper function to get PassThrough configuration for specific components
 * @param {string|Array} components - Component name(s) to get config for
 * @returns {Object} PassThrough configuration for specified components
 */
export function getPassthroughConfig(components) {
  if (typeof components === 'string') {
    components = [components]
  }
  
  const config = {}
  components.forEach(component => {
    if (passthroughConfig[component]) {
      config[component] = passthroughConfig[component]
    }
  })
  
  return config
}

export default passthroughConfig 