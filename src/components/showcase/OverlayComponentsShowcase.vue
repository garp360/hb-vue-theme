<template>
  <section class="hb-showcase-section">
    <h2 class="hb-section-title">Overlay Components</h2>
    
    <div class="hb-component-group">
      <h3 class="hb-group-title">Dialog Components</h3>
      <div class="hb-component-examples">
        <div class="hb-example-item">
          <label>Basic Dialog</label>
          <Button label="Show Dialog" @click="showBasicDialog = true" />
          <Dialog v-model:visible="showBasicDialog" header="Basic Dialog" :style="{ width: '50vw' }" :modal="true">
            <p>This is a basic dialog component. You can put any content inside.</p>
            <template #footer>
              <Button label="Cancel" @click="showBasicDialog = false" text />
              <Button label="Save" @click="showBasicDialog = false" />
            </template>
          </Dialog>
        </div>
        
        <div class="hb-example-item">
          <label>Confirmation Dialog</label>
          <Button label="Delete Item" severity="danger" @click="showConfirmDialog = true" />
          <Dialog v-model:visible="showConfirmDialog" header="Confirm Deletion" :style="{ width: '400px' }" :modal="true">
            <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem 0;">
              <i class="pi pi-exclamation-triangle" style="font-size: 2rem; color: var(--hb-warning-500);"></i>
              <div>
                <p style="margin: 0 0 0.5rem 0; font-weight: 600;">Are you sure?</p>
                <p style="margin: 0; color: var(--hb-text-secondary);">This action cannot be undone.</p>
              </div>
            </div>
            <template #footer>
              <Button label="Cancel" @click="showConfirmDialog = false" text />
              <Button label="Delete" severity="danger" @click="showConfirmDialog = false" />
            </template>
          </Dialog>
        </div>
        
        <div class="hb-example-item">
          <label>Form Dialog</label>
          <Button label="Add User" @click="showFormDialog = true" />
          <Dialog v-model:visible="showFormDialog" header="Add New User" :style="{ width: '500px' }" :modal="true">
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <div>
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Name</label>
                <InputText v-model="formData.name" placeholder="Enter name" style="width: 100%;" />
              </div>
              <div>
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Email</label>
                <InputText v-model="formData.email" placeholder="Enter email" style="width: 100%;" />
              </div>
              <div>
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Role</label>
                <Select v-model="formData.role" :options="roleOptions" placeholder="Select role" style="width: 100%;" />
              </div>
            </div>
            <template #footer>
              <Button label="Cancel" @click="showFormDialog = false" text />
              <Button label="Save" @click="showFormDialog = false" />
            </template>
          </Dialog>
        </div>
      </div>
    </div>

    <div class="hb-component-group">
      <h3 class="hb-group-title">Drawer Components</h3>
      <div class="hb-component-examples">
        <div class="hb-example-item">
          <label>Right Drawer</label>
          <Button label="Open Right Drawer" @click="showRightDrawer = true" />
          <Drawer v-model:visible="showRightDrawer" position="right" :style="{ width: '30rem' }" header="Right Drawer">
            <div style="padding: 1rem;">
              <h3>Drawer Content</h3>
              <p>This is a right-side drawer component. It slides in from the right side of the screen.</p>
              <div style="margin-top: 2rem;">
                <Button label="Close" @click="showRightDrawer = false" />
              </div>
            </div>
          </Drawer>
        </div>
        
        <div class="hb-example-item">
          <label>Left Drawer</label>
          <Button label="Open Left Drawer" @click="showLeftDrawer = true" />
          <Drawer v-model:visible="showLeftDrawer" position="left" :style="{ width: '25rem' }" header="Left Drawer">
            <div style="padding: 1rem;">
              <h3>Navigation Menu</h3>
              <ul style="list-style: none; padding: 0; margin: 1rem 0;">
                <li style="padding: 0.75rem 0; border-bottom: 1px solid var(--hb-border-light);">
                  <a href="#" style="text-decoration: none; color: var(--hb-text-primary); display: flex; align-items: center; gap: 0.5rem;">
                    <i class="pi pi-home"></i>
                    Dashboard
                  </a>
                </li>
                <li style="padding: 0.75rem 0; border-bottom: 1px solid var(--hb-border-light);">
                  <a href="#" style="text-decoration: none; color: var(--hb-text-primary); display: flex; align-items: center; gap: 0.5rem;">
                    <i class="pi pi-user"></i>
                    Profile
                  </a>
                </li>
                <li style="padding: 0.75rem 0; border-bottom: 1px solid var(--hb-border-light);">
                  <a href="#" style="text-decoration: none; color: var(--hb-text-primary); display: flex; align-items: center; gap: 0.5rem;">
                    <i class="pi pi-cog"></i>
                    Settings
                  </a>
                </li>
              </ul>
            </div>
          </Drawer>
        </div>
      </div>
    </div>

    <div class="hb-component-group">
      <h3 class="hb-group-title">Tooltip Components</h3>
      <div class="hb-component-examples">
        <div class="hb-example-item">
          <label>Basic Tooltips</label>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <Button label="Top Tooltip" v-tooltip.top="'This is a top tooltip'" />
            <Button label="Bottom Tooltip" v-tooltip.bottom="'This is a bottom tooltip'" />
            <Button label="Left Tooltip" v-tooltip.left="'This is a left tooltip'" />
            <Button label="Right Tooltip" v-tooltip.right="'This is a right tooltip'" />
          </div>
        </div>
        
        <div class="hb-example-item">
          <label>Tooltip with HTML</label>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <Button label="Rich Tooltip" v-tooltip.top="'<strong>Bold text</strong><br><em>Italic text</em><br>Regular text'" />
            <Button label="Info Tooltip" v-tooltip.bottom="'<i class=\'pi pi-info-circle\'></i> Information tooltip'" />
          </div>
        </div>
      </div>
    </div>

    <div class="hb-component-group">
      <h3 class="hb-group-title">Popover Components</h3>
      <div class="hb-component-examples">
        <div class="hb-example-item">
          <label>Basic Popover</label>
          <Popover>
            <template #reference>
              <Button label="Show Popover" />
            </template>
            <template #content>
              <div style="padding: 1rem; max-width: 300px;">
                <h4 style="margin: 0 0 0.5rem 0;">Popover Title</h4>
                <p style="margin: 0; color: var(--hb-text-secondary);">This is a popover component with custom content.</p>
              </div>
            </template>
          </Popover>
        </div>
        
        <div class="hb-example-item">
          <label>Popover with Actions</label>
          <Popover>
            <template #reference>
              <Button label="Actions" severity="secondary" />
            </template>
            <template #content>
              <div style="padding: 1rem; min-width: 200px;">
                <h4 style="margin: 0 0 1rem 0;">Quick Actions</h4>
                <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                  <Button label="Edit" icon="pi pi-pencil" text style="justify-content: flex-start;" />
                  <Button label="Delete" icon="pi pi-trash" text severity="danger" style="justify-content: flex-start;" />
                  <Button label="Share" icon="pi pi-share-alt" text style="justify-content: flex-start;" />
                </div>
              </div>
            </template>
          </Popover>
        </div>
      </div>
    </div>

    <div class="hb-component-group">
      <h3 class="hb-group-title">OverlayPanel Components</h3>
      <div class="hb-component-examples">
        <div class="hb-example-item">
          <label>Basic OverlayPanel</label>
          <OverlayPanel ref="op">
            <template #reference>
              <Button label="Show Panel" />
            </template>
            <div style="padding: 1rem; min-width: 250px;">
              <h4 style="margin: 0 0 1rem 0;">Overlay Panel</h4>
              <p style="margin: 0 0 1rem 0; color: var(--hb-text-secondary);">This is an overlay panel that appears on click.</p>
              <div style="display: flex; gap: 0.5rem;">
                <Button label="Action 1" size="small" />
                <Button label="Action 2" severity="secondary" size="small" />
              </div>
            </div>
          </OverlayPanel>
        </div>
        
        <div class="hb-example-item">
          <label>OverlayPanel with Form</label>
          <OverlayPanel ref="formOp">
            <template #reference>
              <Button label="Quick Add" severity="success" />
            </template>
            <div style="padding: 1rem; min-width: 300px;">
              <h4 style="margin: 0 0 1rem 0;">Quick Add Item</h4>
              <div style="display: flex; flex-direction: column; gap: 1rem;">
                <div>
                  <label style="display: block; margin-bottom: 0.25rem; font-size: 0.875rem;">Title</label>
                  <InputText v-model="quickAddData.title" placeholder="Enter title" style="width: 100%;" />
                </div>
                <div>
                  <label style="display: block; margin-bottom: 0.25rem; font-size: 0.875rem;">Description</label>
                  <Textarea v-model="quickAddData.description" placeholder="Enter description" rows="3" style="width: 100%;" />
                </div>
                <div style="display: flex; gap: 0.5rem;">
                  <Button label="Add" size="small" @click="formOp.hide()" />
                  <Button label="Cancel" severity="secondary" size="small" text @click="formOp.hide()" />
                </div>
              </div>
            </div>
          </OverlayPanel>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Dialog from 'primevue/dialog'
import Drawer from 'primevue/drawer'
import Tooltip from 'primevue/tooltip'
import Popover from 'primevue/popover'
import OverlayPanel from 'primevue/overlaypanel'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Select from 'primevue/select'

// Dialog states
const showBasicDialog = ref(false)
const showConfirmDialog = ref(false)
const showFormDialog = ref(false)

// Drawer states
const showRightDrawer = ref(false)
const showLeftDrawer = ref(false)

// OverlayPanel refs
const op = ref()
const formOp = ref()

// Form data
const formData = ref({
  name: '',
  email: '',
  role: null
})

const quickAddData = ref({
  title: '',
  description: ''
})

const roleOptions = ref([
  { label: 'Admin', value: 'admin' },
  { label: 'User', value: 'user' },
  { label: 'Editor', value: 'editor' },
  { label: 'Viewer', value: 'viewer' }
])
</script>

<style scoped>
/* =============================================================================
   OVERLAY COMPONENTS SHOWCASE STYLES
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

/* Component-specific spacing */
.hb-component-examples .hb-button {
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
  
  .hb-example-item {
    width: 100%;
  }
}
</style> 