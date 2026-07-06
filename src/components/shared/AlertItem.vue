<template>
  <div class="alert-row">
    <span class="status-badge" :class="statusClass">{{ status }}</span>

    <span class="alert-icon" :class="statusClass">
      <Icon name="alert" />
    </span>

    <div class="alert-body">
      <p class="alert-message">{{ message }}</p>
      <span class="alert-time">{{ time }}</span>
    </div>

    <button class="view-details" @click="$emit('view')">
      View Details
      <Icon name="chevron-right" />
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import Icon from '../icons/Icon.vue'

const props = defineProps({
  status: { type: String, default: 'Active' }, // Active | Advisory
  message: String,
  time: String
})

const statusClass = computed(() =>
  props.status.toLowerCase() === 'advisory' ? 'advisory' : 'active'
)
</script>

<style scoped>
.alert-row {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
  padding: 16px 18px;
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  gap: 14px;
}

.status-badge {
  font-size: 11px;
  font-weight: 700;
  padding: 3px 9px;
  border-radius: 5px;
  text-transform: capitalize;
  white-space: nowrap;
}
.status-badge.active {
  background: var(--red-50);
  color: var(--red-600);
}
.status-badge.advisory {
  background: var(--yellow-50);
  color: #a3760a;
}

.alert-icon {
  width: 26px;
  height: 26px;
  padding: 4px;
  flex-shrink: 0;
}
.alert-icon.active {
  color: var(--red-600);
}
.alert-icon.advisory {
  color: var(--yellow-500);
}

.alert-body {
  min-width: 0;
}

.alert-message {
  margin: 0 0 3px;
  font-size: 14.5px;
  font-weight: 600;
  color: var(--text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
}

.alert-time {
  font-size: 12px;
  font-style: italic;
  color: var(--text-muted);
}

.view-details {
  display: flex;
  align-items: center;
  gap: 3px;
  background: transparent;
  border: none;
  color: var(--blue-600);
  font-size: 13.5px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  padding: 6px 4px;
}
.view-details svg {
  width: 15px;
  height: 15px;
}
.view-details:hover {
  text-decoration: underline;
}

@media (max-width: 640px) {
  .alert-row {
    grid-template-columns: auto 1fr;
    grid-template-areas:
      'badge badge'
      'icon body'
      '. action';
    row-gap: 8px;
  }
  .status-badge { grid-area: badge; justify-self: start; }
  .alert-icon { grid-area: icon; }
  .alert-body { grid-area: body; }
  .view-details { grid-area: action; justify-self: end; }
}
</style>
