<template>
  <div class="map-card">
    <div class="map-card-head">
      <h3>Water Level Map</h3>
    </div>

    <div class="map-frame">
      <div ref="mapContainer" class="map-view"></div>

      <div class="legend">
        <div class="legend-title">Level (m)</div>

        <ul>
          <li v-for="s in statusLevels" :key="s.label">
            <span class="dot" :style="{ background: s.color }"></span>
            {{ s.label }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, onBeforeUnmount } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import marker2x from "leaflet/dist/images/marker-icon-2x.png";
import marker from "leaflet/dist/images/marker-icon.png";
import shadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: marker2x,
  iconUrl: marker,
  shadowUrl: shadow,
});

const mapContainer = ref(null);
let map;

const statusLevels = [
  { label: "< 1.00", color: "#4caf50" },
  { label: "1.00 - 1.50", color: "#8bc34a" },
  { label: "1.50 - 2.00", color: "#f5c518" },
  { label: "2.00 - 2.50", color: "#ff9800" },
  { label: "> 2.50", color: "#e53935" },
];

const bangkok = {
  lat: 13.7563,
  lng: 100.5018,
  level: 1.9,
  label: "Bangkok City",
};

onMounted(async () => {
  await nextTick();

  map = L.map(mapContainer.value, {
    zoomControl: true,
  }).setView([bangkok.lat, bangkok.lng], 10.5);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
  }).addTo(map);

  L.marker([bangkok.lat, bangkok.lng])
    .addTo(map)
    .bindPopup("<b>Bangkok City</b><br>Thailand")
    .openPopup();

  L.circle([bangkok.lat, bangkok.lng], {
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
}

.map-card-head h3 {
  margin: 0;
  font-size: 15px;
  padding-bottom: 10px;
  font-weight: 700;
  color: var(--navy-900);
}

.map-frame {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
}

.map-view {
  width: 100%;
  height: 420px;
}

.legend {
  position: absolute;
  top: 15px;
  right: 15px;
  background: #fff;
  border-radius: 8px;
  padding: 10px 12px;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  font-size: 12px;
}

.legend-title {
  font-weight: 700;
  margin-bottom: 6px;
}

.legend ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.legend li {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}
</style>
