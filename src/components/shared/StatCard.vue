<template>
  <div class="stat-card">
    <div class="stat-top">
      <span class="stat-label" :style="{ color: labelColor }">{{ label }}</span>
      <span class="stat-icon" :style="{ color: iconColor, background: iconBg }">
        <Icon :name="icon" />
      </span>
    </div>
    <div class="stat-value" :style="{ color: valueColor }">
      {{ value }}<span v-if="unit" class="stat-unit">{{ unit }}</span>
    </div>
    <div v-if="caption" class="stat-caption" :style="{ color: captionColor }">
      {{ caption }}
    </div>
  </div>
</template>

<script setup>
import Icon from "../icons/Icon.vue";

defineProps({
  label: String,
  value: [String, Number],
  unit: { type: String, default: "" },
  caption: { type: String, default: "" },
  icon: String,
  labelColor: { type: String, default: "var(--text-secondary)" },
  valueColor: { type: String, default: "var(--text-primary)" },
  captionColor: { type: String, default: "var(--text-muted)" },
  iconColor: { type: String, default: "var(--blue-600)" },
  iconBg: { type: String, default: "transparent" },
});
</script>

<style scoped>
.stat-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 18px 20px;
  box-shadow: var(--shadow-card);
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
}

.stat-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
}

.stat-label {
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
}

.stat-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  padding: 6px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-value {
  font-size: 28px;
  font-weight: 800;
  letter-spacing: -0.5px;
}

.stat-unit {
  font-size: 16px;
  font-weight: 600;
  margin-left: 3px;
}

.stat-caption {
  font-size: 12.5px;
  font-weight: 500;
}

@media (max-width: 480px) {
  .stat-value {
    font-size: 24px;
  }
}
</style>
