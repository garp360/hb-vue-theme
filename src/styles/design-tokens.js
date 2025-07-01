// =============================================================================
// HB VUE THEME - DESIGN TOKENS FOR PRIMEVUE 4
// =============================================================================
// This file defines our custom design tokens using PrimeVue 4's new design token system
// These tokens can be used to create installable presets

export const hbDesignTokens = {
  // =============================================================================
  // COLOR TOKENS
  // =============================================================================
  
  // Primary Colors
  '--hb-primary-50': '#eff6ff',
  '--hb-primary-100': '#dbeafe',
  '--hb-primary-200': '#bfdbfe',
  '--hb-primary-300': '#93c5fd',
  '--hb-primary-400': '#60a5fa',
  '--hb-primary-500': '#3b82f6',
  '--hb-primary-600': '#2563eb',
  '--hb-primary-700': '#1d4ed8',
  '--hb-primary-800': '#1e40af',
  '--hb-primary-900': '#1e3a8a',
  
  // Secondary Colors
  '--hb-secondary-50': '#f8fafc',
  '--hb-secondary-100': '#f1f5f9',
  '--hb-secondary-200': '#e2e8f0',
  '--hb-secondary-300': '#cbd5e1',
  '--hb-secondary-400': '#94a3b8',
  '--hb-secondary-500': '#64748b',
  '--hb-secondary-600': '#475569',
  '--hb-secondary-700': '#334155',
  '--hb-secondary-800': '#1e293b',
  '--hb-secondary-900': '#0f172a',
  
  // Success Colors
  '--hb-success-50': '#f0fdf4',
  '--hb-success-100': '#dcfce7',
  '--hb-success-200': '#bbf7d0',
  '--hb-success-300': '#86efac',
  '--hb-success-400': '#4ade80',
  '--hb-success-500': '#22c55e',
  '--hb-success-600': '#16a34a',
  '--hb-success-700': '#15803d',
  '--hb-success-800': '#166534',
  '--hb-success-900': '#14532d',
  
  // Warning Colors
  '--hb-warning-50': '#fffbeb',
  '--hb-warning-100': '#fef3c7',
  '--hb-warning-200': '#fde68a',
  '--hb-warning-300': '#fcd34d',
  '--hb-warning-400': '#fbbf24',
  '--hb-warning-500': '#f59e0b',
  '--hb-warning-600': '#d97706',
  '--hb-warning-700': '#b45309',
  '--hb-warning-800': '#92400e',
  '--hb-warning-900': '#78350f',
  
  // Danger Colors
  '--hb-danger-50': '#fef2f2',
  '--hb-danger-100': '#fee2e2',
  '--hb-danger-200': '#fecaca',
  '--hb-danger-300': '#fca5a5',
  '--hb-danger-400': '#f87171',
  '--hb-danger-500': '#ef4444',
  '--hb-danger-600': '#dc2626',
  '--hb-danger-700': '#b91c1c',
  '--hb-danger-800': '#991b1b',
  '--hb-danger-900': '#7f1d1d',
  
  // Info Colors
  '--hb-info-50': '#f0f9ff',
  '--hb-info-100': '#e0f2fe',
  '--hb-info-200': '#bae6fd',
  '--hb-info-300': '#7dd3fc',
  '--hb-info-400': '#38bdf8',
  '--hb-info-500': '#0ea5e9',
  '--hb-info-600': '#0284c7',
  '--hb-info-700': '#0369a1',
  '--hb-info-800': '#075985',
  '--hb-info-900': '#0c4a6e',
  
  // Neutral Colors
  '--hb-neutral-50': '#fafafa',
  '--hb-neutral-100': '#f5f5f5',
  '--hb-neutral-200': '#e5e5e5',
  '--hb-neutral-300': '#d4d4d4',
  '--hb-neutral-400': '#a3a3a3',
  '--hb-neutral-500': '#737373',
  '--hb-neutral-600': '#525252',
  '--hb-neutral-700': '#404040',
  '--hb-neutral-800': '#262626',
  '--hb-neutral-900': '#171717',
  
  // =============================================================================
  // SEMANTIC COLOR MAPPINGS
  // =============================================================================
  
  // Primary theme colors
  '--hb-primary': 'var(--hb-primary-500)',
  '--hb-primary-light': 'var(--hb-primary-400)',
  '--hb-primary-dark': 'var(--hb-primary-600)',
  '--hb-primary-hover': 'var(--hb-primary-600)',
  '--hb-primary-active': 'var(--hb-primary-700)',
  
  // Secondary theme colors
  '--hb-secondary': 'var(--hb-secondary-500)',
  '--hb-secondary-light': 'var(--hb-secondary-400)',
  '--hb-secondary-dark': 'var(--hb-secondary-600)',
  
  // Status colors
  '--hb-success': 'var(--hb-success-500)',
  '--hb-warning': 'var(--hb-warning-500)',
  '--hb-danger': 'var(--hb-danger-500)',
  '--hb-info': 'var(--hb-info-500)',
  
  // Text colors
  '--hb-text-primary': 'var(--hb-neutral-900)',
  '--hb-text-secondary': 'var(--hb-neutral-600)',
  '--hb-text-muted': 'var(--hb-neutral-500)',
  '--hb-text-disabled': 'var(--hb-neutral-400)',
  '--hb-text-inverse': 'var(--hb-neutral-50)',
  
  // Background colors
  '--hb-bg-primary': '#ffffff',
  '--hb-bg-secondary': 'var(--hb-neutral-50)',
  '--hb-bg-tertiary': 'var(--hb-neutral-100)',
  '--hb-bg-overlay': 'rgba(0, 0, 0, 0.5)',
  
  // Border colors
  '--hb-border-light': 'var(--hb-neutral-200)',
  '--hb-border-medium': 'var(--hb-neutral-300)',
  '--hb-border-dark': 'var(--hb-neutral-400)',
  '--hb-border-focus': 'var(--hb-primary-500)',
  
  // =============================================================================
  // TYPOGRAPHY TOKENS
  // =============================================================================
  
  // Font families
  '--hb-font-family-primary': "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  '--hb-font-family-mono': "'Courier New', Courier, monospace",
  
  // Font sizes
  '--hb-font-size-xs': '0.75rem',
  '--hb-font-size-sm': '0.875rem',
  '--hb-font-size-base': '1rem',
  '--hb-font-size-lg': '1.125rem',
  '--hb-font-size-xl': '1.25rem',
  '--hb-font-size-2xl': '1.5rem',
  '--hb-font-size-3xl': '1.875rem',
  '--hb-font-size-4xl': '2.25rem',
  
  // Font weights
  '--hb-font-weight-light': '300',
  '--hb-font-weight-normal': '400',
  '--hb-font-weight-medium': '500',
  '--hb-font-weight-semibold': '600',
  '--hb-font-weight-bold': '700',
  
  // Line heights
  '--hb-line-height-tight': '1.25',
  '--hb-line-height-normal': '1.5',
  '--hb-line-height-relaxed': '1.75',
  
  // =============================================================================
  // SPACING TOKENS
  // =============================================================================
  
  // Spacing scale (based on 4px grid)
  '--hb-spacing-0': '0',
  '--hb-spacing-1': '0.25rem',
  '--hb-spacing-2': '0.5rem',
  '--hb-spacing-3': '0.75rem',
  '--hb-spacing-4': '1rem',
  '--hb-spacing-5': '1.25rem',
  '--hb-spacing-6': '1.5rem',
  '--hb-spacing-8': '2rem',
  '--hb-spacing-10': '2.5rem',
  '--hb-spacing-12': '3rem',
  '--hb-spacing-16': '4rem',
  '--hb-spacing-20': '5rem',
  '--hb-spacing-24': '6rem',
  
  // =============================================================================
  // BORDER RADIUS TOKENS
  // =============================================================================
  
  '--hb-border-radius-none': '0',
  '--hb-border-radius-sm': '0.125rem',
  '--hb-border-radius-base': '0.25rem',
  '--hb-border-radius-md': '0.375rem',
  '--hb-border-radius-lg': '0.5rem',
  '--hb-border-radius-xl': '0.75rem',
  '--hb-border-radius-2xl': '1rem',
  '--hb-border-radius-full': '9999px',
  
  // =============================================================================
  // SHADOW TOKENS
  // =============================================================================
  
  '--hb-shadow-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  '--hb-shadow-base': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  '--hb-shadow-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  '--hb-shadow-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  '--hb-shadow-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  
  // =============================================================================
  // TRANSITION TOKENS
  // =============================================================================
  
  '--hb-transition-fast': '150ms ease-in-out',
  '--hb-transition-base': '250ms ease-in-out',
  '--hb-transition-slow': '350ms ease-in-out',
  
  // =============================================================================
  // Z-INDEX TOKENS
  // =============================================================================
  
  '--hb-z-index-dropdown': '1000',
  '--hb-z-index-sticky': '1020',
  '--hb-z-index-fixed': '1030',
  '--hb-z-index-modal-backdrop': '1040',
  '--hb-z-index-modal': '1050',
  '--hb-z-index-popover': '1060',
  '--hb-z-index-tooltip': '1070',
  
  // =============================================================================
  // BREAKPOINT TOKENS
  // =============================================================================
  
  '--hb-breakpoint-sm': '640px',
  '--hb-breakpoint-md': '768px',
  '--hb-breakpoint-lg': '1024px',
  '--hb-breakpoint-xl': '1280px',
  '--hb-breakpoint-2xl': '1536px'
}

