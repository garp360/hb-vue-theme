<template>
  <div class="hb-extended-showcase">
    <div class="hb-showcase-header">
      <h2 class="hb-showcase-title">Extended Component Coverage</h2>
      <p class="hb-showcase-description">
        Comprehensive showcase of all themed components with enhanced coverage
      </p>
    </div>

    <div class="hb-showcase-grid">
      <!-- Navigation Components Section -->
      <div class="hb-showcase-section">
        <h3 class="hb-section-title">Navigation Components</h3>
        
        <!-- Menu Examples -->
        <div class="hb-component-group">
          <h4 class="hb-group-title">Menu Components</h4>
          <div class="hb-component-examples">
            <div class="hb-menu">
              <ul class="hb-menu-list">
                <li class="hb-menu-item hb-active">
                  <i class="pi pi-home hb-menu-item-icon"></i>
                  <span class="hb-menu-item-label">Dashboard</span>
                </li>
                <li class="hb-menu-item hb-has-submenu">
                  <i class="pi pi-users hb-menu-item-icon"></i>
                  <span class="hb-menu-item-label">Users</span>
                </li>
                <li class="hb-menu-item">
                  <i class="pi pi-cog hb-menu-item-icon"></i>
                  <span class="hb-menu-item-label">Settings</span>
                </li>
              </ul>
            </div>

            <div class="hb-menu hb-horizontal">
              <ul class="hb-menu-list">
                <li class="hb-menu-item hb-active">Home</li>
                <li class="hb-menu-item">About</li>
                <li class="hb-menu-item">Contact</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- TabView Examples -->
        <div class="hb-component-group">
          <h4 class="hb-group-title">TabView Components</h4>
          <div class="hb-component-examples">
            <div class="hb-tabview">
              <ul class="hb-tabview-nav">
                <li class="hb-tabview-nav-item hb-active">
                  <i class="pi pi-home hb-tabview-nav-item-icon"></i>
                  <span class="hb-tabview-nav-item-label">Home</span>
                </li>
                <li class="hb-tabview-nav-item">
                  <i class="pi pi-user hb-tabview-nav-item-icon"></i>
                  <span class="hb-tabview-nav-item-label">Profile</span>
                </li>
                <li class="hb-tabview-nav-item">
                  <i class="pi pi-cog hb-tabview-nav-item-icon"></i>
                  <span class="hb-tabview-nav-item-label">Settings</span>
                </li>
              </ul>
              <div class="hb-tabview-content">
                <div class="hb-tabview-panel hb-active">
                  <p>This is the home tab content.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Accordion Examples -->
        <div class="hb-component-group">
          <h4 class="hb-group-title">Accordion Components</h4>
          <div class="hb-component-examples">
            <div class="hb-accordion">
              <div class="hb-accordion-tab">
                <button class="hb-accordion-tab-header hb-active">
                  <i class="pi pi-info-circle hb-accordion-tab-header-icon"></i>
                  <span class="hb-accordion-tab-header-label">Information</span>
                  <span class="hb-accordion-tab-header-toggle"></span>
                </button>
                <div class="hb-accordion-tab-content">
                  <div class="hb-accordion-tab-panel hb-active">
                    <p>This is the information panel content.</p>
                  </div>
                </div>
              </div>
              <div class="hb-accordion-tab">
                <button class="hb-accordion-tab-header">
                  <i class="pi pi-cog hb-accordion-tab-header-icon"></i>
                  <span class="hb-accordion-tab-header-label">Settings</span>
                  <span class="hb-accordion-tab-header-toggle"></span>
                </button>
                <div class="hb-accordion-tab-content">
                  <div class="hb-accordion-tab-panel">
                    <p>This is the settings panel content.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Data Display Components Section -->
      <div class="hb-showcase-section">
        <h3 class="hb-section-title">Data Display Components</h3>
        
        <!-- Toast Examples -->
        <div class="hb-component-group">
          <h4 class="hb-group-title">Toast Components</h4>
          <div class="hb-component-examples">
            <div class="hb-toast hb-info">
              <i class="pi pi-info-circle hb-toast-icon"></i>
              <div class="hb-toast-content">
                <div class="hb-toast-summary">Information</div>
                <div class="hb-toast-detail">This is an info toast message</div>
              </div>
              <button class="hb-toast-close">
                <i class="pi pi-times"></i>
              </button>
            </div>

            <div class="hb-toast hb-success">
              <i class="pi pi-check-circle hb-toast-icon"></i>
              <div class="hb-toast-content">
                <div class="hb-toast-summary">Success</div>
                <div class="hb-toast-detail">Operation completed successfully</div>
              </div>
              <button class="hb-toast-close">
                <i class="pi pi-times"></i>
              </button>
            </div>

            <div class="hb-toast hb-warning">
              <i class="pi pi-exclamation-triangle hb-toast-icon"></i>
              <div class="hb-toast-content">
                <div class="hb-toast-summary">Warning</div>
                <div class="hb-toast-detail">Please review your input</div>
              </div>
              <button class="hb-toast-close">
                <i class="pi pi-times"></i>
              </button>
            </div>

            <div class="hb-toast hb-error">
              <i class="pi pi-times-circle hb-toast-icon"></i>
              <div class="hb-toast-content">
                <div class="hb-toast-summary">Error</div>
                <div class="hb-toast-detail">Something went wrong</div>
              </div>
              <button class="hb-toast-close">
                <i class="pi pi-times"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- ProgressBar Examples -->
        <div class="hb-component-group">
          <h4 class="hb-group-title">ProgressBar Components</h4>
          <div class="hb-component-examples">
            <div class="hb-progressbar-wrapper">
              <div class="hb-progressbar hb-with-label">
                <div class="hb-progressbar-value" style="width: 75%"></div>
                <div class="hb-progressbar-label">75%</div>
              </div>
            </div>

            <div class="hb-progressbar-wrapper">
              <div class="hb-progressbar hb-success hb-striped">
                <div class="hb-progressbar-value" style="width: 60%"></div>
                <div class="hb-progressbar-label">60%</div>
              </div>
            </div>

            <div class="hb-progressbar-wrapper">
              <div class="hb-progressbar hb-warning hb-gradient">
                <div class="hb-progressbar-value" style="width: 45%"></div>
                <div class="hb-progressbar-label">45%</div>
              </div>
            </div>

            <div class="hb-progressbar-wrapper">
              <div class="hb-progressbar hb-danger hb-lg">
                <div class="hb-progressbar-value" style="width: 30%"></div>
                <div class="hb-progressbar-label">30%</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Badge Examples -->
        <div class="hb-component-group">
          <h4 class="hb-group-title">Badge Components</h4>
          <div class="hb-component-examples">
            <span class="hb-badge hb-primary">Primary</span>
            <span class="hb-badge hb-secondary">Secondary</span>
            <span class="hb-badge hb-success">Success</span>
            <span class="hb-badge hb-warning">Warning</span>
            <span class="hb-badge hb-danger">Danger</span>
            <span class="hb-badge hb-info">Info</span>
            <span class="hb-badge hb-light">Light</span>
            <span class="hb-badge hb-dark">Dark</span>
          </div>
        </div>

        <!-- Avatar Examples -->
        <div class="hb-component-group">
          <h4 class="hb-group-title">Avatar Components</h4>
          <div class="hb-component-examples">
            <div class="hb-avatar hb-primary">
              <span class="hb-avatar-text">JD</span>
            </div>
            <div class="hb-avatar hb-success">
              <span class="hb-avatar-text">AB</span>
            </div>
            <div class="hb-avatar hb-warning">
              <span class="hb-avatar-text">CD</span>
            </div>
            <div class="hb-avatar hb-danger">
              <span class="hb-avatar-text">EF</span>
            </div>
            <div class="hb-avatar hb-info">
              <span class="hb-avatar-text">GH</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Form Components Section -->
      <div class="hb-showcase-section">
        <h3 class="hb-section-title">Advanced Form Components</h3>
        
        <!-- MultiSelect Examples -->
        <div class="hb-component-group">
          <h4 class="hb-group-title">MultiSelect Components</h4>
          <div class="hb-component-examples">
            <div class="hb-multiselect">
              <div class="hb-multiselect-trigger">
                <div class="hb-multiselect-tokens">
                  <span class="hb-multiselect-token hb-primary">
                    <span class="hb-multiselect-token-label">Option 1</span>
                    <button class="hb-multiselect-token-remove">
                      <i class="pi pi-times"></i>
                    </button>
                  </span>
                  <span class="hb-multiselect-token hb-success">
                    <span class="hb-multiselect-token-label">Option 2</span>
                    <button class="hb-multiselect-token-remove">
                      <i class="pi pi-times"></i>
                    </button>
                  </span>
                </div>
                <span class="hb-multiselect-placeholder">Select options...</span>
              </div>
            </div>
          </div>
        </div>

        <!-- InputNumber Examples -->
        <div class="hb-component-group">
          <h4 class="hb-group-title">InputNumber Components</h4>
          <div class="hb-component-examples">
            <div class="hb-inputnumber">
              <button class="hb-inputnumber-button hb-decrease">
                <i class="pi pi-minus"></i>
              </button>
              <input type="text" class="hb-inputnumber-input" value="42" />
              <button class="hb-inputnumber-button hb-increase">
                <i class="pi pi-plus"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Password Examples -->
        <div class="hb-component-group">
          <h4 class="hb-group-title">Password Components</h4>
          <div class="hb-component-examples">
            <div class="hb-password">
              <input type="password" class="hb-password-input" placeholder="Enter password" />
              <button class="hb-password-toggle">
                <i class="pi pi-eye"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Rating Examples -->
        <div class="hb-component-group">
          <h4 class="hb-group-title">Rating Components</h4>
          <div class="hb-component-examples">
            <div class="hb-rating">
              <div class="hb-rating-item hb-active">
                <i class="pi pi-star-fill"></i>
              </div>
              <div class="hb-rating-item hb-active">
                <i class="pi pi-star-fill"></i>
              </div>
              <div class="hb-rating-item hb-active">
                <i class="pi pi-star-fill"></i>
              </div>
              <div class="hb-rating-item hb-active">
                <i class="pi pi-star-fill"></i>
              </div>
              <div class="hb-rating-item">
                <i class="pi pi-star"></i>
              </div>
            </div>
          </div>
        </div>

        <!-- Slider Examples -->
        <div class="hb-component-group">
          <h4 class="hb-group-title">Slider Components</h4>
          <div class="hb-component-examples">
            <div class="hb-slider">
              <div class="hb-slider-track">
                <div class="hb-slider-range" style="width: 60%"></div>
                <div class="hb-slider-handle" style="left: 60%"></div>
              </div>
              <div class="hb-slider-value">60</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Overlay Components Section -->
      <div class="hb-showcase-section">
        <h3 class="hb-section-title">Overlay Components</h3>
        
        <!-- Dialog Examples -->
        <div class="hb-component-group">
          <h4 class="hb-group-title">Dialog Components</h4>
          <div class="hb-component-examples">
            <button class="hb-button hb-primary" @click="showDialog = true">
              Open Dialog
            </button>
            
            <div v-if="showDialog" class="hb-dialog-overlay" @click="showDialog = false">
              <div class="hb-dialog" @click.stop>
                <div class="hb-dialog-header">
                  <h3 class="hb-dialog-title">Dialog Title</h3>
                  <button class="hb-dialog-close" @click="showDialog = false">
                    <i class="pi pi-times"></i>
                  </button>
                </div>
                <div class="hb-dialog-content">
                  <p>This is the dialog content. You can put any content here.</p>
                </div>
                <div class="hb-dialog-footer">
                  <button class="hb-button hb-secondary" @click="showDialog = false">
                    Cancel
                  </button>
                  <button class="hb-button hb-primary" @click="showDialog = false">
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar Examples -->
        <div class="hb-component-group">
          <h4 class="hb-group-title">Sidebar Components</h4>
          <div class="hb-component-examples">
            <button class="hb-button hb-primary" @click="showSidebar = true">
              Open Sidebar
            </button>
            
            <div v-if="showSidebar" class="hb-sidebar-overlay" @click="showSidebar = false">
              <div class="hb-sidebar hb-right" @click.stop>
                <div class="hb-sidebar-header">
                  <h3 class="hb-sidebar-title">Sidebar Title</h3>
                  <button class="hb-sidebar-close" @click="showSidebar = false">
                    <i class="pi pi-times"></i>
                  </button>
                </div>
                <div class="hb-sidebar-content">
                  <p>This is the sidebar content.</p>
                  <ul class="hb-sidebar-menu">
                    <li class="hb-sidebar-menu-item">Menu Item 1</li>
                    <li class="hb-sidebar-menu-item">Menu Item 2</li>
                    <li class="hb-sidebar-menu-item">Menu Item 3</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- File Upload Components Section -->
      <div class="hb-showcase-section">
        <h3 class="hb-section-title">File Upload Components</h3>
        
        <!-- FileUpload Examples -->
        <div class="hb-component-group">
          <h4 class="hb-group-title">FileUpload Components</h4>
          <div class="hb-component-examples">
            <div class="hb-fileupload">
              <div class="hb-fileupload-content">
                <div class="hb-fileupload-message">
                  <i class="pi pi-cloud-upload hb-fileupload-icon"></i>
                  <span class="hb-fileupload-text">Drag and drop files here or</span>
                  <button class="hb-button hb-primary hb-sm">Browse Files</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExtendedComponentShowcase',
  data() {
    return {
      showDialog: false,
      showSidebar: false
    }
  }
}
</script>

