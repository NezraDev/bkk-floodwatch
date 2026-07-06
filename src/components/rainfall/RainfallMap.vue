<template>
  <div class="map-card">
    <div class="map-card-head">
      <h3>Live Rainfall Map <span class="unit">(mm/hr)</span></h3>
    </div>

    <div class="map-frame">
      <div ref="mapContainer" class="map-view"></div>

      <!-- Intensity Legend -->
      <div class="legend">
        <div class="legend-bar">
          <span
            v-for="stop in legendStops"
            :key="stop.value"
            class="legend-swatch"
            :style="{ background: stop.color }"
          ></span>
        </div>

        <div class="legend-labels">
          <span v-for="stop in legendStops" :key="'l-' + stop.value">
            {{ stop.value }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, onBeforeUnmount } from "vue";
import L from "leaflet";

import marker2x from "leaflet/dist/images/marker-icon-2x.png";
import marker from "leaflet/dist/images/marker-icon.png";
import shadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: marker2x,
  iconUrl: marker,
  shadowUrl: shadow,
});

const legendStops = [
  { value: 100, color: "#7a1fa2" },
  { value: 50, color: "#e53935" },
  { value: 20, color: "#ff9800" },
  { value: 10, color: "#fdd835" },
  { value: 5, color: "#43a047" },
  { value: 1, color: "#42a5f5" },
  { value: 0, color: "#e3f2fd" },
];

const mapContainer = ref(null);
let map;

onMounted(async () => {
  await nextTick();

  map = L.map(mapContainer.value, {
    zoomControl: true,
  }).setView([13.7563, 100.5018], 10.5);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
  }).addTo(map);

  L.marker([13.7563, 100.5018])
    .addTo(map)
    .bindPopup("<b>Bangkok City</b><br>Thailand")
    .openPopup();

  L.circle([13.7563, 100.5018], {
    radius: 5000,
    color: "#e53935",
    fillColor: "#ff6666",
    fillOpacity: 0.25,
    weight: 2,
  }).addTo(map);

  setTimeout(() => {
    map.invalidateSize();
  }, 100);
});

onBeforeUnmount(() => {
  if (map) {
    map.remove();
  }
});
</script>

<style scoped>
.map-card {
  background: #fff;
  border-radius: 12px;
  padding: 14px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.map-card-head h3 {
  margin: 0;
  font-size: 15px;
  font-weight: 700;
  color: var(--navy-900);
}

.unit {
  font-weight: 500;
  color: var(--text-secondary);
  font-size: 13px;
}

.map-frame {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
}

.map-view {
  width: 100%;
  height: 460px;
}

.legend {
  position: absolute;
  bottom: 15px;
  right: 15px;
  background: #fff;
  border-radius: 8px;
  padding: 10px 12px;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.legend-bar {
  display: flex;
  flex-direction: column-reverse;
  width: 16px;
  height: 130px;
  border-radius: 4px;
  overflow: hidden;
}

.legend-swatch {
  flex: 1;
}

.legend-labels {
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 130px;
  font-size: 10px;
  color: #555;
}

:deep(.leaflet-container) {
  background: #fff;
  font-family: inherit;
}

:deep(.leaflet-tile) {
  border: none !important;
  outline: none !important;
}

:deep(.leaflet-container img) {
  max-width: none !important;
}

:deep(.leaflet-tile-container img) {
  width: 256.5px !important;
  height: 256.5px !important;
}

:deep(.leaflet-popup-content) {
  margin: 10px 12px;
  font-size: 13px;
}
</style>