// =============================================================================
// PRIMEVUE 4 DESIGN TOKEN MAPPINGS
// =============================================================================
// These map our custom tokens to PrimeVue 4's expected design token names

export const hbPrimeVueTokens = {
  // Color tokens for PrimeVue components
  '--primary-color': 'var(--hb-primary)',
  '--primary-color-text': 'var(--hb-text-inverse)',
  '--surface-ground': 'var(--hb-bg-secondary)',
  '--surface-section': 'var(--hb-bg-primary)',
  '--surface-card': 'var(--hb-bg-primary)',
  '--surface-overlay': 'var(--hb-bg-primary)',
  '--surface-border': 'var(--hb-border-light)',
  '--surface-hover': 'var(--hb-bg-secondary)',
  '--focus-ring': '0 0 0 3px rgba(59, 130, 246, 0.1)',
  '--maskbg': 'var(--hb-bg-overlay)',
  
  // Text colors
  '--text-color': 'var(--hb-text-primary)',
  '--text-color-secondary': 'var(--hb-text-secondary)',
  '--text-muted-color': 'var(--hb-text-muted)',
  
  // Border radius
  '--border-radius': 'var(--hb-border-radius-md)',
  '--border-radius-sm': 'var(--hb-border-radius-sm)',
  '--border-radius-lg': 'var(--hb-border-radius-lg)',
  
  // Spacing
  '--content-padding': 'var(--hb-spacing-4)',
  '--inline-spacing': 'var(--hb-spacing-2)',
  
  // Transitions
  '--transition-duration': 'var(--hb-transition-base)',
  
  // Font
  '--font-family': 'var(--hb-font-family-primary)',
  '--font-size': 'var(--hb-font-size-base)',
  '--font-weight': 'var(--hb-font-weight-normal)',
  '--font-weight-bold': 'var(--hb-font-weight-bold)',
  
  // Shadows
  '--shadow-1': 'var(--hb-shadow-sm)',
  '--shadow-2': 'var(--hb-shadow-base)',
  '--shadow-3': 'var(--hb-shadow-md)',
  '--shadow-4': 'var(--hb-shadow-lg)',
  '--shadow-5': 'var(--hb-shadow-xl)'
}

