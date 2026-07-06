<template>
  <div class="chart-card">
    <div class="chart-head">
      <h3>Rainfall Trend</h3>

      <div class="chart-legend">
        <span class="dot short"></span> 0-3 hrs
        <span class="dot near"></span> 6-12 hrs
      </div>
    </div>

    <svg
      :viewBox="`0 0 ${width} ${height}`"
      class="chart-svg"
      preserveAspectRatio="none"
    >
      <line
        v-for="g in gridLines"
        :key="g.value"
        :x1="padLeft"
        :x2="width - padRight"
        :y1="g.y"
        :y2="g.y"
        class="grid-line"
      />

      <text
        v-for="g in gridLines"
        :key="'y' + g.value"
        :x="padLeft - 8"
        :y="g.y + 4"
        class="axis-label"
        text-anchor="end"
      >
        {{ g.value }} mm
      </text>

      <rect
        v-for="(bar, index) in bars"
        :key="index"
        :x="bar.x"
        :y="bar.y"
        :width="barWidth"
        :height="bar.h"
        :class="['bar', bar.group]"
        rx="2"
      />

      <text
        v-for="(bar, index) in bars"
        :key="'x' + index"
        :x="bar.x + barWidth / 2"
        :y="height - padBottom + 16"
        class="axis-label"
        text-anchor="middle"
      >
        {{ bar.label }}
      </text>

      <text
        v-for="(bar, index) in bars"
        :key="'v' + index"
        :x="bar.x + barWidth / 2"
        :y="bar.y - 6"
        class="value-label"
        text-anchor="middle"
      >
        {{ bar.value }} mm
      </text>
    </svg>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  shortTerm: {
    type: Array,
    default: () => [],
  },

  nearTerm: {
    type: Array,
    default: () => [],
  },
});

const width = 900;
const height = 260;

const padLeft = 40;
const padRight = 16;
const padTop = 16;
const padBottom = 30;

const allBars = computed(() => [
  ...props.shortTerm.map((item) => ({
    ...item,
    group: "short",
  })),

  ...props.nearTerm.map((item) => ({
    ...item,
    group: "near",
  })),
]);

const maxValue = computed(() => {
  const values = allBars.value.map((i) => i.value);

  const max = Math.max(...values, 10);

  return Math.ceil(max / 5) * 5;
});

const gridLines = computed(() => {
  const steps = 4;

  return Array.from({ length: steps + 1 }, (_, i) => {
    const value = (maxValue.value / steps) * i;

    return {
      value: Math.round(value),
      y: padTop + (height - padTop - padBottom) * (1 - value / maxValue.value),
    };
  });
});

const gap = 6;
const groupGap = 18;

const plotWidth = computed(() => width - padLeft - padRight - groupGap);

const barWidth = computed(() => plotWidth.value / allBars.value.length - gap);

const bars = computed(() =>
  allBars.value.map((item, index) => {
    const extraGap = index >= props.shortTerm.length ? groupGap : 0;

    const x = padLeft + index * (barWidth.value + gap) + extraGap;

    const barHeight =
      (item.value / maxValue.value) * (height - padTop - padBottom);

    return {
      ...item,

      x,

      y: height - padBottom - barHeight,

      h: barHeight,
    };
  }),
);
</script>

<style scoped>
.chart-card {
  background: #fff;
  border-radius: 12px;
  padding: 16px 18px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
}

.chart-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.chart-head h3 {
  margin: 0;
  font-size: 15px;
  font-weight: 700;
}

.chart-svg {
  width: 100%;
  height: 260px;
}

.grid-line {
  stroke: #e5e7eb;
}

.axis-label {
  font-size: 10px;
  fill: #6b7280;
}

.value-label {
  font-size: 10px;
  fill: #374151;
  font-weight: 600;
}

.dot {
  width: 9px;
  height: 9px;
  display: inline-block;
  border-radius: 2px;
}

.dot.short {
  background: #2563eb;
}

.dot.near {
  background: #14b8a6;
  margin-left: 10px;
}

.bar.short {
  fill: #2563eb;
}

.bar.near {
  fill: #14b8a6;
}
</style>
