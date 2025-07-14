<template>
  <section class="hb-showcase-section">
    <h2 class="hb-section-title">Data Display Components</h2>
    
    <div class="hb-component-group">
      <h3 class="hb-group-title">Card Components</h3>
      <div class="hb-component-examples">
        <Card style="width: 300px">
          <template #title>
            Basic Card
          </template>
          <template #content>
            <p>This is a basic card component with title and content.</p>
          </template>
        </Card>
        
        <Card style="width: 300px">
          <template #title>
            Card with Footer
          </template>
          <template #content>
            <p>This card has a footer with action buttons.</p>
          </template>
          <template #footer>
            <Button label="Save" icon="pi pi-check" />
            <Button label="Cancel" severity="secondary" text />
          </template>
        </Card>
        
        <Card style="width: 300px">
          <template #header>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <i class="pi pi-user" style="font-size: 1.5rem; color: var(--hb-primary-500);"></i>
              <span>User Profile</span>
            </div>
          </template>
          <template #content>
            <div style="text-align: center; padding: 1rem;">
              <div style="width: 80px; height: 80px; border-radius: 50%; background-color: var(--hb-primary-100); display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;">
                <i class="pi pi-user" style="font-size: 2rem; color: var(--hb-primary-500);"></i>
              </div>
              <h3 style="margin: 0 0 0.5rem 0;">John Doe</h3>
              <p style="margin: 0; color: var(--hb-text-secondary);">Software Developer</p>
            </div>
          </template>
        </Card>
      </div>
    </div>

    <div class="hb-component-group">
      <h3 class="hb-group-title">Panel Components</h3>
      <div class="hb-component-examples">
        <Panel header="Collapsible Panel" :collapsible="true" style="width: 400px;">
          <p>This is a collapsible panel component. Click the header to expand/collapse.</p>
          <p>You can put any content inside the panel body.</p>
        </Panel>
        
        <Panel header="Panel with Icons" :toggleable="true" style="width: 400px;">
          <template #headericon>
            <i class="pi pi-user"></i>
          </template>
          <p>This panel has a custom header icon and is toggleable.</p>
        </Panel>
        
        <Panel header="Panel with Footer" style="width: 400px;">
          <p>This panel has a footer with action buttons.</p>
          <template #footer>
            <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
              <Button label="Cancel" severity="secondary" text />
              <Button label="Save" icon="pi pi-check" />
            </div>
          </template>
        </Panel>
      </div>
    </div>

    <div class="hb-component-group">
      <h3 class="hb-group-title">Avatar Components</h3>
      <div class="hb-component-examples">
        <div class="hb-example-item">
          <label>Avatar Sizes</label>
          <div style="display: flex; gap: 0.5rem; align-items: center;">
            <Avatar label="JD" size="small" />
            <Avatar label="JD" />
            <Avatar label="JD" size="large" />
            <Avatar label="JD" size="xlarge" />
          </div>
        </div>
        
        <div class="hb-example-item">
          <label>Avatar with Image</label>
          <div style="display: flex; gap: 0.5rem; align-items: center;">
            <Avatar image="https://via.placeholder.com/150" />
            <Avatar image="https://via.placeholder.com/150" size="large" />
          </div>
        </div>
        
        <div class="hb-example-item">
          <label>Avatar with Icons</label>
          <div style="display: flex; gap: 0.5rem; align-items: center;">
            <Avatar icon="pi pi-user" />
            <Avatar icon="pi pi-cog" />
            <Avatar icon="pi pi-home" />
          </div>
        </div>
      </div>
    </div>

    <div class="hb-component-group">
      <h3 class="hb-group-title">Divider Components</h3>
      <div class="hb-component-examples">
        <div class="hb-example-item">
          <label>Horizontal Divider</label>
          <div style="padding: 1rem;">
            <p>Content above the divider</p>
            <Divider />
            <p>Content below the divider</p>
          </div>
        </div>
        
        <div class="hb-example-item">
          <label>Vertical Divider</label>
          <div style="display: flex; align-items: center; gap: 1rem;">
            <span>Left content</span>
            <Divider layout="vertical" />
            <span>Right content</span>
          </div>
        </div>
        
        <div class="hb-example-item">
          <label>Divider with Text</label>
          <div style="padding: 1rem;">
            <p>Content above</p>
            <Divider>
              <span class="hb-divider-text">OR</span>
            </Divider>
            <p>Content below</p>
          </div>
        </div>
      </div>
    </div>

    <div class="hb-component-group">
      <h3 class="hb-group-title">ScrollTop Component</h3>
      <div class="hb-component-examples">
        <div class="hb-example-item">
          <label>Scroll to Top Button</label>
          <div style="height: 200px; overflow-y: auto; border: 1px solid var(--hb-border-light); padding: 1rem; border-radius: var(--hb-border-radius-md);">
            <p>Scroll down to see the scroll to top button...</p>
            <div style="height: 500px; background: linear-gradient(to bottom, var(--hb-primary-50), var(--hb-primary-100)); display: flex; align-items: center; justify-content: center; border-radius: var(--hb-border-radius-md);">
              <p>Bottom of scrollable content</p>
            </div>
          </div>
          <ScrollTop />
        </div>
      </div>
    </div>

    <div class="hb-component-group">
      <h3 class="hb-group-title">Skeleton Components</h3>
      <div class="hb-component-examples">
        <div class="hb-example-item">
          <label>Text Skeleton</label>
          <div style="width: 300px;">
            <Skeleton height="1rem" styleClass="mb-2" />
            <Skeleton width="60%" height="1rem" />
          </div>
        </div>
        
        <div class="hb-example-item">
          <label>Card Skeleton</label>
          <div style="width: 300px; border: 1px solid var(--hb-border-light); border-radius: var(--hb-border-radius-lg); padding: 1rem;">
            <Skeleton shape="circle" size="4rem" styleClass="mb-2" />
            <Skeleton height="1rem" styleClass="mb-2" />
            <Skeleton width="60%" height="1rem" />
          </div>
        </div>
        
        <div class="hb-example-item">
          <label>List Skeleton</label>
          <div style="width: 300px;">
            <Skeleton height="2rem" styleClass="mb-2" />
            <Skeleton height="2rem" styleClass="mb-2" />
            <Skeleton height="2rem" styleClass="mb-2" />
            <Skeleton height="2rem" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Card from 'primevue/card'
