<template>
  <section class="stats-grid">
    <StatCard
      label="Forecast Horizon"
      :value="stats.horizon.value"
      :caption="stats.horizon.caption"
      icon="forecast"
      icon-color="var(--blue-600)"
    />
    <StatCard
      label="Peak Water Level"
      :value="stats.peak.value"
      unit="m"
      :caption="stats.peak.caption"
      icon="waves"
      icon-color="var(--teal)"
    />
    <StatCard
      label="Flood Risk"
      :value="stats.risk.value"
      icon="forecast"
      value-color="var(--red-600)"
      icon-color="var(--red-600)"
    />
    <StatCard
      label="Confidence"
      :value="stats.confidence.value"
      unit="%"
      :caption="stats.confidence.caption"
      icon="forecast"
      icon-color="var(--text-secondary)"
    />
  </section>

  <ForecastMap />

  <ForecastSummaryTable />
</template>

<script setup>
import { ref } from 'vue'
import StatCard from '../components/shared/StatCard.vue'
import ForecastMap from '../components/flood-forecast/ForecastMap.vue'
import ForecastSummaryTable from '../components/flood-forecast/ForecastSummaryTable.vue'

const stats = ref({
  horizon: { value: '0-3 / 6-12', caption: 'hrs' },
  peak: { value: 2.20, caption: '(6-12 hrs)' },
  risk: { value: 'High' },
  confidence: { value: 80, caption: 'High' },
})
</script>

<style scoped>
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
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
