<template>
  <section class="stats-grid">
    <StatCard
      label="Current Rainfall"
      :value="stats.rainfall.value"
      unit="mm"
      :caption="stats.rainfall.caption"
      icon="rain"
      label-color="var(--blue-600)"
      value-color="var(--navy-900)"
      icon-color="var(--blue-600)"
    />
    <StatCard
      label="River Level (Chao Phraya)"
      :value="stats.riverLevel.value"
      unit="m"
      :caption="stats.riverLevel.caption"
      icon="waves"
      label-color="var(--teal)"
      value-color="var(--teal)"
      caption-color="var(--teal)"
      icon-color="var(--teal)"
    />
    <StatCard
      label="Flood Risk Area"
      :value="stats.riskArea.value"
      caption="Areas"
      icon="pin"
      icon-color="var(--text-secondary)"
    />
    <StatCard
      label="Alerts"
      :value="stats.alerts.value"
      caption="Active"
      icon="alert"
      value-color="var(--red-600)"
      icon-color="var(--red-600)"
    />
  </section>

  <OverviewMap />

  <section class="alerts-feed">
    <AlertItem
      v-for="(a, i) in alerts"
      :key="i"
      :status="a.status"
      :message="a.message"
      :time="a.time"
      @view="onViewDetails(a)"
    />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import StatCard from '../components/shared/StatCard.vue'
import AlertItem from '../components/shared/AlertItem.vue'
import OverviewMap from '../components/overview/OverviewMap.vue'

const stats = ref({
  rainfall: { value: 24, caption: '(Last 1 hr)' },
  riverLevel: { value: 1.85, caption: '(Above Normal)' },
  riskArea: { value: 12 },
  alerts: { value: 2 }
})

const alerts = ref([
  {
    status: 'Active',
    message: 'High flood risk in low-lying areas along the Chao Phraya River.',
    time: '23, June 2026 15:00'
  },
  {
    status: 'Active',
    message: 'Water Level approaching critical level at P. 67 station.',
    time: '23, June 2026 12:00'
  },
  {
    status: 'Advisory',
    message: 'Moderate Rainfall expected in Bangkok area.',
    time: '23, June 2026 10:00'
  }
])

function onViewDetails(alert) {
  console.log('View details for:', alert.message)
}
</script>

<style scoped>
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.alerts-feed {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

@media (max-width: 1100px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>
