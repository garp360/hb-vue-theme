<template>
  <section class="hb-showcase-section">
    <h2 class="hb-section-title">Navigation Components</h2>
    
    <div class="hb-component-group">
      <h3 class="hb-group-title">Menu Components</h3>
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

    <div class="hb-component-group">
      <h3 class="hb-group-title">TabView Components</h3>
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

    <div class="hb-component-group">
      <h3 class="hb-group-title">Accordion Components</h3>
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
              <div class="hb-tabview-panel">
                <p>This is the settings panel content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No additional logic needed for this showcase component
</script>

<style scoped>
/* =============================================================================
   NAVIGATION SHOWCASE STYLES
   ============================================================================= */

.hb-showcase-section {
  background-color: var(--hb-bg-primary);
  border-radius: var(--hb-border-radius-lg);
  padding: var(--hb-spacing-8);
  box-shadow: var(--hb-shadow-md);
}

.hb-section-title {
  font-size: var(--hb-font-size-3xl);
  font-weight: var(--hb-font-weight-bold);
  color: var(--hb-text-primary);
  margin: 0 0 var(--hb-spacing-8) 0;
  padding-bottom: var(--hb-spacing-4);
  border-bottom: 3px solid var(--hb-border-light);
}

.hb-component-group {
  margin-bottom: var(--hb-spacing-8);
}

.hb-group-title {
  font-size: var(--hb-font-size-2xl);
  font-weight: var(--hb-font-weight-semibold);
  color: var(--hb-text-primary);
  margin: 0 0 var(--hb-spacing-6) 0;
}

.hb-component-examples {
  display: flex;
  flex-wrap: wrap;
  gap: var(--hb-spacing-6);
  align-items: flex-start;
}

/* Menu Styles */
.hb-menu {
  border: 1px solid var(--hb-border-light);
  border-radius: var(--hb-border-radius-lg);
  background-color: var(--hb-bg-secondary);
  min-width: 250px;
}

.hb-menu.hb-horizontal {
  min-width: 400px;
}

.hb-menu-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.hb-menu-item {
  display: flex;
  align-items: center;
  padding: var(--hb-spacing-3) var(--hb-spacing-4);
  color: var(--hb-text-primary);
  cursor: pointer;
  transition: all 0.2s ease;
  border-bottom: 1px solid var(--hb-border-light);
}

.hb-menu-item:last-child {
  border-bottom: none;
}

.hb-menu-item:hover {
  background-color: var(--hb-bg-hover);
}

.hb-menu-item.hb-active {
  background-color: var(--hb-primary-50);
  color: var(--hb-primary-700);
  border-left: 3px solid var(--hb-primary-500);
}

.hb-menu-item-icon {
  margin-right: var(--hb-spacing-3);
  font-size: var(--hb-font-size-lg);
}

.hb-menu-item-label {
  font-weight: var(--hb-font-weight-medium);
}

/* Horizontal Menu */
.hb-menu.hb-horizontal .hb-menu-list {
  display: flex;
}

.hb-menu.hb-horizontal .hb-menu-item {
  border-bottom: none;
  border-right: 1px solid var(--hb-border-light);
}

.hb-menu.hb-horizontal .hb-menu-item:last-child {
  border-right: none;
}

.hb-menu.hb-horizontal .hb-menu-item.hb-active {
  border-left: none;
  border-bottom: 3px solid var(--hb-primary-500);
}

/* TabView Styles */
.hb-tabview {
  border: 1px solid var(--hb-border-light);
  border-radius: var(--hb-border-radius-lg);
  background-color: var(--hb-bg-secondary);
  min-width: 400px;
}

.hb-tabview-nav {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid var(--hb-border-light);
  background-color: var(--hb-bg-primary);
  border-radius: var(--hb-border-radius-lg) var(--hb-border-radius-lg) 0 0;
}

.hb-tabview-nav-item {
  padding: var(--hb-spacing-3) var(--hb-spacing-4);
  cursor: pointer;
  border-right: 1px solid var(--hb-border-light);
  display: flex;
  align-items: center;
  color: var(--hb-text-secondary);
  transition: all 0.2s ease;
}

.hb-tabview-nav-item:last-child {
  border-right: none;
}

.hb-tabview-nav-item:hover {
  background-color: var(--hb-bg-hover);
  color: var(--hb-text-primary);
}

.hb-tabview-nav-item.hb-active {
  background-color: var(--hb-bg-secondary);
  color: var(--hb-primary-700);
  border-bottom: 2px solid var(--hb-primary-500);
}

.hb-tabview-nav-item-icon {
  margin-right: var(--hb-spacing-2);
  font-size: var(--hb-font-size-base);
}

.hb-tabview-content {
  padding: var(--hb-spacing-4);
}

.hb-tabview-panel {
  display: none;
}

.hb-tabview-panel.hb-active {
  display: block;
}

/* Accordion Styles */
.hb-accordion {
  border: 1px solid var(--hb-border-light);
  border-radius: var(--hb-border-radius-lg);
  background-color: var(--hb-bg-secondary);
  min-width: 400px;
}

.hb-accordion-tab {
  border-bottom: 1px solid var(--hb-border-light);
}

.hb-accordion-tab:last-child {
  border-bottom: none;
}

.hb-accordion-tab-header {
  width: 100%;
  padding: var(--hb-spacing-4);
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--hb-text-primary);
  font-weight: var(--hb-font-weight-medium);
  transition: all 0.2s ease;
}

.hb-accordion-tab-header:hover {
  background-color: var(--hb-bg-hover);
}

.hb-accordion-tab-header.hb-active {
  background-color: var(--hb-primary-50);
  color: var(--hb-primary-700);
}

.hb-accordion-tab-header-icon {
  margin-right: var(--hb-spacing-3);
  font-size: var(--hb-font-size-lg);
}

.hb-accordion-tab-header-toggle {
  width: 16px;
  height: 16px;
  position: relative;
  transition: transform 0.2s ease;
}

.hb-accordion-tab-header.hb-active .hb-accordion-tab-header-toggle {
  transform: rotate(180deg);
}

.hb-accordion-tab-header-toggle::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: currentColor;
  transform: translateY(-50%);
}

.hb-accordion-tab-header-toggle::after {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 2px;
  height: 100%;
  background-color: currentColor;
  transform: translateX(-50%);
}

.hb-accordion-tab-header.hb-active .hb-accordion-tab-header-toggle::after {
  display: none;
}

.hb-accordion-tab-content {
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.hb-accordion-tab-panel {
  padding: var(--hb-spacing-4);
  display: none;
}

.hb-accordion-tab-panel.hb-active {
  display: block;
}

/* Responsive design */
@media (max-width: 768px) {
  .hb-showcase-section {
    padding: var(--hb-spacing-6);
  }
  
  .hb-component-examples {
    flex-direction: column;
  }
  
  .hb-menu,
  .hb-menu.hb-horizontal,
  .hb-tabview,
  .hb-accordion {
    min-width: auto;
    width: 100%;
  }
  
  .hb-menu.hb-horizontal .hb-menu-list {
    flex-direction: column;
  }
  
  .hb-menu.hb-horizontal .hb-menu-item {
    border-right: none;
    border-bottom: 1px solid var(--hb-border-light);
  }
  
  .hb-menu.hb-horizontal .hb-menu-item.hb-active {
    border-bottom: 3px solid var(--hb-primary-500);
  }
}
</style> 