import Panel from 'primevue/panel'
import Avatar from 'primevue/avatar'
import Divider from 'primevue/divider'
import ScrollTop from 'primevue/scrolltop'
import Skeleton from 'primevue/skeleton'
import Button from 'primevue/button'
</script>

<style scoped>
/* =============================================================================
   DATA DISPLAY SHOWCASE STYLES
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

.hb-example-item {
  display: flex;
  flex-direction: column;
  gap: var(--hb-spacing-2);
  min-width: 200px;
}

.hb-example-item label {
  font-weight: var(--hb-font-weight-medium);
  color: var(--hb-text-primary);
  font-size: var(--hb-font-size-sm);
}

/* Divider Text Styles */
.hb-divider-text {
  background-color: var(--hb-bg-primary);
  padding: 0 var(--hb-spacing-3);
  color: var(--hb-text-secondary);
  font-size: var(--hb-font-size-sm);
  font-weight: var(--hb-font-weight-medium);
}

/* Component-specific spacing */
.hb-component-examples .hb-card {
  margin-bottom: var(--hb-spacing-4);
}

.hb-component-examples .hb-panel {
  margin-bottom: var(--hb-spacing-4);
  width: 100%;
}

/* Responsive design */
@media (max-width: 768px) {
  .hb-showcase-section {
    padding: var(--hb-spacing-6);
  }
  
  .hb-component-examples {
    flex-direction: column;
  }
  
  .hb-example-item {
    width: 100%;
  }
  
  .hb-component-examples .hb-card,
  .hb-component-examples .hb-panel {
    width: 100% !important;
  }
}
</style> 