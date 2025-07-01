<template>
  <div class="hb-datatable-demo">
    <div class="hb-demo-header">
      <h2 class="hb-demo-title">Custom Themed DataTable</h2>
      <p class="hb-demo-description">
        This DataTable uses our custom 'hb' theme with PrimeVue 4's design token system.
      </p>
    </div>

    <div class="hb-demo-content">
      <!-- Filters Section -->
      <div class="hb-filters-section">
        <div class="hb-filter-group">
          <label class="hb-filter-label">Name Filter:</label>
          <InputText 
            v-model="filters.name.value" 
            placeholder="Search by name..."
            class="hb-filter-input"
          />
        </div>
        
        <div class="hb-filter-group">
          <label class="hb-filter-label">Status Filter:</label>
          <Select 
            v-model="filters.status.value" 
            :options="statusOptions" 
            placeholder="Select status"
            class="hb-filter-select"
          />
        </div>
        
        <div class="hb-filter-group">
          <Button 
            @click="clearFilters" 
            severity="secondary"
            class="hb-clear-btn"
          >
            Clear Filters
          </Button>
        </div>
      </div>

      <!-- DataTable -->
      <div class="hb-datatable-container">
        <DataTable 
          :value="customers" 
          :paginator="true" 
          :rows="10"
          :rows-per-page-options="[5, 10, 20, 50]"
          :filters="filters"
          filter-display="menu"
          :loading="loading"
          paginator-template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          current-page-report-template="Showing {first} to {last} of {totalRecords} entries"
          responsive-layout="scroll"
          class="hb-datatable"
        >
          <Column field="id" header="ID" sortable style="width: 80px">
            <template #body="{ data }">
              <span class="hb-id-cell">{{ data.id }}</span>
            </template>
          </Column>
          
          <Column field="name" header="Name" sortable>
            <template #body="{ data }">
              <div class="hb-name-cell">
                <span class="hb-name">{{ data.name }}</span>
                <span class="hb-email">{{ data.email }}</span>
              </div>
            </template>
          </Column>
          
          <Column field="status" header="Status" sortable style="width: 120px">
            <template #body="{ data }">
              <span :class="getStatusClass(data.status)" class="hb-status-badge">
                {{ data.status }}
              </span>
            </template>
          </Column>
          
          <Column field="balance" header="Balance" sortable style="width: 120px">
            <template #body="{ data }">
              <span class="hb-balance">${{ formatCurrency(data.balance) }}</span>
            </template>
          </Column>
          
          <Column field="date" header="Date" sortable style="width: 120px">
            <template #body="{ data }">
              <span class="hb-date">{{ formatDate(data.date) }}</span>
            </template>
          </Column>
          
          <Column header="Actions" style="width: 120px">
            <template #body="{ data }">
              <div class="hb-actions">
                <Button 
                  icon="pi pi-eye" 
                  severity="info" 
                  text 
                  @click="viewCustomer(data)"
                  class="hb-action-btn"
                />
                <Button 
                  icon="pi pi-pencil" 
                  severity="warning" 
                  text 
                  @click="editCustomer(data)"
                  class="hb-action-btn"
                />
                <Button 
                  icon="pi pi-trash" 
                  severity="danger" 
                  text 
                  @click="deleteCustomer(data)"
                  class="hb-action-btn"
                />
              </div>
            </template>
          </Column>
        </DataTable>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Button from 'primevue/button'

// Local FilterMatchMode constants to avoid import issues
const FilterMatchMode = {
  STARTS_WITH: 'startsWith',
  CONTAINS: 'contains',
  NOT_CONTAINS: 'notContains',
  ENDS_WITH: 'endsWith',
  EQUALS: 'equals',
  NOT_EQUALS: 'notEquals',
  IN: 'in',
  LESS_THAN: 'lt',
  LESS_THAN_OR_EQUAL_TO: 'lte',
  GREATER_THAN: 'gt',
  GREATER_THAN_OR_EQUAL_TO: 'gte',
  BETWEEN: 'between',
  DATE_IS: 'dateIs',
  DATE_IS_NOT: 'dateIsNot',
  DATE_BEFORE: 'dateBefore',
  DATE_AFTER: 'dateAfter'
}

export default {
  name: 'DataTableDemo',
  components: {
    DataTable,
    Column,
    InputText,
    Select,
    Button
  },
  setup() {
    const customers = ref([])
    const loading = ref(true)
    
    const filters = ref({
      name: { value: null, matchMode: FilterMatchMode.CONTAINS },
      status: { value: null, matchMode: FilterMatchMode.EQUALS }
    })
    
    const statusOptions = ref([
      { label: 'Active', value: 'active' },
      { label: 'Inactive', value: 'inactive' },
      { label: 'Pending', value: 'pending' },
      { label: 'Suspended', value: 'suspended' }
    ])

    // Sample data
    const generateCustomers = () => {
      const statuses = ['active', 'inactive', 'pending', 'suspended']
      const names = [
        'John Smith', 'Jane Doe', 'Bob Johnson', 'Alice Brown', 'Charlie Wilson',
        'Diana Davis', 'Edward Miller', 'Fiona Garcia', 'George Martinez', 'Helen Rodriguez',
        'Ian Thompson', 'Julia Anderson', 'Kevin Taylor', 'Laura Moore', 'Michael Jackson',
        'Nancy White', 'Oliver Harris', 'Patricia Clark', 'Quentin Lewis', 'Rachel Walker'
      ]
      
      return Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        name: names[i],
        email: `${names[i].toLowerCase().replace(' ', '.')}@example.com`,
        status: statuses[Math.floor(Math.random() * statuses.length)],
        balance: Math.floor(Math.random() * 10000) + 100,
        date: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000)
      }))
    }

    const clearFilters = () => {
      filters.value.name.value = null
      filters.value.status.value = null
    }

    const getStatusClass = (status) => {
      return `hb-status-${status}`
    }

    const formatCurrency = (value) => {
      return value.toLocaleString()
    }

    const formatDate = (date) => {
      return new Date(date).toLocaleDateString()
    }

    const viewCustomer = (customer) => {
      console.log('View customer:', customer)
    }

    const editCustomer = (customer) => {
      console.log('Edit customer:', customer)
    }

    const deleteCustomer = (customer) => {
      console.log('Delete customer:', customer)
    }

    onMounted(() => {
      // Simulate loading
      setTimeout(() => {
        customers.value = generateCustomers()
        loading.value = false
      }, 1000)
    })

    return {
      customers,
      loading,
      filters,
      statusOptions,
      clearFilters,
      getStatusClass,
      formatCurrency,
      formatDate,
      viewCustomer,
      editCustomer,
      deleteCustomer
    }
  }
}
</script>

