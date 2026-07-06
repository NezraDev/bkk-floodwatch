<template>
  <div class="table-card">
    <h3>Water Level Stations</h3>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Station</th>
            <th>Current (m)</th>
            <th>Normal Range (m)</th>
            <th>Trend</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="s in stations" :key="s.name">
            <td class="station">{{ s.name }}</td>
            <td>{{ s.current.toFixed(2) }}</td>
            <td>{{ s.rangeLow.toFixed(2) }} - {{ s.rangeHigh.toFixed(2) }}</td>
            <td>
              <span class="trend" :class="s.trend">
                {{ s.trend === 'up' ? '↑' : s.trend === 'down' ? '↓' : '→' }}
              </span>
            </td>
            <td><span class="badge" :class="s.statusClass">{{ s.status }}</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const stations = ref([
  { name: 'P.67 - Nakhon Sawan', current: 2.05, rangeLow: 1.50, rangeHigh: 2.30, trend: 'up', status: 'High', statusClass: 'high' },
  { name: 'C.2 - Ayutthaya', current: 1.85, rangeLow: 1.20, rangeHigh: 2.00, trend: 'up', status: 'Above Normal', statusClass: 'above' },
  { name: 'C.13 - Nonthaburi', current: 1.62, rangeLow: 1.00, rangeHigh: 1.80, trend: 'up', status: 'Normal', statusClass: 'normal' },
  { name: 'C.29A - Samut Prakan', current: 1.35, rangeLow: 0.80, rangeHigh: 1.60, trend: 'flat', status: 'Normal', statusClass: 'normal' },
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
  white-space: nowrap;
}
.station {
  font-weight: 600;
  color: var(--navy-900);
}
.trend {
  font-weight: 700;
}
.trend.up {
  color: var(--red-600);
}
.trend.down {
  color: var(--teal);
}
.trend.flat {
  color: var(--text-secondary);
}
.badge {
  font-size: 11.5px;
  font-weight: 700;
  padding: 3px 9px;
  border-radius: 5px;
}
.badge.high {
  background: var(--red-50);
  color: var(--red-600);
}
.badge.above {
  background: var(--yellow-50);
  color: #a3760a;
}
.badge.normal {
  background: #e8f5e9;
  color: #2e7d32;
}
</style>
