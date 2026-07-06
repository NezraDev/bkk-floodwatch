<template>
  <div class="tabs">
    <button
      v-for="tab in tabs"
      :key="tab.key"
      class="tab"
      :class="{ active: tab.key === modelValue }"
      @click="$emit('update:modelValue', tab.key)"
    >
      {{ tab.label }}<span v-if="tab.count !== undefined" class="count">({{ tab.count }})</span>
    </button>
  </div>
</template>

<script setup>
defineProps({
  tabs: { type: Array, required: true },
  modelValue: { type: String, required: true },
});
defineEmits(["update:modelValue"]);
</script>

<style scoped>
.tabs {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 10px;
  padding: 4px;
  flex-wrap: wrap;
}
.tab {
  border: none;
  background: transparent;
  color: var(--text-secondary);
  font-size: 13px;
  font-weight: 600;
  padding: 7px 12px;
  border-radius: 7px;
  cursor: pointer;
  white-space: nowrap;
}
.tab:hover {
  background: var(--bg-app);
}
.tab.active {
  background: var(--blue-600);
  color: #fff;
}
.count {
  margin-left: 3px;
  opacity: 0.85;
}
</style>