<style>
/* =============================================================================
   HB VUE THEME - DATATABLE DEMO STYLES USING DESIGN TOKENS
   ============================================================================= */

.hb-datatable-demo {
  background-color: var(--hb-bg-primary);
  border-radius: var(--hb-border-radius-lg);
  box-shadow: var(--hb-shadow-md);
  overflow: hidden;
}

.hb-demo-header {
  padding: var(--hb-spacing-6) var(--hb-spacing-6) var(--hb-spacing-4);
  border-bottom: 1px solid var(--hb-border-light);
  background-color: var(--hb-bg-secondary);
}

.hb-demo-title {
  font-size: var(--hb-font-size-2xl);
  font-weight: var(--hb-font-weight-semibold);
  color: var(--hb-text-primary);
  margin: 0 0 var(--hb-spacing-2) 0;
}

.hb-demo-description {
  font-size: var(--hb-font-size-base);
  color: var(--hb-text-secondary);
  margin: 0;
  line-height: var(--hb-line-height-relaxed);
}

.hb-demo-content {
  padding: var(--hb-spacing-6);
}

/* Filters Section */
.hb-filters-section {
  display: flex;
  gap: var(--hb-spacing-4);
  margin-bottom: var(--hb-spacing-6);
  flex-wrap: wrap;
  align-items: end;
}

.hb-filter-group {
  display: flex;
  flex-direction: column;
  gap: var(--hb-spacing-2);
  min-width: 200px;
}

.hb-filter-label {
  font-size: var(--hb-font-size-sm);
  font-weight: var(--hb-font-weight-medium);
  color: var(--hb-text-primary);
}

.hb-filter-input,
.hb-filter-dropdown {
  min-width: 200px;
}

.hb-clear-btn {
  height: fit-content;
}

/* DataTable Container */
.hb-datatable-container {
  border: 1px solid var(--hb-border-light);
  border-radius: var(--hb-border-radius-lg);
  overflow: hidden;
}

.hb-datatable {
  /* Custom DataTable styles using design tokens */
}

/* Cell Styles */
.hb-id-cell {
  font-weight: var(--hb-font-weight-semibold);
  color: var(--hb-text-secondary);
  font-size: var(--hb-font-size-sm);
}

.hb-name-cell {
  display: flex;
  flex-direction: column;
  gap: var(--hb-spacing-1);
}

.hb-name {
  font-weight: var(--hb-font-weight-medium);
  color: var(--hb-text-primary);
}

.hb-email {
  font-size: var(--hb-font-size-sm);
  color: var(--hb-text-secondary);
}

.hb-status-badge {
  display: inline-block;
  padding: var(--hb-spacing-1) var(--hb-spacing-3);
  border-radius: var(--hb-border-radius-full);
  font-size: var(--hb-font-size-xs);
  font-weight: var(--hb-font-weight-medium);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.hb-status-active {
  background-color: var(--hb-success-100);
  color: var(--hb-success-700);
}

.hb-status-inactive {
  background-color: var(--hb-neutral-100);
  color: var(--hb-neutral-600);
}

.hb-status-pending {
  background-color: var(--hb-warning-100);
  color: var(--hb-warning-700);
}

.hb-status-suspended {
  background-color: var(--hb-danger-100);
  color: var(--hb-danger-700);
}

.hb-balance {
  font-weight: var(--hb-font-weight-semibold);
  color: var(--hb-primary-600);
}

.hb-date {
  font-size: var(--hb-font-size-sm);
  color: var(--hb-text-secondary);
}

.hb-actions {
  display: flex;
  gap: var(--hb-spacing-1);
  justify-content: center;
}

.hb-action-btn {
  width: 32px;
  height: 32px;
  border-radius: var(--hb-border-radius-md);
}

/* Responsive Design */
@media (max-width: 768px) {
  .hb-filters-section {
    flex-direction: column;
    align-items: stretch;
  }
  
  .hb-filter-group {
    min-width: auto;
  }
  
  .hb-filter-input,
  .hb-filter-dropdown {
    min-width: auto;
  }
  
  .hb-demo-content {
    padding: var(--hb-spacing-4);
  }
  
  .hb-demo-header {
    padding: var(--hb-spacing-4);
  }
}
</style> 