// =============================================================================
// COMPONENT-SPECIFIC DESIGN TOKENS
// =============================================================================
// Comprehensive tokens for all PrimeVue 4 components

export const hbComponentTokens = {
  // =============================================================================
  // FORM COMPONENTS
  // =============================================================================
  
  // Button Component
  '--button-padding': 'var(--hb-spacing-3) var(--hb-spacing-4)',
  '--button-border-radius': 'var(--hb-border-radius-md)',
  '--button-font-weight': 'var(--hb-font-weight-medium)',
  '--button-transition': 'var(--hb-transition-base)',
  '--button-primary-bg': 'var(--hb-primary)',
  '--button-primary-color': 'var(--hb-text-inverse)',
  '--button-primary-hover-bg': 'var(--hb-primary-hover)',
  '--button-secondary-bg': 'var(--hb-bg-primary)',
  '--button-secondary-color': 'var(--hb-text-primary)',
  '--button-secondary-border': 'var(--hb-border-medium)',
  '--button-success-bg': 'var(--hb-success)',
  '--button-warning-bg': 'var(--hb-warning)',
  '--button-danger-bg': 'var(--hb-danger)',
  '--button-info-bg': 'var(--hb-info)',
  
  // Input Components (InputText, InputNumber, Password, etc.)
  '--input-padding': 'var(--hb-spacing-3) var(--hb-spacing-4)',
  '--input-border-radius': 'var(--hb-border-radius-md)',
  '--input-border-color': 'var(--hb-border-medium)',
  '--input-focus-border-color': 'var(--hb-border-focus)',
  '--input-focus-box-shadow': 'var(--hb-shadow-sm)',
  '--input-bg': 'var(--hb-bg-primary)',
  '--input-color': 'var(--hb-text-primary)',
  '--input-placeholder-color': 'var(--hb-text-muted)',
  '--input-disabled-bg': 'var(--hb-bg-tertiary)',
  '--input-disabled-color': 'var(--hb-text-disabled)',
  
  // Select Component (replaces Dropdown)
  '--select-padding': 'var(--hb-spacing-3) var(--hb-spacing-4)',
  '--select-border-radius': 'var(--hb-border-radius-md)',
  '--select-bg': 'var(--hb-bg-primary)',
  '--select-border-color': 'var(--hb-border-medium)',
  '--select-focus-border-color': 'var(--hb-border-focus)',
  '--select-hover-bg': 'var(--hb-bg-secondary)',
  '--select-item-padding': 'var(--hb-spacing-2) var(--hb-spacing-4)',
  '--select-item-hover-bg': 'var(--hb-bg-secondary)',
  '--select-item-selected-bg': 'var(--hb-primary-50)',
  '--select-item-selected-color': 'var(--hb-primary)',
  '--select-trigger-bg': 'var(--hb-bg-primary)',
  '--select-trigger-border': '1px solid var(--hb-border-medium)',
  '--select-trigger-border-radius': 'var(--hb-border-radius-md)',
  '--select-trigger-padding': 'var(--hb-spacing-3) var(--hb-spacing-4)',
  '--select-trigger-hover-bg': 'var(--hb-bg-secondary)',
  '--select-trigger-focus-border-color': 'var(--hb-border-focus)',
  '--select-trigger-focus-box-shadow': 'var(--hb-shadow-sm)',
  
  // MultiSelect Component
  '--multiselect-padding': 'var(--hb-spacing-2) var(--hb-spacing-4)',
  '--multiselect-border-radius': 'var(--hb-border-radius-md)',
  '--multiselect-token-bg': 'var(--hb-primary-50)',
  '--multiselect-token-color': 'var(--hb-primary)',
  '--multiselect-token-border-radius': 'var(--hb-border-radius-sm)',
  '--multiselect-token-padding': 'var(--hb-spacing-1) var(--hb-spacing-2)',
  
  // Calendar Component
  '--calendar-bg': 'var(--hb-bg-primary)',
  '--calendar-border-radius': 'var(--hb-border-radius-lg)',
  '--calendar-header-bg': 'var(--hb-bg-secondary)',
  '--calendar-day-hover-bg': 'var(--hb-bg-secondary)',
  '--calendar-day-selected-bg': 'var(--hb-primary)',
  '--calendar-day-selected-color': 'var(--hb-text-inverse)',
  '--calendar-day-today-bg': 'var(--hb-primary-50)',
  '--calendar-day-today-color': 'var(--hb-primary)',
  
  // Checkbox Component
  '--checkbox-size': '1.25rem',
  '--checkbox-border-radius': 'var(--hb-border-radius-sm)',
  '--checkbox-border-color': 'var(--hb-border-medium)',
  '--checkbox-checked-bg': 'var(--hb-primary)',
  '--checkbox-checked-border-color': 'var(--hb-primary)',
  '--checkbox-hover-border-color': 'var(--hb-border-dark)',
  '--checkbox-focus-border-color': 'var(--hb-border-focus)',
  
  // RadioButton Component
  '--radiobutton-size': '1.25rem',
  '--radiobutton-border-color': 'var(--hb-border-medium)',
  '--radiobutton-checked-bg': 'var(--hb-primary)',
  '--radiobutton-checked-border-color': 'var(--hb-primary)',
  '--radiobutton-hover-border-color': 'var(--hb-border-dark)',
  '--radiobutton-focus-border-color': 'var(--hb-border-focus)',
  
  // Switch Component
  '--switch-width': '3rem',
  '--switch-height': '1.5rem',
  '--switch-border-radius': 'var(--hb-border-radius-full)',
  '--switch-bg': 'var(--hb-border-medium)',
  '--switch-checked-bg': 'var(--hb-primary)',
  '--switch-thumb-size': '1.125rem',
  '--switch-thumb-bg': 'var(--hb-bg-primary)',
  '--switch-transition': 'var(--hb-transition-base)',
  
  // Slider Component
  '--slider-track-bg': 'var(--hb-border-light)',
  '--slider-track-height': '0.25rem',
  '--slider-track-border-radius': 'var(--hb-border-radius-full)',
  '--slider-range-bg': 'var(--hb-primary)',
  '--slider-handle-size': '1.25rem',
  '--slider-handle-bg': 'var(--hb-bg-primary)',
  '--slider-handle-border': '2px solid var(--hb-primary)',
  '--slider-handle-border-radius': 'var(--hb-border-radius-full)',
  
  // =============================================================================
  // DATA DISPLAY COMPONENTS
  // =============================================================================
  
  // DataTable Component
  '--datatable-bg': 'var(--hb-bg-primary)',
  '--datatable-border-radius': 'var(--hb-border-radius-lg)',
  '--datatable-header-bg': 'var(--hb-bg-secondary)',
  '--datatable-header-color': 'var(--hb-text-primary)',
  '--datatable-header-font-weight': 'var(--hb-font-weight-semibold)',
  '--datatable-row-hover-bg': 'var(--hb-bg-secondary)',
  '--datatable-row-selected-bg': 'var(--hb-primary-50)',
  '--datatable-border-color': 'var(--hb-border-light)',
  '--datatable-pagination-bg': 'var(--hb-bg-secondary)',
  '--datatable-pagination-border-color': 'var(--hb-border-light)',
  
  // Tree Component
  '--tree-bg': 'var(--hb-bg-primary)',
  '--tree-border-radius': 'var(--hb-border-radius-md)',
  '--tree-node-padding': 'var(--hb-spacing-2) var(--hb-spacing-4)',
  '--tree-node-hover-bg': 'var(--hb-bg-secondary)',
  '--tree-node-selected-bg': 'var(--hb-primary-50)',
  '--tree-node-selected-color': 'var(--hb-primary)',
  '--tree-toggle-icon-color': 'var(--hb-text-secondary)',
  
  // TreeTable Component
  '--treetable-bg': 'var(--hb-bg-primary)',
  '--treetable-border-radius': 'var(--hb-border-radius-lg)',
  '--treetable-header-bg': 'var(--hb-bg-secondary)',
  '--treetable-row-hover-bg': 'var(--hb-bg-secondary)',
  '--treetable-row-selected-bg': 'var(--hb-primary-50)',
  '--treetable-border-color': 'var(--hb-border-light)',
  
  // =============================================================================
  // PANEL COMPONENTS
  // =============================================================================
  
  // Panel Component
  '--panel-bg': 'var(--hb-bg-primary)',
  '--panel-border-radius': 'var(--hb-border-radius-lg)',
  '--panel-header-bg': 'var(--hb-bg-secondary)',
  '--panel-header-color': 'var(--hb-text-primary)',
  '--panel-header-font-weight': 'var(--hb-font-weight-semibold)',
  '--panel-header-padding': 'var(--hb-spacing-4)',
  '--panel-content-padding': 'var(--hb-spacing-4)',
  '--panel-border-color': 'var(--hb-border-light)',
  '--panel-shadow': 'var(--hb-shadow-base)',
  
  // Accordion Component
  '--accordion-bg': 'var(--hb-bg-primary)',
  '--accordion-border-radius': 'var(--hb-border-radius-lg)',
  '--accordion-header-bg': 'var(--hb-bg-secondary)',
  '--accordion-header-color': 'var(--hb-text-primary)',
  '--accordion-header-hover-bg': 'var(--hb-bg-tertiary)',
  '--accordion-header-padding': 'var(--hb-spacing-4)',
  '--accordion-content-padding': 'var(--hb-spacing-4)',
  '--accordion-border-color': 'var(--hb-border-light)',
  
  // TabView Component
  '--tabview-bg': 'var(--hb-bg-primary)',
  '--tabview-border-radius': 'var(--hb-border-radius-lg)',
  '--tabview-nav-bg': 'var(--hb-bg-secondary)',
  '--tabview-nav-border-color': 'var(--hb-border-light)',
  '--tabview-nav-item-padding': 'var(--hb-spacing-3) var(--hb-spacing-4)',
  '--tabview-nav-item-color': 'var(--hb-text-secondary)',
  '--tabview-nav-item-hover-bg': 'var(--hb-bg-tertiary)',
  '--tabview-nav-item-active-bg': 'var(--hb-bg-primary)',
  '--tabview-nav-item-active-color': 'var(--hb-primary)',
  '--tabview-content-padding': 'var(--hb-spacing-4)',
  
  // Card Component
  '--card-bg': 'var(--hb-bg-primary)',
  '--card-border-radius': 'var(--hb-border-radius-lg)',
  '--card-header-bg': 'var(--hb-bg-secondary)',
  '--card-header-color': 'var(--hb-text-primary)',
  '--card-header-padding': 'var(--hb-spacing-4)',
  '--card-content-padding': 'var(--hb-spacing-4)',
  '--card-footer-padding': 'var(--hb-spacing-4)',
  '--card-border-color': 'var(--hb-border-light)',
  '--card-shadow': 'var(--hb-shadow-base)',
  
  // =============================================================================
  // OVERLAY COMPONENTS
  // =============================================================================
  
  // Dialog Component
  '--dialog-bg': 'var(--hb-bg-primary)',
  '--dialog-border-radius': 'var(--hb-border-radius-lg)',
  '--dialog-header-bg': 'var(--hb-bg-secondary)',
  '--dialog-header-color': 'var(--hb-text-primary)',
  '--dialog-header-padding': 'var(--hb-spacing-4)',
  '--dialog-content-padding': 'var(--hb-spacing-4)',
  '--dialog-footer-padding': 'var(--hb-spacing-4)',
  '--dialog-shadow': 'var(--hb-shadow-xl)',
  '--dialog-mask-bg': 'var(--hb-bg-overlay)',
  
  // Sidebar Component
  '--sidebar-bg': 'var(--hb-bg-primary)',
  '--sidebar-width': '20rem',
  '--sidebar-header-bg': 'var(--hb-bg-secondary)',
  '--sidebar-header-color': 'var(--hb-text-primary)',
  '--sidebar-header-padding': 'var(--hb-spacing-4)',
  '--sidebar-content-padding': 'var(--hb-spacing-4)',
  '--sidebar-shadow': 'var(--hb-shadow-xl)',
  '--sidebar-mask-bg': 'var(--hb-bg-overlay)',
  
  // OverlayPanel Component
  '--overlaypanel-bg': 'var(--hb-bg-primary)',
  '--overlaypanel-border-radius': 'var(--hb-border-radius-lg)',
  '--overlaypanel-padding': 'var(--hb-spacing-4)',
  '--overlaypanel-shadow': 'var(--hb-shadow-lg)',
  '--overlaypanel-arrow-size': '0.5rem',
  
  // Tooltip Component
  '--tooltip-bg': 'var(--hb-neutral-800)',
  '--tooltip-color': 'var(--hb-text-inverse)',
  '--tooltip-border-radius': 'var(--hb-border-radius-md)',
  '--tooltip-padding': 'var(--hb-spacing-2) var(--hb-spacing-3)',
  '--tooltip-font-size': 'var(--hb-font-size-sm)',
  '--tooltip-shadow': 'var(--hb-shadow-md)',
  
  // =============================================================================
  // FILE COMPONENTS
  // =============================================================================
  
  // FileUpload Component
  '--fileupload-bg': 'var(--hb-bg-primary)',
  '--fileupload-border-radius': 'var(--hb-border-radius-lg)',
  '--fileupload-border-color': 'var(--hb-border-medium)',
  '--fileupload-border-style': 'dashed',
  '--fileupload-border-width': '2px',
  '--fileupload-padding': 'var(--hb-spacing-8)',
  '--fileupload-hover-border-color': 'var(--hb-primary)',
  '--fileupload-hover-bg': 'var(--hb-primary-50)',
  
  // =============================================================================
  // MENU COMPONENTS
  // =============================================================================
  
  // Menu Component
  '--menu-bg': 'var(--hb-bg-primary)',
  '--menu-border-radius': 'var(--hb-border-radius-md)',
  '--menu-padding': 'var(--hb-spacing-2)',
  '--menu-item-padding': 'var(--hb-spacing-3) var(--hb-spacing-4)',
  '--menu-item-color': 'var(--hb-text-primary)',
  '--menu-item-hover-bg': 'var(--hb-bg-secondary)',
  '--menu-item-active-bg': 'var(--hb-primary-50)',
  '--menu-item-active-color': 'var(--hb-primary)',
  '--menu-shadow': 'var(--hb-shadow-lg)',
  
  // Menubar Component
  '--menubar-bg': 'var(--hb-bg-primary)',
  '--menubar-border-radius': 'var(--hb-border-radius-md)',
  '--menubar-padding': 'var(--hb-spacing-2) var(--hb-spacing-4)',
  '--menubar-item-padding': 'var(--hb-spacing-3) var(--hb-spacing-4)',
  '--menubar-item-color': 'var(--hb-text-primary)',
  '--menubar-item-hover-bg': 'var(--hb-bg-secondary)',
  '--menubar-item-active-bg': 'var(--hb-primary-50)',
  '--menubar-item-active-color': 'var(--hb-primary)',
  '--menubar-shadow': 'var(--hb-shadow-base)',
  
  // =============================================================================
  // MESSAGE COMPONENTS
  // =============================================================================
  
  // Message Component
  '--message-padding': 'var(--hb-spacing-3) var(--hb-spacing-4)',
  '--message-border-radius': 'var(--hb-border-radius-md)',
  '--message-info-bg': 'var(--hb-info-50)',
  '--message-info-color': 'var(--hb-info-700)',
  '--message-info-border-color': 'var(--hb-info-200)',
  '--message-success-bg': 'var(--hb-success-50)',
  '--message-success-color': 'var(--hb-success-700)',
  '--message-success-border-color': 'var(--hb-success-200)',
  '--message-warning-bg': 'var(--hb-warning-50)',
  '--message-warning-color': 'var(--hb-warning-700)',
  '--message-warning-border-color': 'var(--hb-warning-200)',
  '--message-error-bg': 'var(--hb-danger-50)',
  '--message-error-color': 'var(--hb-danger-700)',
  '--message-error-border-color': 'var(--hb-danger-200)',
  
  // Toast Component
  '--toast-bg': 'var(--hb-bg-primary)',
  '--toast-border-radius': 'var(--hb-border-radius-lg)',
  '--toast-padding': 'var(--hb-spacing-4)',
  '--toast-shadow': 'var(--hb-shadow-xl)',
  '--toast-info-bg': 'var(--hb-info-50)',
  '--toast-info-color': 'var(--hb-info-700)',
  '--toast-success-bg': 'var(--hb-success-50)',
  '--toast-success-color': 'var(--hb-success-700)',
  '--toast-warning-bg': 'var(--hb-warning-50)',
  '--toast-warning-color': 'var(--hb-warning-700)',
  '--toast-error-bg': 'var(--hb-danger-50)',
  '--toast-error-color': 'var(--hb-danger-700)',
  
  // =============================================================================
  // MISC COMPONENTS
  // =============================================================================
  
  // ProgressBar Component
  '--progressbar-bg': 'var(--hb-border-light)',
  '--progressbar-border-radius': 'var(--hb-border-radius-full)',
  '--progressbar-height': '0.5rem',
  '--progressbar-value-bg': 'var(--hb-primary)',
  '--progressbar-value-border-radius': 'var(--hb-border-radius-full)',
  
  // Rating Component
  '--rating-item-size': '1.5rem',
  '--rating-item-color': 'var(--hb-border-medium)',
  '--rating-item-active-color': 'var(--hb-warning)',
  '--rating-item-hover-color': 'var(--hb-warning-400)',
  
  // Chip Component
  '--chip-bg': 'var(--hb-bg-secondary)',
  '--chip-color': 'var(--hb-text-primary)',
  '--chip-border-radius': 'var(--hb-border-radius-full)',
  '--chip-padding': 'var(--hb-spacing-1) var(--hb-spacing-3)',
  '--chip-font-size': 'var(--hb-font-size-sm)',
  '--chip-remove-icon-color': 'var(--hb-text-muted)',
  '--chip-remove-icon-hover-color': 'var(--hb-text-primary)',
  
  // Avatar Component
  '--avatar-size-sm': '2rem',
  '--avatar-size-md': '3rem',
  '--avatar-size-lg': '4rem',
  '--avatar-size-xl': '5rem',
  '--avatar-bg': 'var(--hb-bg-secondary)',
  '--avatar-color': 'var(--hb-text-primary)',
  '--avatar-border-radius': 'var(--hb-border-radius-full)',
  '--avatar-font-weight': 'var(--hb-font-weight-semibold)',
  
  // Divider Component
  '--divider-color': 'var(--hb-border-light)',
  '--divider-width': '1px',
  '--divider-margin': 'var(--hb-spacing-4) 0',
  '--divider-text-color': 'var(--hb-text-muted)',
  '--divider-text-padding': '0 var(--hb-spacing-4)',
  '--divider-text-font-size': 'var(--hb-font-size-sm)',
  
  // ScrollTop Component
  '--scrolltop-bg': 'var(--hb-primary)',
  '--scrolltop-color': 'var(--hb-text-inverse)',
  '--scrolltop-border-radius': 'var(--hb-border-radius-full)',
  '--scrolltop-size': '3rem',
  '--scrolltop-shadow': 'var(--hb-shadow-lg)',
  '--scrolltop-hover-bg': 'var(--hb-primary-hover)',
  
  // Skeleton Component
  '--skeleton-bg': 'var(--hb-bg-secondary)',
  '--skeleton-border-radius': 'var(--hb-border-radius-md)',
  '--skeleton-animation-duration': '1.5s',
  '--skeleton-animation-timing': 'ease-in-out',
  
  // Tag Component
  '--tag-bg': 'var(--hb-primary-50)',
  '--tag-color': 'var(--hb-primary)',
  '--tag-border-radius': 'var(--hb-border-radius-full)',
  '--tag-padding': 'var(--hb-spacing-1) var(--hb-spacing-3)',
  '--tag-font-size': 'var(--hb-font-size-sm)',
  '--tag-font-weight': 'var(--hb-font-weight-medium)',
  
  // Terminal Component
  '--terminal-bg': 'var(--hb-neutral-900)',
  '--terminal-color': 'var(--hb-neutral-100)',
  '--terminal-font-family': 'var(--hb-font-family-mono)',
  '--terminal-padding': 'var(--hb-spacing-4)',
  '--terminal-border-radius': 'var(--hb-border-radius-lg)',
  '--terminal-header-bg': 'var(--hb-neutral-800)',
  '--terminal-header-color': 'var(--hb-neutral-200)',
  '--terminal-header-padding': 'var(--hb-spacing-3) var(--hb-spacing-4)',
  
  // Checkbox Component
  '--checkbox-size': '1.25rem',
  '--checkbox-border-radius': 'var(--hb-border-radius-sm)',
  '--checkbox-border-color': 'var(--hb-border-medium)',
  '--checkbox-bg': 'var(--hb-bg-primary)',
  '--checkbox-checked-bg': 'var(--hb-primary)',
  '--checkbox-checked-border-color': 'var(--hb-primary)',
  '--checkbox-icon-size': '0.75rem',
  '--checkbox-icon-color': 'var(--hb-text-inverse)',
  '--checkbox-disabled-opacity': '0.6',
  '--checkbox-switch-width': '2.5rem',
  '--checkbox-switch-height': '1.25rem',
  '--checkbox-switch-thumb-size': '1rem',
  
  // RadioButton Component
  '--radiobutton-size': '1.25rem',
  '--radiobutton-border-radius': 'var(--hb-border-radius-full)',
  '--radiobutton-border-color': 'var(--hb-border-medium)',
  '--radiobutton-bg': 'var(--hb-bg-primary)',
  '--radiobutton-checked-border-color': 'var(--hb-primary)',
  '--radiobutton-dot-size': '0.5rem',
  '--radiobutton-dot-color': 'var(--hb-primary)',
  '--radiobutton-disabled-opacity': '0.6',
  
  // Textarea Component
  '--textarea-padding': 'var(--hb-spacing-3) var(--hb-spacing-4)',
  '--textarea-border-radius': 'var(--hb-border-radius-md)',
  '--textarea-border-color': 'var(--hb-border-medium)',
  '--textarea-bg': 'var(--hb-bg-primary)',
  '--textarea-color': 'var(--hb-text-primary)',
  '--textarea-placeholder-color': 'var(--hb-text-muted)',
  '--textarea-focus-border-color': 'var(--hb-border-focus)',
  '--textarea-focus-box-shadow': '0 0 0 3px rgba(59, 130, 246, 0.1)',
  '--textarea-min-height': '6rem',
  '--textarea-disabled-bg': 'var(--hb-bg-tertiary)',
  '--textarea-disabled-color': 'var(--hb-text-disabled)',
  
  // Card Component
  '--card-bg': 'var(--hb-bg-primary)',
  '--card-border-color': 'var(--hb-border-light)',
  '--card-border-radius': 'var(--hb-border-radius-lg)',
  '--card-shadow': 'var(--hb-shadow-sm)',
  '--card-shadow-hover': 'var(--hb-shadow-md)',
  '--card-header-bg': 'var(--hb-bg-secondary)',
  '--card-header-padding': 'var(--hb-spacing-6)',
  '--card-content-padding': 'var(--hb-spacing-6)',
  '--card-footer-bg': 'var(--hb-bg-secondary)',
  '--card-footer-padding': 'var(--hb-spacing-6)',
  '--card-title-font-size': 'var(--hb-font-size-xl)',
  '--card-title-font-weight': 'var(--hb-font-weight-semibold)',
  '--card-subtitle-font-size': 'var(--hb-font-size-sm)',
  '--card-subtitle-color': 'var(--hb-text-secondary)',
  
  // Tooltip Component
  '--tooltip-bg': 'var(--hb-neutral-900)',
  '--tooltip-color': 'var(--hb-text-inverse)',
  '--tooltip-border-radius': 'var(--hb-border-radius-md)',
  '--tooltip-padding': 'var(--hb-spacing-2) var(--hb-spacing-3)',
  '--tooltip-font-size': 'var(--hb-font-size-sm)',
  '--tooltip-shadow': 'var(--hb-shadow-lg)',
  '--tooltip-max-width': '20rem',
  '--tooltip-arrow-size': '0.5rem',
  '--tooltip-z-index': 'var(--hb-z-index-tooltip)',
  '--tooltip-transition': 'opacity var(--hb-transition-base)',
  '--tooltip-info-bg': 'var(--hb-info-600)',
  '--tooltip-success-bg': 'var(--hb-success-600)',
  '--tooltip-warning-bg': 'var(--hb-warning-600)',
  '--tooltip-danger-bg': 'var(--hb-danger-600)',
  '--tooltip-light-bg': 'var(--hb-bg-primary)',
  '--tooltip-light-color': 'var(--hb-text-primary)',
  '--tooltip-light-border': '1px solid var(--hb-border-light)'
}

