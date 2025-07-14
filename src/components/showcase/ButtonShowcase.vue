<template>
  <section class="hb-showcase-section">
    <h2 class="hb-section-title">Button Components</h2>
    
    <div class="hb-component-group">
      <h3 class="hb-group-title">Button Severities</h3>
      <div class="hb-component-examples">
        <Button label="Primary" severity="primary" />
        <Button label="Secondary" severity="secondary" />
        <Button label="Success" severity="success" />
        <Button label="Info" severity="info" />
        <Button label="Warning" severity="warning" />
        <Button label="Danger" severity="danger" />
        <Button label="Help" severity="help" />
      </div>
    </div>

    <div class="hb-component-group">
      <h3 class="hb-group-title">Button Variants</h3>
      <div class="hb-component-examples">
        <Button label="Filled" severity="primary" />
        <Button label="Outlined" severity="primary" outlined />
        <Button label="Text" severity="primary" text />
        <Button label="Link" severity="primary" link />
      </div>
    </div>

    <div class="hb-component-group">
      <h3 class="hb-group-title">Button Sizes</h3>
      <div class="hb-component-examples">
        <Button label="Small" severity="primary" size="small" />
        <Button label="Normal" severity="primary" />
        <Button label="Large" severity="primary" size="large" />
      </div>
    </div>

    <div class="hb-component-group">
      <h3 class="hb-group-title">Button States</h3>
      <div class="hb-component-examples">
        <Button label="Normal" severity="primary" />
        <Button label="Disabled" severity="primary" disabled />
        <Button label="Loading" severity="primary" loading />
      </div>
    </div>

    <div class="hb-component-group">
      <h3 class="hb-group-title">Button with Icons</h3>
      <div class="hb-component-examples">
        <Button icon="pi pi-check" severity="success" />
        <Button label="Save" icon="pi pi-check" severity="success" />
        <Button label="Save" icon="pi pi-check" iconPos="right" severity="success" />
        <Button label="Delete" icon="pi pi-trash" severity="danger" />
      </div>
    </div>
  </section>
</template>

<script setup>
// No additional logic needed for this showcase component
</script>

<style scoped>
/* =============================================================================
   BUTTON SHOWCASE STYLES
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

/* Component-specific spacing */
.hb-component-examples .p-button {
  margin-right: var(--hb-spacing-2);
  margin-bottom: var(--hb-spacing-2);
}

/* Responsive design */
@media (max-width: 768px) {
  .hb-showcase-section {
    padding: var(--hb-spacing-6);
  }
  
  .hb-component-examples {
    flex-direction: column;
  }
  
  .hb-component-examples .p-button {
    width: 100%;
    margin-right: 0;
  }
}
</style> 