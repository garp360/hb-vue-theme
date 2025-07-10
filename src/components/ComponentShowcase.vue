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
      <!-- Buttons Section -->
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

      <!-- Form Components Section -->
      <section class="hb-showcase-section">
        <h2 class="hb-section-title">Form Components</h2>
        
        <div class="hb-component-group">
          <h3 class="hb-group-title">Input Components</h3>
          <div class="hb-component-examples">
            <div class="hb-example-item">
              <label>Default Input</label>
              <InputText v-model="formData.text" placeholder="Enter text..." />
            </div>
            
            <div class="hb-example-item">
              <label>Small Input</label>
              <InputText v-model="formData.textSmall" placeholder="Small input..." size="small" />
            </div>
            
            <div class="hb-example-item">
              <label>Large Input</label>
              <InputText v-model="formData.textLarge" placeholder="Large input..." size="large" />
            </div>
            
            <div class="hb-example-item">
              <label>Disabled Input</label>
              <InputText v-model="formData.textDisabled" placeholder="Disabled input..." disabled />
            </div>
            
            <div class="hb-example-item">
              <label>Password Input</label>
              <InputText v-model="formData.password" type="password" placeholder="Enter password..." />
            </div>
          </div>
        </div>

        <div class="hb-component-group">
          <h3 class="hb-group-title">Textarea Components</h3>
          <div class="hb-component-examples">
            <div class="hb-example-item">
              <label>Default Textarea</label>
              <Textarea v-model="formData.textarea" placeholder="Enter your message..." rows="3" />
            </div>
            
            <div class="hb-example-item">
              <label>Auto Resize Textarea</label>
              <Textarea v-model="formData.textareaAuto" placeholder="Auto resize textarea..." autoResize />
            </div>
            
            <div class="hb-example-item">
              <label>Disabled Textarea</label>
              <Textarea v-model="formData.textareaDisabled" placeholder="Disabled textarea..." disabled />
            </div>
          </div>
        </div>

        <div class="hb-component-group">
          <h3 class="hb-group-title">Checkbox Components</h3>
          <div class="hb-component-examples">
            <div class="hb-example-item">
              <Checkbox v-model="formData.checkbox1" :binary="true" />
              <label>Default Checkbox</label>
            </div>
            
            <div class="hb-example-item">
              <Checkbox v-model="formData.checkbox2" :binary="true" />
              <label>Disabled Checkbox</label>
            </div>
            
            <div class="hb-example-item">
              <Checkbox v-model="formData.checkbox3" :binary="true" />
              <label>Small Checkbox</label>
            </div>
          </div>
        </div>

        <div class="hb-component-group">
          <h3 class="hb-group-title">Radio Button Components</h3>
          <div class="hb-component-examples">
            <div class="hb-example-item">
              <RadioButton v-model="formData.radio" name="radio1" value="option1" />
              <label>Option 1</label>
            </div>
            
            <div class="hb-example-item">
              <RadioButton v-model="formData.radio" name="radio1" value="option2" />
              <label>Option 2</label>
            </div>
            
            <div class="hb-example-item">
              <RadioButton v-model="formData.radio" name="radio1" value="option3" />
              <label>Option 3</label>
            </div>
          </div>
        </div>

        <div class="hb-component-group">
          <h3 class="hb-group-title">Chip Components</h3>
          <div class="hb-component-examples">
            <div class="hb-example-item">
              <label>Default Chips</label>
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <Chip label="Default" />
                <Chip label="Primary" severity="primary" />
                <Chip label="Success" severity="success" />
                <Chip label="Warning" severity="warn" />
                <Chip label="Danger" severity="danger" />
              </div>
            </div>
            
            <div class="hb-example-item">
              <label>Chip Sizes</label>
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
                <Chip label="Small" size="small" />
                <Chip label="Normal" />
                <Chip label="Large" size="large" />
              </div>
            </div>
            
            <div class="hb-example-item">
              <label>Chips with Icons</label>
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <Chip label="User" icon="pi pi-user" />
                <Chip label="Email" icon="pi pi-envelope" severity="info" />
                <Chip label="Settings" icon="pi pi-cog" severity="secondary" />
              </div>
            </div>
            
            <div class="hb-example-item">
              <label>Removable Chips</label>
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <Chip label="Removable" removable />
                <Chip label="Primary" severity="primary" removable />
                <Chip label="Success" severity="success" removable />
              </div>
            </div>
          </div>
        </div>

        <div class="hb-component-group">
          <h3 class="hb-group-title">Select Components</h3>
          <div class="hb-component-examples">
            <div class="hb-example-item">
              <label>Default Select</label>
              <Select v-model="formData.select" :options="selectOptions" optionLabel="name" placeholder="Select an option" />
            </div>
            
            <div class="hb-example-item">
              <label>Multiple Select</label>
              <Select v-model="formData.selectMultiple" :options="selectOptions" optionLabel="name" placeholder="Select multiple options" multiple />
            </div>
            
            <div class="hb-example-item">
              <label>Disabled Select</label>
              <Select v-model="formData.selectDisabled" :options="selectOptions" optionLabel="name" placeholder="Disabled select" disabled />
            </div>
          </div>
        </div>

        <div class="hb-component-group">
          <h3 class="hb-group-title">Date Picker Components</h3>
          <div class="hb-component-examples">
            <div class="hb-example-item">
              <label>Default Date Picker</label>
              <DatePicker v-model="formData.date" placeholder="Select date" />
            </div>
            
            <div class="hb-example-item">
              <label>Date Range Picker</label>
              <DatePicker v-model="formData.dateRange" selectionMode="range" placeholder="Select date range" />
            </div>
            
            <div class="hb-example-item">
              <label>Disabled Date Picker</label>
              <DatePicker v-model="formData.dateDisabled" placeholder="Disabled date picker" disabled />
            </div>
          </div>
        </div>
      </section>

      <!-- Messages Section -->
      <section class="hb-showcase-section">
        <h2 class="hb-section-title">Message Components</h2>
        
        <div class="hb-component-group">
          <h3 class="hb-group-title">Message Severities</h3>
          <div class="hb-component-examples">
            <Message severity="info" text="This is an informational message" />
            <Message severity="success" text="This is a success message" />
            <Message severity="warn" text="This is a warning message" />
            <Message severity="error" text="This is an error message" />
          </div>
        </div>

        <div class="hb-component-group">
          <h3 class="hb-group-title">Message with Content</h3>
          <div class="hb-component-examples">
            <Message severity="info">
              <template #messageicon>
                <i class="pi pi-info-circle"></i>
              </template>
              <strong>Info:</strong> This message has custom content and an icon.
            </Message>
            
            <Message severity="success">
              <template #messageicon>
                <i class="pi pi-check-circle"></i>
              </template>
              <strong>Success:</strong> Operation completed successfully!
            </Message>
          </div>
        </div>
      </section>

      <!-- Data Display Section -->
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
          </div>
        </div>

        <div class="hb-component-group">
          <h3 class="hb-group-title">Panel Components</h3>
          <div class="hb-component-examples">
            <Panel header="Collapsible Panel" :collapsible="true">
              <p>This is a collapsible panel component. Click the header to expand/collapse.</p>
              <p>You can put any content inside the panel body.</p>
            </Panel>
            
            <Panel header="Panel with Icons" :toggleable="true">
              <template #headericon>
                <i class="pi pi-user"></i>
              </template>
              <p>This panel has a custom header icon and is toggleable.</p>
            </Panel>
          </div>
        </div>

        <div class="hb-component-group">
          <h3 class="hb-group-title">Data Table</h3>
          <div class="hb-component-examples">
            <DataTable :value="tableData" :paginator="true" :rows="5" 
                      :rowsPerPageOptions="[5, 10, 20]" 
                      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                      currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries">
              <Column field="id" header="ID" sortable></Column>
              <Column field="name" header="Name" sortable></Column>
              <Column field="email" header="Email" sortable></Column>
              <Column field="status" header="Status" sortable>
                <template #body="slotProps">
                  <span :class="`status-${slotProps.data.status.toLowerCase()}`">
                    {{ slotProps.data.status }}
                  </span>
                </template>
              </Column>
            </DataTable>
          </div>
        </div>
      </section>

      <!-- Overlay Components Section -->
      <section class="hb-showcase-section">
        <h2 class="hb-section-title">Overlay Components</h2>
        
        <div class="hb-component-group">
          <h3 class="hb-group-title">Dialog Components</h3>
          <div class="hb-component-examples">
            <Button label="Show Dialog" @click="showDialog = true" severity="primary" />
            
            <Dialog v-model:visible="showDialog" modal header="Sample Dialog" :style="{ width: '50vw' }">
              <p>This is a modal dialog component. You can put any content here.</p>
              <p>It includes a header, content area, and footer with action buttons.</p>
              
              <template #footer>
                <Button label="Cancel" @click="showDialog = false" text />
                <Button label="Save" @click="showDialog = false" severity="primary" />
              </template>
            </Dialog>
          </div>
        </div>

        <div class="hb-component-group">
          <h3 class="hb-group-title">Tooltip Components</h3>
          <div class="hb-component-examples">
            <Button label="Hover for tooltip" severity="secondary" />
            
            <Button label="Top tooltip" severity="info" />
            
            <Button label="Bottom tooltip" severity="warning" />
            
            <Button label="Left tooltip" severity="danger" />
            
            <Button label="Right tooltip" severity="help" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Reactive data