<style scoped>
/* =============================================================================
   EXTENDED COMPONENT SHOWCASE STYLES
   ============================================================================= */

.hb-extended-showcase {
  max-width: 1400px;
  margin: 0 auto;
  padding: var(--hb-spacing-6);
  font-family: var(--hb-font-family-primary);
}

.hb-showcase-header {
  text-align: center;
  margin-bottom: var(--hb-spacing-8);
  padding: var(--hb-spacing-6);
  background-color: var(--hb-bg-primary);
  border-radius: var(--hb-border-radius-lg);
  box-shadow: var(--hb-shadow-sm);
}

.hb-showcase-title {
  font-size: var(--hb-font-size-3xl);
  font-weight: var(--hb-font-weight-bold);
  color: var(--hb-text-primary);
  margin: 0 0 var(--hb-spacing-2) 0;
}

.hb-showcase-description {
  font-size: var(--hb-font-size-lg);
  color: var(--hb-text-secondary);
  margin: 0;
}

.hb-showcase-grid {
  display: grid;
  gap: var(--hb-spacing-8);
}

.hb-showcase-section {
  background-color: var(--hb-bg-primary);
  border-radius: var(--hb-border-radius-lg);
  padding: var(--hb-spacing-6);
  box-shadow: var(--hb-shadow-sm);
}