// =============================================================================
// PRIMEFLEX UTILITY CLASSES
// =============================================================================
// Custom PrimeFlex utility classes using our design tokens

export const hbPrimeFlexClasses = {
  // Custom spacing utilities
  'hb-p-1': 'padding: var(--hb-spacing-1)',
  'hb-p-2': 'padding: var(--hb-spacing-2)',
  'hb-p-3': 'padding: var(--hb-spacing-3)',
  'hb-p-4': 'padding: var(--hb-spacing-4)',
  'hb-p-5': 'padding: var(--hb-spacing-5)',
  'hb-p-6': 'padding: var(--hb-spacing-6)',
  
  'hb-m-1': 'margin: var(--hb-spacing-1)',
  'hb-m-2': 'margin: var(--hb-spacing-2)',
  'hb-m-3': 'margin: var(--hb-spacing-3)',
  'hb-m-4': 'margin: var(--hb-spacing-4)',
  'hb-m-5': 'margin: var(--hb-spacing-5)',
  'hb-m-6': 'margin: var(--hb-spacing-6)',
  
  // Custom color utilities
  'hb-text-primary': 'color: var(--hb-text-primary)',
  'hb-text-secondary': 'color: var(--hb-text-secondary)',
  'hb-text-muted': 'color: var(--hb-text-muted)',
  
  'hb-bg-primary': 'background-color: var(--hb-bg-primary)',
  'hb-bg-secondary': 'background-color: var(--hb-bg-secondary)',
  'hb-bg-tertiary': 'background-color: var(--hb-bg-tertiary)',
  
  // Custom border radius utilities
  'hb-rounded-sm': 'border-radius: var(--hb-border-radius-sm)',
  'hb-rounded': 'border-radius: var(--hb-border-radius-base)',
  'hb-rounded-md': 'border-radius: var(--hb-border-radius-md)',
  'hb-rounded-lg': 'border-radius: var(--hb-border-radius-lg)',
  'hb-rounded-xl': 'border-radius: var(--hb-border-radius-xl)',
  'hb-rounded-full': 'border-radius: var(--hb-border-radius-full)',
  
  // Custom shadow utilities
  'hb-shadow-sm': 'box-shadow: var(--hb-shadow-sm)',
  'hb-shadow': 'box-shadow: var(--hb-shadow-base)',
  'hb-shadow-md': 'box-shadow: var(--hb-shadow-md)',
  'hb-shadow-lg': 'box-shadow: var(--hb-shadow-lg)',
  'hb-shadow-xl': 'box-shadow: var(--hb-shadow-xl)'
}

