<template>
  <div class="hb-showcase">
    <!-- Size Control Component -->
    <div class="hb-size-controls">
      <h3>Global Size Presets</h3>
      <p>Test how all components scale together:</p>
      <div class="hb-size-buttons">
        <Button @click="setSize('xs')" size="small" :severity="currentSize === 'xs' ? 'primary' : 'secondary'">
          XS (75%)
        </Button>
        <Button @click="setSize('sm')" size="small" :severity="currentSize === 'sm' ? 'primary' : 'secondary'">
          SM (87.5%)
        </Button>
        <Button @click="setSize('normal')" size="small" :severity="currentSize === 'normal' ? 'primary' : 'secondary'">
          Normal (100%)
        </Button>
        <Button @click="setSize('lg')" size="small" :severity="currentSize === 'lg' ? 'primary' : 'secondary'">
          LG (125%)
        </Button>
        <Button @click="setSize('xl')" size="small" :severity="currentSize === 'xl' ? 'primary' : 'secondary'">
          XL (150%)
        </Button>
      </div>
    </div>

    <div class="hb-showcase-header">
      <h1 class="hb-showcase-title">HB Vue Theme - PrimeVue Component Showcase</h1>
      <p class="hb-showcase-description">
        A comprehensive showcase of PrimeVue components styled with the HB Vue Theme. 
        Use the size controls above to see how all components scale together.
      </p>
    </div>

    <div class="hb-showcase-content">
      <!-- Individual Component Showcases -->
      <ButtonShowcase />
      <FormComponentsShowcase />
      <MessageShowcase />
      <DataDisplayShowcase />
      <OverlayComponentsShowcase />
      <DataTableShowcase />
      <NavigationShowcase />
      <AdvancedFormShowcase />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ButtonShowcase from '@/components/showcase/ButtonShowcase.vue'
import FormComponentsShowcase from '@/components/showcase/FormComponentsShowcase.vue'
import MessageShowcase from '@/components/showcase/MessageShowcase.vue'
import DataDisplayShowcase from '@/components/showcase/DataDisplayShowcase.vue'
import OverlayComponentsShowcase from '@/components/showcase/OverlayComponentsShowcase.vue'
import DataTableShowcase from '@/components/showcase/DataTableShowcase.vue'
import NavigationShowcase from '@/components/showcase/NavigationShowcase.vue'
import AdvancedFormShowcase from '@/components/showcase/AdvancedFormShowcase.vue'

// Reactive data
const currentSize = ref('normal')

// Methods
const setSize = (size) => {
  console.log('setSize called with:', size)
  
  // Remove all size classes from body
  document.body.classList.remove('hb-size-xs', 'hb-size-sm', 'hb-size-normal', 'hb-size-lg', 'hb-size-xl')
  
  // Add the selected size class
  if (size !== 'normal') {
    document.body.classList.add(`hb-size-${size}`)
  }
  
  // Update current size
  currentSize.value = size
  console.log('currentSize updated to:', currentSize.value)
}

// Lifecycle
onMounted(() => {
  // Set initial size
  setSize('normal')
})
</script>

<style scoped>
/* =============================================================================
   COMPONENT SHOWCASE STYLES
   ============================================================================= */

/* Size Controls */
.hb-size-controls {
  position: sticky;
  top: var(--hb-spacing-4);
  z-index: 1000;
  background-color: var(--hb-bg-primary);
  border-radius: var(--hb-border-radius-lg);
  padding: var(--hb-spacing-6);
  margin-bottom: var(--hb-spacing-6);
  box-shadow: var(--hb-shadow-lg);
  border: 2px solid var(--hb-border-light);
}

.hb-size-controls h3 {
  font-size: var(--hb-font-size-xl);
  font-weight: var(--hb-font-weight-bold);
  color: var(--hb-text-primary);
  margin: 0 0 var(--hb-spacing-2) 0;
}

.hb-size-controls p {
  font-size: var(--hb-font-size-base);
  color: var(--hb-text-secondary);
  margin: 0 0 var(--hb-spacing-4) 0;
}

.hb-size-buttons {
  display: flex;
  gap: var(--hb-spacing-2);
  flex-wrap: wrap;
}

.hb-size-buttons .p-button {
  margin: 0;
}

.hb-showcase {
  max-width: 1400px;
  margin: 0 auto;
  padding: var(--hb-spacing-6);
  font-family: var(--hb-font-family-primary);
  background-color: var(--hb-bg-secondary);
  min-height: 100vh;
}

.hb-showcase-header {
  text-align: center;
  margin-bottom: var(--hb-spacing-8);
  padding: var(--hb-spacing-8);
  background-color: var(--hb-bg-primary);
  border-radius: var(--hb-border-radius-lg);
  box-shadow: var(--hb-shadow-md);
}

.hb-showcase-title {
  font-size: var(--hb-font-size-4xl);
  font-weight: var(--hb-font-weight-bold);
  color: var(--hb-text-primary);
  margin: 0 0 var(--hb-spacing-4) 0;
}

.hb-showcase-description {
  font-size: var(--hb-font-size-xl);
  color: var(--hb-text-secondary);
  margin: 0;
  line-height: var(--hb-line-height-relaxed);
}

.hb-showcase-content {
  display: flex;
  flex-direction: column;
  gap: var(--hb-spacing-8);
}

/* Responsive design */
@media (max-width: 768px) {
  .hb-size-controls {
    position: relative;
    top: auto;
    margin-bottom: var(--hb-spacing-4);
    padding: var(--hb-spacing-4);
  }
  
  .hb-size-buttons {
    flex-direction: column;
  }
  
  .hb-size-buttons .p-button {
    width: 100%;
  }
  
  .hb-showcase {
    padding: var(--hb-spacing-4);
  }
  
  .hb-showcase-header {
    padding: var(--hb-spacing-6);
  }
  
  .hb-showcase-title {
    font-size: var(--hb-font-size-3xl);
  }
  
  .hb-showcase-description {
    font-size: var(--hb-font-size-lg);
  }
}
</style> 