.hb-section-title {
  font-size: var(--hb-font-size-2xl);
  font-weight: var(--hb-font-weight-semibold);
  color: var(--hb-text-primary);
  margin: 0 0 var(--hb-spacing-6) 0;
  padding-bottom: var(--hb-spacing-3);
  border-bottom: 2px solid var(--hb-border-light);
}

.hb-component-group {
  margin-bottom: var(--hb-spacing-6);
}

.hb-group-title {
  font-size: var(--hb-font-size-lg);
  font-weight: var(--hb-font-weight-semibold);
  color: var(--hb-text-primary);
  margin: 0 0 var(--hb-spacing-4) 0;
}

.hb-component-examples {
  display: flex;
  flex-wrap: wrap;
  gap: var(--hb-spacing-4);
  align-items: flex-start;
}

/* Component-specific spacing */
.hb-component-examples .hb-menu {
  margin-right: var(--hb-spacing-4);
}

.hb-component-examples .hb-tabview {
  width: 100%;
  max-width: 500px;
  margin-bottom: var(--hb-spacing-4);
}

.hb-component-examples .hb-accordion {
  width: 100%;
  max-width: 400px;
  margin-bottom: var(--hb-spacing-4);
}

.hb-component-examples .hb-toast {
  width: 100%;
  max-width: 350px;
  margin-bottom: var(--hb-spacing-2);
}

