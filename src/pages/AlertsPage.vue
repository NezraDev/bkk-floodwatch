<template>
  <div class="toolbar">
    <FilterTabs :tabs="tabs" v-model="activeTab" />
  </div>

  <AlertsTable />
</template>

<script setup>
import { ref } from 'vue'
import FilterTabs from '../components/shared/FilterTabs.vue'
import AlertsTable from '../components/alerts/AlertsTable.vue'

const activeTab = ref('all')
const tabs = [
  { key: 'all', label: 'All', count: 3 },
  { key: 'active', label: 'Active', count: 2 },
  { key: 'advisory', label: 'Advisory', count: 1 },
  { key: 'resolved', label: 'Resolved', count: 8 },
]
</script>

<style scoped>
.toolbar {
  display: flex;
}
</style>
