<template>
  <section class="stats-grid">
    <StatCard
      label="Current Rainfall"
      :value="stats.current.value"
      unit="mm"
      :caption="stats.current.caption"
      icon="rain"
      label-color="var(--blue-600)"
      value-color="var(--navy-900)"
      icon-color="var(--blue-600)"
    />
    <StatCard
      label="0-3 hrs Accumulation"
      :value="stats.shortTerm.value"
      unit="mm"
      icon="rain"
      icon-color="var(--blue-600)"
    />
    <StatCard
      label="6-12 hrs Accumulation"
      :value="stats.nearTerm.value"
      unit="mm"
      icon="rain"
      icon-color="var(--teal)"
    />
    <StatCard
      label="Max Intensity"
      :value="stats.maxIntensity.value"
      unit="mm/hr"
      :caption="stats.maxIntensity.caption"
      icon="rain"
      value-color="var(--orange-500)"
      icon-color="var(--orange-500)"
    />
  </section>

  <RainfallMap />

  <RainfallTrendChart />
</template>

<script setup>
import { ref } from 'vue'
import StatCard from '../components/shared/StatCard.vue'
import RainfallMap from '../components/rainfall/RainfallMap.vue'
import RainfallTrendChart from '../components/rainfall/RainfallTrendChart.vue'

const stats = ref({
  current: { value: 24, caption: '(Last 1 hr)' },
  shortTerm: { value: 28 },
  nearTerm: { value: 72 },
  maxIntensity: { value: 32, caption: '(08:20)' },
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