.hb-component-examples .hb-progressbar-wrapper {
  width: 100%;
  max-width: 300px;
  margin-bottom: var(--hb-spacing-2);
}

.hb-component-examples .hb-badge {
  margin-right: var(--hb-spacing-2);
  margin-bottom: var(--hb-spacing-2);
}

.hb-component-examples .hb-avatar {
  margin-right: var(--hb-spacing-2);
  margin-bottom: var(--hb-spacing-2);
}

.hb-component-examples .hb-multiselect {
  width: 300px;
  margin-right: var(--hb-spacing-2);
  margin-bottom: var(--hb-spacing-2);
}

.hb-component-examples .hb-inputnumber {
  width: 150px;
  margin-right: var(--hb-spacing-2);
  margin-bottom: var(--hb-spacing-2);
}

.hb-component-examples .hb-password {
  width: 250px;
  margin-right: var(--hb-spacing-2);
  margin-bottom: var(--hb-spacing-2);
}

.hb-component-examples .hb-rating {
  margin-right: var(--hb-spacing-2);
  margin-bottom: var(--hb-spacing-2);
}

.hb-component-examples .hb-slider {
  width: 200px;
  margin-right: var(--hb-spacing-2);
  margin-bottom: var(--hb-spacing-2);
}

.hb-component-examples .hb-fileupload {
  width: 100%;
  max-width: 400px;
  margin-bottom: var(--hb-spacing-2);
}

