<template>
  <div class="table-card">
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Alert</th>
            <th>Location</th>
            <th>Level</th>
            <th>Horizon</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="a in alerts" :key="a.message">
            <td class="alert-cell">
              <Icon name="alert" :class="'icon ' + a.levelClass" />
              {{ a.message }}
            </td>
            <td>{{ a.location }}</td>
            <td><span class="badge" :class="a.levelClass">{{ a.level }}</span></td>
            <td>{{ a.horizon }}</td>
            <td>{{ a.time }}</td>
            <td><span class="badge" :class="a.statusClass">{{ a.status }}</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Icon from '../icons/Icon.vue'

const alerts = ref([
  {
    message: 'High flood risk in low-lying areas along the Chao Phraya River.',
    location: 'Chao Phraya River (Samut Prakan)',
    level: 'Severe',
    levelClass: 'severe',
    horizon: '6-12 hrs',
    time: '20 May 2024 09:45',
    status: 'Active',
    statusClass: 'active',
  },
  {
    message: 'Water level approaching critical level at P.67 station.',
    location: 'Nakhon Sawan (P.67)',
    level: 'High',
    levelClass: 'high',
    horizon: '0-3 hrs',
    time: '20 May 2024 09:30',
    status: 'Active',
    statusClass: 'active',
  },
  {
    message: 'Heavy rainfall expected in Bangkok area.',
    location: 'Bangkok',
    level: 'Advisory',
    levelClass: 'advisory',
    horizon: '6-12 hrs',
    time: '20 May 2024 08:15',
    status: 'Advisory',
    statusClass: 'advisory',
  },
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
  vertical-align: middle;
}
.alert-cell {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  color: var(--navy-900);
  min-width: 260px;
}
.icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}
.icon.severe, .icon.high {
  color: var(--red-600);
}
.icon.advisory {
  color: var(--yellow-500);
}
.badge {
  font-size: 11.5px;
  font-weight: 700;
  padding: 3px 9px;
  border-radius: 5px;
  white-space: nowrap;
}
.badge.severe {
  background: var(--red-50);
  color: var(--red-600);
}
.badge.high {
  background: #fff3e0;
  color: #b45309;
}
.badge.advisory {
  background: var(--yellow-50);
  color: #a3760a;
}
.badge.active {
  background: var(--red-50);
  color: var(--red-600);
}
</style>
