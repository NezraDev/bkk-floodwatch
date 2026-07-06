<template>
  <div class="map-card">
    <div class="map-card-head">
      <h3>Flood Inundation Forecast Map</h3>
    </div>
    <div class="map-frame">
      <div ref="mapContainer" class="map-view"></div>

      <div class="legend">
        <div class="legend-title">Flood Depth (m)</div>
        <ul>
          <li v-for="z in zones" :key="z.label">
            <span class="dot" :style="{ background: z.color }"></span
            >{{ z.label }}
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

const zones = [
  { label: "< 0.25", color: "#bbdefb" },
  { label: "0.25 - 0.50", color: "#fff59d" },
  { label: "0.50 - 1.00", color: "#ffb74d" },
  { label: "1.00 - 2.00", color: "#e57373" },
  { label: "> 2.00", color: "#b71c1c" },
];

const bangkok = {
  lat: 13.7563,
  lng: 100.5018,
  label: "Bangkok City",
  depth: 1.2,
};

const mapContainer = ref(null);
let map;

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

  L.marker([13.7563, 100.5018])
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
  background: white;
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
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.dot {
  width: 10px;
  height: 10px;
  border-radius: 3px;
  display: inline-block;
  margin-right: 6px;
}
</style>