/* Badge styles */
.hb-badge {
  display: inline-flex;
  align-items: center;
  padding: var(--hb-spacing-1) var(--hb-spacing-2);
  font-size: var(--hb-font-size-xs);
  font-weight: var(--hb-font-weight-medium);
  border-radius: var(--hb-border-radius-full);
  color: var(--hb-text-inverse);
}

.hb-badge.hb-primary { background-color: var(--hb-primary); }
.hb-badge.hb-secondary { background-color: var(--hb-secondary); }
.hb-badge.hb-success { background-color: var(--hb-success); }
.hb-badge.hb-warning { background-color: var(--hb-warning); }
.hb-badge.hb-danger { background-color: var(--hb-danger); }
.hb-badge.hb-info { background-color: var(--hb-info); }
.hb-badge.hb-light { background-color: var(--hb-bg-tertiary); color: var(--hb-text-primary); }
.hb-badge.hb-dark { background-color: var(--hb-text-primary); }

/* Avatar styles */
.hb-avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: var(--hb-border-radius-full);
  color: var(--hb-text-inverse);
  font-weight: var(--hb-font-weight-semibold);
  font-size: var(--hb-font-size-sm);
}

.hb-avatar.hb-primary { background-color: var(--hb-primary); }
.hb-avatar.hb-success { background-color: var(--hb-success); }
.hb-avatar.hb-warning { background-color: var(--hb-warning); }
.hb-avatar.hb-danger { background-color: var(--hb-danger); }
.hb-avatar.hb-info { background-color: var(--hb-info); }

/* MultiSelect styles */
.hb-multiselect {
  position: relative;
  display: block;
  width: 100%;
}

.hb-multiselect-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: var(--hb-spacing-3) var(--hb-spacing-4);
  min-height: 2.5rem;
  background-color: var(--hb-bg-primary);
  border: 1px solid var(--hb-border-medium);
  border-radius: var(--hb-border-radius-md);
  font-family: var(--hb-font-family-primary);
  font-size: var(--hb-font-size-base);
  color: var(--hb-text-primary);
  cursor: pointer;
  transition: all var(--hb-transition-base);
}

.hb-multiselect-tokens {
  display: flex;
  flex-wrap: wrap;
  gap: var(--hb-spacing-1);
  flex: 1;
}