// =============================================================================
// PRESET CONFIGURATION
// =============================================================================
// This is the main preset configuration that can be installed

export const hbPreset = {
  name: 'hb-theme',
  version: '1.0.0',
  description: 'Custom HB theme for PrimeVue 4 with comprehensive design tokens',
  author: 'Your Name',
  license: 'MIT',
  
  // Design tokens
  tokens: {
    ...hbDesignTokens,
    ...hbPrimeVueTokens,
    ...hbComponentTokens
  },
  
  // PrimeFlex utilities
  utilities: hbPrimeFlexClasses,
  
  // Component-specific overrides
  components: {
    // Form Components
    button: {
      '--button-padding': 'var(--hb-spacing-3) var(--hb-spacing-4)',
      '--button-border-radius': 'var(--hb-border-radius-md)',
      '--button-font-weight': 'var(--hb-font-weight-medium)',
      '--button-transition': 'var(--hb-transition-base)'
    },
    
    input: {
      '--input-padding': 'var(--hb-spacing-3) var(--hb-spacing-4)',
      '--input-border-radius': 'var(--hb-border-radius-md)',
      '--input-border-color': 'var(--hb-border-medium)',
      '--input-focus-border-color': 'var(--hb-border-focus)',
      '--input-focus-box-shadow': 'var(--hb-shadow-sm)'
    },
    
    select: {
      '--select-padding': 'var(--hb-spacing-3) var(--hb-spacing-4)',
      '--select-border-radius': 'var(--hb-border-radius-md)',
      '--select-bg': 'var(--hb-bg-primary)',
      '--select-border-color': 'var(--hb-border-medium)',
      '--select-trigger-bg': 'var(--hb-bg-primary)',
      '--select-trigger-border': '1px solid var(--hb-border-medium)'
    },
    
    // Data Display Components
    datatable: {
      '--datatable-border-radius': 'var(--hb-border-radius-lg)',
      '--datatable-header-bg': 'var(--hb-bg-secondary)',
      '--datatable-row-hover-bg': 'var(--hb-bg-secondary)',
      '--datatable-selection-bg': 'var(--hb-primary-50)'
    },
    
    // Panel Components
    panel: {
      '--panel-border-radius': 'var(--hb-border-radius-lg)',
      '--panel-header-bg': 'var(--hb-bg-secondary)',
      '--panel-shadow': 'var(--hb-shadow-base)'
    },
    
    // Overlay Components
    dialog: {
      '--dialog-border-radius': 'var(--hb-border-radius-lg)',
      '--dialog-shadow': 'var(--hb-shadow-xl)',
      '--dialog-mask-bg': 'var(--hb-bg-overlay)'
    },
    
    // Message Components
    message: {
      '--message-border-radius': 'var(--hb-border-radius-md)',
      '--message-padding': 'var(--hb-spacing-3) var(--hb-spacing-4)'
    },
    
    // Form Components
    checkbox: {
      '--checkbox-size': 'var(--hb-checkbox-size)',
      '--checkbox-border-radius': 'var(--hb-checkbox-border-radius)',
      '--checkbox-border-color': 'var(--hb-checkbox-border-color)',
      '--checkbox-bg': 'var(--hb-checkbox-bg)',
      '--checkbox-checked-bg': 'var(--hb-checkbox-checked-bg)',
      '--checkbox-checked-border-color': 'var(--hb-checkbox-checked-border-color)'
    },
    
    radiobutton: {
      '--radiobutton-size': 'var(--hb-radiobutton-size)',
      '--radiobutton-border-radius': 'var(--hb-radiobutton-border-radius)',
      '--radiobutton-border-color': 'var(--hb-radiobutton-border-color)',
      '--radiobutton-bg': 'var(--hb-radiobutton-bg)',
      '--radiobutton-checked-border-color': 'var(--hb-radiobutton-checked-border-color)'
    },
    
    textarea: {
      '--textarea-padding': 'var(--hb-textarea-padding)',
      '--textarea-border-radius': 'var(--hb-textarea-border-radius)',
      '--textarea-border-color': 'var(--hb-textarea-border-color)',
      '--textarea-bg': 'var(--hb-textarea-bg)',
      '--textarea-focus-border-color': 'var(--hb-textarea-focus-border-color)'
    },
    
    // Layout Components
    card: {
      '--card-bg': 'var(--hb-card-bg)',
      '--card-border-color': 'var(--hb-card-border-color)',
      '--card-border-radius': 'var(--hb-card-border-radius)',
      '--card-shadow': 'var(--hb-card-shadow)',
      '--card-header-bg': 'var(--hb-card-header-bg)',
      '--card-content-padding': 'var(--hb-card-content-padding)'
    },
    
    // Overlay Components
    tooltip: {
      '--tooltip-bg': 'var(--hb-tooltip-bg)',
      '--tooltip-color': 'var(--hb-tooltip-color)',
      '--tooltip-border-radius': 'var(--hb-tooltip-border-radius)',
      '--tooltip-padding': 'var(--hb-tooltip-padding)',
      '--tooltip-shadow': 'var(--hb-tooltip-shadow)',
      '--tooltip-z-index': 'var(--hb-tooltip-z-index)'
    }
  }
}

export default hbPreset 