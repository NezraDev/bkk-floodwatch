<template>
  <div class="toolbar">
    <FilterTabs :tabs="tabs" v-model="activeTab" />
  </div>

  <ReportsTable />
</template>

<script setup>
import { ref } from 'vue'
import FilterTabs from '../components/shared/FilterTabs.vue'
import ReportsTable from '../components/reports/ReportsTable.vue'

const activeTab = ref('all')
const tabs = [
  { key: 'all', label: 'All Reports' },
  { key: 'rainfall', label: 'Rainfall' },
  { key: 'water-levels', label: 'Water Levels' },
  { key: 'flood-forecast', label: 'Flood Forecast' },
  { key: 'alerts', label: 'Alerts' },
  { key: 'custom', label: 'Custom' },
]
</script>

<style scoped>
.toolbar {
  display: flex;
}
</style>
