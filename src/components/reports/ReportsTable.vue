<template>
  <div class="table-card">
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Report Name</th>
            <th>Type</th>
            <th>Period</th>
            <th>Generated On</th>
            <th>Format</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="r in reports" :key="r.name">
            <td class="name">{{ r.name }}</td>
            <td>{{ r.type }}</td>
            <td>{{ r.period }}</td>
            <td>{{ r.generatedOn }}</td>
            <td><span class="format">{{ r.format }}</span></td>
            <td>
              <button class="download" aria-label="Download report">
                <Icon name="report" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Icon from '../icons/Icon.vue'

const reports = ref([
  { name: 'Short-term Flood Forecast (0-3 hrs)', type: 'Flood Forecast', period: '20 May 2024 07:00 - 10:00', generatedOn: '20 May 2024 07:05', format: 'PDF' },
  { name: 'Near-term Forecast (6-12 hrs)', type: 'Flood Forecast', period: '20 May 2024 10:00 - 22:00', generatedOn: '20 May 2024 10:00', format: 'PDF' },
  { name: 'Daily Flood Situation Report', type: 'Summary', period: '19 May 2024', generatedOn: '20 May 2024 08:00', format: 'PDF' },
  { name: 'Weekly Rainfall Report', type: 'Rainfall', period: '13 - 19 May 2024', generatedOn: '20 May 2024 07:30', format: 'PDF' },
  { name: 'Water Level Monitoring Report', type: 'Water Levels', period: '19 May 2024', generatedOn: '20 May 2024 07:00', format: 'PDF' },
])
</script>

<style scoped>
.table-card {
  background: #fff;
  border-radius: 12px;
  padding: 8px 18px 16px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
}
.table-wrap {
  overflow-x: auto;
}
table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13.5px;
}
th {
  text-align: left;
  padding: 10px;
  color: var(--text-secondary);
  font-weight: 600;
  border-bottom: 1px solid var(--border-subtle);
  white-space: nowrap;
}
td {
  padding: 12px 10px;
  border-bottom: 1px solid var(--border-subtle);
  white-space: nowrap;
}
.name {
  font-weight: 600;
  color: var(--navy-900);
}
.format {
  font-size: 11.5px;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 5px;
  background: var(--bg-app);
  color: var(--text-secondary);
}
.download {
  width: 30px;
  height: 30px;
  padding: 6px;
  border-radius: 7px;
  border: 1px solid var(--border-subtle);
  background: var(--bg-card);
  color: var(--blue-600);
  cursor: pointer;
}
.download:hover {
  background: var(--bg-app);
}
</style>
