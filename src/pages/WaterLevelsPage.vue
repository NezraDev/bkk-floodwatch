<template>
  <section class="stats-grid">
    <StatCard
      label="Avg River Level (Chao Phraya)"
      :value="stats.avg.value"
      unit="m"
      :caption="stats.avg.caption"
      icon="waves"
      icon-color="var(--teal)"
    />
    <StatCard
      label="Current Level"
      :value="stats.current.value"
      unit="m"
      :caption="stats.current.caption"
      icon="waves"
      icon-color="var(--blue-600)"
    />
    <StatCard
      label="Normal Range"
      :value="stats.range.value"
      icon="waves"
      icon-color="var(--text-secondary)"
    />
    <StatCard
      label="Trend"
      :value="stats.trend.value"
      icon="waves"
      value-color="var(--red-600)"
      icon-color="var(--red-600)"
    />
  </section>

  <WaterLevelMap />

  <WaterLevelTable />
</template>

<script setup>
import { ref } from 'vue'
import StatCard from '../components/shared/StatCard.vue'
import WaterLevelMap from '../components/water-levels/WaterLevelMap.vue'
import WaterLevelTable from '../components/water-levels/WaterLevelTable.vue'

const stats = ref({
  avg: { value: 1.85, caption: '(Above Normal)' },
  current: { value: 2.05, caption: '(09:50)' },
  range: { value: '1.20 - 2.00 m' },
  trend: { value: 'Rising ↑' },
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