.hb-multiselect-token {
  display: inline-flex;
  align-items: center;
  padding: var(--hb-spacing-1) var(--hb-spacing-2);
  border-radius: var(--hb-border-radius-sm);
  font-size: var(--hb-font-size-xs);
  color: var(--hb-text-inverse);
}

.hb-multiselect-token.hb-primary { background-color: var(--hb-primary); }
.hb-multiselect-token.hb-success { background-color: var(--hb-success); }

.hb-multiselect-token-remove {
  margin-left: var(--hb-spacing-1);
  border: none;
  background: none;
  color: inherit;
  cursor: pointer;
  font-size: var(--hb-font-size-xs);
}

.hb-multiselect-placeholder {
  color: var(--hb-text-muted);
  margin-left: var(--hb-spacing-2);
}

/* InputNumber styles */
.hb-inputnumber {
  display: flex;
  align-items: center;
  border: 1px solid var(--hb-border-medium);
  border-radius: var(--hb-border-radius-md);
  overflow: hidden;
}

.hb-inputnumber-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2.5rem;
  border: none;
  background-color: var(--hb-bg-secondary);
  color: var(--hb-text-primary);
  cursor: pointer;
  transition: background-color var(--hb-transition-base);
}

.hb-inputnumber-button:hover {
  background-color: var(--hb-bg-tertiary);
}

.hb-inputnumber-input {
  flex: 1;
  border: none;
  outline: none;
  padding: var(--hb-spacing-3);
  text-align: center;
  background-color: var(--hb-bg-primary);
  color: var(--hb-text-primary);
  font-family: var(--hb-font-family-primary);
  font-size: var(--hb-font-size-base);
}

/* Password styles */
.hb-password {
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid var(--hb-border-medium);
  border-radius: var(--hb-border-radius-md);
  background-color: var(--hb-bg-primary);
}

.hb-password-input {
  flex: 1;
  border: none;
  outline: none;
  padding: var(--hb-spacing-3) var(--hb-spacing-4);
  background: none;
  color: var(--hb-text-primary);
  font-family: var(--hb-font-family-primary);
  font-size: var(--hb-font-size-base);
}

.hb-password-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  background: none;
  color: var(--hb-text-secondary);
  cursor: pointer;
  transition: color var(--hb-transition-base);
}

.hb-password-toggle:hover {
  color: var(--hb-text-primary);
}

/* Rating styles */
.hb-rating {
  display: flex;
  gap: var(--hb-spacing-1);
}

.hb-rating-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  color: var(--hb-border-medium);
  cursor: pointer;
  transition: color var(--hb-transition-base);
}

.hb-rating-item.hb-active {
  color: var(--hb-warning);
}

.hb-rating-item:hover {
  color: var(--hb-warning);
}

/* Slider styles */
.hb-slider {
  display: flex;
  align-items: center;
  gap: var(--hb-spacing-3);
}

.hb-slider-track {
  position: relative;
  flex: 1;
  height: 0.5rem;
  background-color: var(--hb-bg-tertiary);
  border-radius: var(--hb-border-radius-full);
}

.hb-slider-range {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: var(--hb-primary);
  border-radius: var(--hb-border-radius-full);
}

.hb-slider-handle {
  position: absolute;
  top: 50%;
  width: 1rem;
  height: 1rem;
  background-color: var(--hb-primary);
  border-radius: var(--hb-border-radius-full);
  transform: translate(-50%, -50%);
  cursor: pointer;
  transition: transform var(--hb-transition-base);
}

.hb-slider-handle:hover {
  transform: translate(-50%, -50%) scale(1.2);
}

.hb-slider-value {
  min-width: 2rem;
  text-align: center;
  font-weight: var(--hb-font-weight-medium);
  color: var(--hb-text-primary);
}

/* FileUpload styles */
.hb-fileupload {
  border: 2px dashed var(--hb-border-medium);
  border-radius: var(--hb-border-radius-lg);
  background-color: var(--hb-bg-secondary);
  transition: all var(--hb-transition-base);
}

