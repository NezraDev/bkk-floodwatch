<template>
  <header class="page-header">
    <div class="header-left">
      <button class="menu-btn" @click="$emit('menu')" aria-label="Open menu">
        <Icon name="menu" />
      </button>
      <div>
        <h1 class="title">Flood Forecasting Dashboard - Bangkok, Thailand</h1>
      </div>
    </div>

    <div class="header-right">
      <span class="updated-label">Last updated: {{ updatedAt }}</span>
      <button class="refresh-btn" @click="$emit('refresh')" aria-label="Refresh data">
        <Icon name="refresh" />
      </button>
      <span class="location-badge">
        <Icon name="pin" />
        Bangkok
      </span>
    </div>
  </header>
</template>

<script setup>
import Icon from '../icons/Icon.vue'

defineProps({
  updatedAt: { type: String, default: '23, June 2026 10:00' }
})
defineEmits(['menu', 'refresh'])
</script>

<style scoped>
.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
}

.menu-btn {
  display: none;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  width: 38px;
  height: 38px;
  border-radius: 9px;
  padding: 8px;
  color: var(--text-primary);
  cursor: pointer;
  flex-shrink: 0;
}

.title {
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  color: var(--navy-900);
  letter-spacing: -0.2px;
  line-height: 1.25;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.updated-label {
  font-size: 13.5px;
  color: var(--text-secondary);
  white-space: nowrap;
}

.refresh-btn {
  width: 32px;
  height: 32px;
  padding: 7px;
  border-radius: 8px;
  border: none;
  background: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  transition: background 0.15s ease, transform 0.4s ease;
}
.refresh-btn:hover {
  background: var(--border-subtle);
}
.refresh-btn:active {
  transform: rotate(140deg);
}

.location-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-secondary);
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 999px;
  padding: 6px 12px 6px 8px;
  white-space: nowrap;
}
.location-badge svg {
  width: 15px;
  height: 15px;
  color: var(--blue-600);
}

@media (max-width: 900px) {
  .menu-btn {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .title {
    font-size: 19px;
  }
}

@media (max-width: 520px) {
  .title {
    font-size: 17px;
  }
  .updated-label {
    display: none;
  }
}
</style>
