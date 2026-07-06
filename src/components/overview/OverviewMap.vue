<template>
  <div class="map-card">
    <div class="map-frame">
      <div ref="mapContainer" class="map-view"></div>

      <!-- Legend -->
      <div class="legend">
        <div class="legend-title">Flood Risk Level</div>

        <ul class="legend-list">
          <li v-for="risk in riskLevels" :key="risk.label">
            <span
              class="swatch"
              :style="{ backgroundColor: risk.color }"
            ></span>
            {{ risk.label }}
          </li>
        </ul>
      </div>

      <!-- Compass -->
      <div class="compass">
        <span>N</span>
      </div>

      <!-- Scale -->
      <div class="scale-bar">
        <div class="scale-ticks">
          <span>0</span>
          <span>5</span>
          <span>10 km</span>
        </div>
        <div class="scale-track"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
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

const mapContainer = ref(null);

const riskLevels = [
  { label: "Low", color: "#4caf50" },
  { label: "Moderate", color: "#f5c518" },
  { label: "High", color: "#ff9800" },
  { label: "Severe", color: "#e53935" },
];

onMounted(async () => {
  await nextTick();

  const map = L.map(mapContainer.value).setView([13.7563, 100.5018], 11);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
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
</script>

<style scoped>
.map-card {
  background: #fff;
  border-radius: 12px;
  padding: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
}

.map-frame {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
}

.map-view {
  width: 100%;
  height: 650px;
}

.legend {
  position: absolute;
  top: 15px;
  left: 15px;
  background: white;
  border-radius: 8px;
  padding: 12px;
  z-index: 1000;
  width: 170px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
}

.legend-title {
  font-weight: bold;
  margin-bottom: 10px;
}

.legend-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.legend-list li {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.swatch {
  width: 14px;
  height: 14px;
  margin-right: 8px;
  border-radius: 3px;
}

.compass {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 40px;
  height: 40px;
  background: white;
  z-index: 1000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.scale-bar {
  position: absolute;
  bottom: 15px;
  left: 15px;
  z-index: 1000;
  background: white;
  padding: 8px;
  border-radius: 6px;
}

.scale-ticks {
  display: flex;
  justify-content: space-between;
  width: 140px;
  font-size: 11px;
}

.scale-track {
  margin-top: 4px;
  height: 5px;
  background: repeating-linear-gradient(
    to right,
    black 0,
    black 25%,
    white 25%,
    white 50%,
    black 50%,
    black 75%,
    white 75%,
    white 100%
  );
  border: 1px solid black;
}
</style>