.hb-fileupload:hover {
  border-color: var(--hb-primary);
  background-color: var(--hb-primary-50);
}

.hb-fileupload-content {
  padding: var(--hb-spacing-8);
  text-align: center;
}

.hb-fileupload-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--hb-spacing-3);
}

.hb-fileupload-icon {
  font-size: var(--hb-font-size-3xl);
  color: var(--hb-text-secondary);
}

.hb-fileupload-text {
  color: var(--hb-text-secondary);
  font-size: var(--hb-font-size-base);
}

/* Dialog styles */
.hb-dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--hb-z-index-modal);
}

.hb-dialog {
  background-color: var(--hb-bg-primary);
  border-radius: var(--hb-border-radius-lg);
  box-shadow: var(--hb-shadow-xl);
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow: hidden;
}

.hb-dialog-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--hb-spacing-4) var(--hb-spacing-6);
  border-bottom: 1px solid var(--hb-border-light);
}

.hb-dialog-title {
  font-size: var(--hb-font-size-lg);
  font-weight: var(--hb-font-weight-semibold);
  color: var(--hb-text-primary);
  margin: 0;
}

.hb-dialog-close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: none;
  background: none;
  color: var(--hb-text-secondary);
  cursor: pointer;
  border-radius: var(--hb-border-radius-sm);
  transition: all var(--hb-transition-base);
}

.hb-dialog-close:hover {
  background-color: var(--hb-bg-secondary);
  color: var(--hb-text-primary);
}

.hb-dialog-content {
  padding: var(--hb-spacing-6);
  color: var(--hb-text-primary);
}

.hb-dialog-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--hb-spacing-3);
  padding: var(--hb-spacing-4) var(--hb-spacing-6);
  border-top: 1px solid var(--hb-border-light);
  background-color: var(--hb-bg-secondary);
}

/* Sidebar styles */
.hb-sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: var(--hb-z-index-sidebar);
}

.hb-sidebar {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  background-color: var(--hb-bg-primary);
  box-shadow: var(--hb-shadow-xl);
  display: flex;
  flex-direction: column;
}

.hb-sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--hb-spacing-4) var(--hb-spacing-6);
  border-bottom: 1px solid var(--hb-border-light);
}

.hb-sidebar-title {
  font-size: var(--hb-font-size-lg);
  font-weight: var(--hb-font-weight-semibold);
  color: var(--hb-text-primary);
  margin: 0;
}

.hb-sidebar-close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: none;
  background: none;
  color: var(--hb-text-secondary);
  cursor: pointer;
  border-radius: var(--hb-border-radius-sm);
  transition: all var(--hb-transition-base);
}

.hb-sidebar-close:hover {
  background-color: var(--hb-bg-secondary);
  color: var(--hb-text-primary);
}

.hb-sidebar-content {
  flex: 1;
  padding: var(--hb-spacing-6);
  overflow-y: auto;
}

.hb-sidebar-menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

.hb-sidebar-menu-item {
  padding: var(--hb-spacing-3) 0;
  color: var(--hb-text-primary);
  cursor: pointer;
  transition: color var(--hb-transition-base);
}

.hb-sidebar-menu-item:hover {
  color: var(--hb-primary);
}

/* Responsive design */
@media (max-width: 768px) {
  .hb-extended-showcase {
    padding: var(--hb-spacing-4);
  }
  
  .hb-showcase-header {
    padding: var(--hb-spacing-4);
  }
  
  .hb-showcase-title {
    font-size: var(--hb-font-size-2xl);
  }
  
  .hb-showcase-description {
    font-size: var(--hb-font-size-base);
  }
  
  .hb-component-examples {
    flex-direction: column;
  }
  
  .hb-component-examples .hb-multiselect,
  .hb-component-examples .hb-inputnumber,
  .hb-component-examples .hb-password,
  .hb-component-examples .hb-slider {
    width: 100%;
  }
  
  .hb-sidebar {
    width: 100%;
  }
}
</style> 