const currentSize = ref('normal')
const showDialog = ref(false)

const formData = ref({
  text: '',
  textSmall: '',
  textLarge: '',
  textDisabled: 'Disabled text',
  password: '',
  textarea: '',
  textareaAuto: '',
  textareaDisabled: 'Disabled textarea content',
  checkbox1: false,
  checkbox2: false,
  checkbox3: false,
  radio: 'option1',
  select: null,
  selectMultiple: [],
  selectDisabled: null,
  date: null,
  dateRange: null,
  dateDisabled: null
})

const selectOptions = ref([
  { name: 'Option 1', value: 'option1' },
  { name: 'Option 2', value: 'option2' },
  { name: 'Option 3', value: 'option3' },
  { name: 'Option 4', value: 'option4' },
  { name: 'Option 5', value: 'option5' }
])

const tableData = ref([
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'Active' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', status: 'Pending' },
  { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', status: 'Active' },
  { id: 6, name: 'Diana Davis', email: 'diana@example.com', status: 'Inactive' },
  { id: 7, name: 'Edward Miller', email: 'edward@example.com', status: 'Active' },
  { id: 8, name: 'Fiona Garcia', email: 'fiona@example.com', status: 'Pending' }
])

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
.hb-component-examples .p-button {
  margin-right: var(--hb-spacing-2);
  margin-bottom: var(--hb-spacing-2);
}

.hb-component-examples .hb-inputtext,
.hb-component-examples .hb-select,
.hb-component-examples .hb-datepicker-input {
  min-width: 200px;
}

.hb-component-examples .hb-textarea {
  min-width: 300px;
}

.hb-component-examples .p-card {
  margin-bottom: var(--hb-spacing-4);
}

.hb-component-examples .p-panel {
  margin-bottom: var(--hb-spacing-4);
  width: 100%;
}

.hb-component-examples .p-datatable {
  width: 100%;
  margin-bottom: var(--hb-spacing-4);
}

.hb-component-examples .p-message {
  width: 100%;
  margin-bottom: var(--hb-spacing-2);
}

/* Status indicators for table */
.status-active {
  color: var(--hb-success);
  font-weight: var(--hb-font-weight-semibold);
}

.status-inactive {
  color: var(--hb-text-muted);
  font-weight: var(--hb-font-weight-semibold);
}

.status-pending {
  color: var(--hb-warning);
  font-weight: var(--hb-font-weight-semibold);
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
  
  .hb-showcase-section {
    padding: var(--hb-spacing-6);
  }
  
  .hb-component-examples {
    flex-direction: column;
  }
  
  .hb-example-item {
    width: 100%;
  }
  
  .hb-component-examples .p-inputtext,
  .hb-component-examples .p-dropdown,
  .hb-component-examples .p-calendar,
  .hb-component-examples .p-textarea {
    width: 100%;
  }
}
</style> 