<template>
  <div id="app" class="hb-app">
    <header class="hb-header">
      <h1 class="hb-title">HB Vue Theme - PrimeVue 4 Design Tokens</h1>
      <p class="hb-subtitle">Custom theme using PrimeVue 4's design token system</p>
      <div class="hb-version-info">
        <span class="hb-badge hb-badge-success">✅ Published Library v1.0.1</span>
        <span class="hb-badge hb-badge-info">📦 npm: hb-vue-theme</span>
      </div>
    </header>
    
    <main class="hb-main">
      <ComponentShowcase />
      <DataTableDemo />
      <ExtendedComponentShowcase />
      <AdvancedComponentShowcase />
    </main>
    
    <footer class="hb-footer">
      <p>Built with Vue 3, PrimeVue 4, and Design Tokens</p>
    </footer>
  </div>
</template>

<script>
import DataTableDemo from './components/DataTableDemo.vue'
import ComponentShowcase from './components/ComponentShowcase.vue'
import ExtendedComponentShowcase from './components/ExtendedComponentShowcase.vue'
import AdvancedComponentShowcase from './components/AdvancedComponentShowcase.vue'

export default {
  name: 'App',
  components: {
    DataTableDemo,
    ComponentShowcase,
    ExtendedComponentShowcase,
    AdvancedComponentShowcase
  },
  mounted() {
    // Log theme information
    if (this.$hbTheme) {
      console.log('Theme Info:', this.$hbTheme.getInfo())
    }
  }
}
</script>

<style>
/* =============================================================================
   HB VUE THEME - APP STYLES USING DESIGN TOKENS
   ============================================================================= */

/* Base app styles using our design tokens */
.hb-app {
  min-height: 100vh;
  background-color: var(--hb-bg-secondary);
  font-family: var(--hb-font-family-primary);
  color: var(--hb-text-primary);
  line-height: var(--hb-line-height-normal);
}

/* Header styles */
.hb-header {
  background-color: var(--hb-bg-primary);
  padding: var(--hb-spacing-8) var(--hb-spacing-4);
  text-align: center;
  box-shadow: var(--hb-shadow-sm);
  border-bottom: 1px solid var(--hb-border-light);
}

.hb-title {
  font-size: var(--hb-font-size-3xl);
  font-weight: var(--hb-font-weight-bold);
  color: var(--hb-text-primary);
  margin: 0 0 var(--hb-spacing-2) 0;
}

.hb-subtitle {
  font-size: var(--hb-font-size-lg);
  color: var(--hb-text-secondary);
  margin: 0;
  font-weight: var(--hb-font-weight-normal);
}

/* Main content */
.hb-main {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--hb-spacing-8) var(--hb-spacing-4);
}

/* Version info badges */
.hb-version-info {
  margin-top: var(--hb-spacing-4);
  display: flex;
  justify-content: center;
  gap: var(--hb-spacing-3);
  flex-wrap: wrap;
}

.hb-badge {
  display: inline-block;
  padding: var(--hb-spacing-1) var(--hb-spacing-3);
  border-radius: var(--hb-border-radius-full);
  font-size: var(--hb-font-size-sm);
  font-weight: var(--hb-font-weight-medium);
  text-transform: uppercase;
  letter-spacing: 0.025em;
}

.hb-badge-success {
  background-color: var(--hb-success-100);
  color: var(--hb-success-700);
  border: 1px solid var(--hb-success-200);
}

.hb-badge-info {
  background-color: var(--hb-info-100);
  color: var(--hb-info-700);
  border: 1px solid var(--hb-info-200);
}

/* Footer */
.hb-footer {
  background-color: var(--hb-bg-primary);
  padding: var(--hb-spacing-6) var(--hb-spacing-4);
  text-align: center;
  border-top: 1px solid var(--hb-border-light);
  color: var(--hb-text-secondary);
  font-size: var(--hb-font-size-sm);
}

/* Responsive design */
@media (max-width: 768px) {
  .hb-header {
    padding: var(--hb-spacing-6) var(--hb-spacing-3);
  }
  
  .hb-title {
    font-size: var(--hb-font-size-2xl);
  }
  
  .hb-subtitle {
    font-size: var(--hb-font-size-base);
  }
  
  .hb-main {
    padding: var(--hb-spacing-6) var(--hb-spacing-3);
  }
}
</style> 