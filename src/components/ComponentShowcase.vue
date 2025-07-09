<template>
  <div class="hb-showcase">
    <div class="hb-showcase-header">
      <h1 class="hb-showcase-title">HB Vue Theme - PrimeVue Component Showcase</h1>
      <p class="hb-showcase-description">
        A comprehensive showcase of PrimeVue components styled with the HB Vue Theme
      </p>
    </div>

    <div class="hb-showcase-content">
      <!-- Form Components Section -->
      <section class="hb-showcase-section">
        <h2 class="hb-section-title">Form Components</h2>
        
        <!-- Input Components -->
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

        <!-- Textarea Components -->
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

        <!-- Checkbox Components -->
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

        <!-- Radio Button Components -->
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

        <!-- Select Components -->
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

        <!-- DatePicker Components -->
        <div class="hb-component-group">
          <h3 class="hb-group-title">DatePicker Components</h3>
          <div class="hb-component-examples">
            <div class="hb-example-item">
              <label>Default DatePicker</label>
              <DatePicker v-model="formData.date" placeholder="Select date" />
            </div>
            
            <div class="hb-example-item">
              <label>Date Range</label>
              <DatePicker v-model="formData.dateRange" selectionMode="range" placeholder="Select date range" />
            </div>
            
            <div class="hb-example-item">
              <label>Time Picker</label>
              <DatePicker v-model="formData.time" timeOnly placeholder="Select time" />
            </div>
            
            <div class="hb-example-item">
              <label>Date & Time</label>
              <DatePicker v-model="formData.datetime" showTime placeholder="Select date and time" />
            </div>
          </div>
        </div>
      </section>

      <!-- Button Components Section -->
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

      <!-- Message Components Section -->
      <section class="hb-showcase-section">
        <h2 class="hb-section-title">Message Components</h2>
        
        <div class="hb-component-group">
          <h3 class="hb-group-title">Message Severities</h3>
          <div class="hb-component-examples">
            <Message severity="info" :closable="false">This is an info message</Message>
            <Message severity="success" :closable="false">This is a success message</Message>
            <Message severity="warn" :closable="false">This is a warning message</Message>
            <Message severity="error" :closable="false">This is an error message</Message>
          </div>
        </div>

        <div class="hb-component-group">
          <h3 class="hb-group-title">Message Variants</h3>
          <div class="hb-component-examples">
            <Message severity="info" :closable="true">Closable info message</Message>
            <Message severity="success" :closable="true">Closable success message</Message>
            <Message severity="warn" :closable="true">Closable warning message</Message>
            <Message severity="error" :closable="true">Closable error message</Message>
          </div>
        </div>
      </section>

      <!-- Data Display Section -->
      <section class="hb-showcase-section">
        <h2 class="hb-section-title">Data Display Components</h2>
        
        <!-- Card Components -->
        <div class="hb-component-group">
          <h3 class="hb-group-title">Card Components</h3>
          <div class="hb-component-examples">
            <Card style="width: 25rem">
              <template #header>
                <div class="flex align-items-center justify-content-between">
                  <h5 class="m-0">Card Title</h5>
                  <Button icon="pi pi-ellipsis-v" text rounded />
                </div>
              </template>
              <template #content>
                <p>This is the card content. You can put any content here.</p>
              </template>
              <template #footer>
                <div class="flex gap-2">
                  <Button label="Save" severity="primary" />
                  <Button label="Cancel" severity="secondary" outlined />
                </div>
              </template>
            </Card>

            <Card style="width: 25rem">
              <template #content>
                <h5>Simple Card</h5>
                <p>This is a simple card without header or footer.</p>
              </template>
            </Card>
          </div>
        </div>

        <!-- Panel Components -->
        <div class="hb-component-group">
          <h3 class="hb-group-title">Panel Components</h3>
          <div class="hb-component-examples">
            <Panel header="Panel Header" toggleable>
              <p>This is the panel content. You can put any content here.</p>
              <p>Panels can be toggled to show/hide content.</p>
            </Panel>

            <Panel header="Collapsed Panel" :collapsed="true" toggleable>
              <p>This panel starts collapsed.</p>
            </Panel>
          </div>
        </div>

        <!-- DataTable Components -->
        <div class="hb-component-group">
          <h3 class="hb-group-title">DataTable Components</h3>
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
                  <span :class="'status-' + slotProps.data.status.toLowerCase()">
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
        
        <!-- Dialog Components -->
        <div class="hb-component-group">
          <h3 class="hb-group-title">Dialog Components</h3>
          <div class="hb-component-examples">
            <Button label="Show Dialog" @click="showDialog = true" severity="primary" />
            
            <Dialog v-model:visible="showDialog" modal header="Dialog Header" :style="{ width: '50vw' }">
              <p>This is the dialog content. You can put any content here.</p>
              <template #footer>
                <Button label="Cancel" @click="showDialog = false" severity="secondary" text />
                <Button label="Save" @click="showDialog = false" severity="primary" />
              </template>
            </Dialog>
          </div>
        </div>

        <!-- Tooltip Examples -->
        <div class="hb-component-group">
          <h3 class="hb-group-title">Tooltip Components</h3>
          <div class="hb-component-examples">
            <Button label="Top Tooltip" v-tooltip.top="'This is a top tooltip'" severity="primary" />
            <Button label="Bottom Tooltip" v-tooltip.bottom="'This is a bottom tooltip'" severity="info" />
            <Button label="Left Tooltip" v-tooltip.left="'This is a left tooltip'" severity="success" />
            <Button label="Right Tooltip" v-tooltip.right="'This is a right tooltip'" severity="warning" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentShowcase',
  data() {
    return {
      // Form data
      formData: {
        text: '',
        textSmall: '',
        textLarge: '',
        textDisabled: 'Disabled value',
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
        time: null,
        datetime: null
      },
      
      // Select options
      selectOptions: [
        { name: 'Option 1', value: 'option1' },
        { name: 'Option 2', value: 'option2' },
        { name: 'Option 3', value: 'option3' },
        { name: 'Option 4', value: 'option4' },
        { name: 'Option 5', value: 'option5' }
      ],
      
      // Table data
      tableData: [
        { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'Active' },
        { id: 4, name: 'Alice Brown', email: 'alice@example.com', status: 'Pending' },
        { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', status: 'Active' },
        { id: 6, name: 'Diana Davis', email: 'diana@example.com', status: 'Inactive' },
        { id: 7, name: 'Edward Miller', email: 'edward@example.com', status: 'Active' },
        { id: 8, name: 'Fiona Garcia', email: 'fiona@example.com', status: 'Pending' }
      ],
      
      // Dialog state
      showDialog: false
    }
  }
}
</script>

<style scoped>
/* =============================================================================
   COMPONENT SHOWCASE STYLES
   ============================================================================= */

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

.hb-component-examples .p-inputtext,
.hb-component-examples .p-dropdown,
.hb-component-examples .p-calendar {
  min-width: 200px;
}

.hb-component-examples .p-textarea {
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