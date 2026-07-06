<template>
  <div class="table-card">
    <h3>Forecast Summary</h3>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Indicator</th>
            <th>0-3 hrs (Short Term)</th>
            <th>6-12 hrs (Near Term)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in rows" :key="row.indicator">
            <td class="indicator">{{ row.indicator }}</td>
            <td><span v-if="row.badge" class="badge" :class="row.shortClass">{{ row.short }}</span><span v-else>{{ row.short }}</span></td>
            <td><span v-if="row.badge" class="badge" :class="row.nearClass">{{ row.near }}</span><span v-else>{{ row.near }}</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const rows = ref([
  { indicator: 'Rainfall (Accumulation)', short: '28 mm', near: '72 mm', badge: false },
  { indicator: 'Water Level (Chao Phraya)', short: '1.95 m', near: '2.20 m', badge: false },
  { indicator: 'Flood Risk', short: 'Moderate', near: 'High', badge: true, shortClass: 'moderate', nearClass: 'high' },
  { indicator: 'Potential Impact', short: 'Low-Moderate', near: 'Moderate-High', badge: true, shortClass: 'moderate', nearClass: 'high' },
])
</script>

<style scoped>
.table-card {
  background: #fff;
  border-radius: 12px;
  padding: 16px 18px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
}
.table-card h3 {
  margin: 0 0 12px;
  font-size: 15px;
  font-weight: 700;
  color: var(--navy-900);
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
  padding: 8px 10px;
  color: var(--text-secondary);
  font-weight: 600;
  border-bottom: 1px solid var(--border-subtle);
  white-space: nowrap;
}
td {
  padding: 10px;
  border-bottom: 1px solid var(--border-subtle);
}
.indicator {
  font-weight: 600;
  color: var(--navy-900);
  white-space: nowrap;
}
.badge {
  font-size: 11.5px;
  font-weight: 700;
  padding: 3px 9px;
  border-radius: 5px;
}
.badge.moderate {
  background: var(--yellow-50);
  color: #a3760a;
}
.badge.high {
  background: var(--red-50);
  color: var(--red-600);
}
</style>
