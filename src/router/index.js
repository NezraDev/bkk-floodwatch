import { ref, computed, markRaw } from "vue";

import OverviewPage from "../pages/OverviewPage.vue";
import RainfallPage from "../pages/RainfallPage.vue";
import WaterLevelsPage from "../pages/WaterLevelsPage.vue";
import FloodForecastPage from "../pages/FloodForecastPage.vue";
import AlertsPage from "../pages/AlertsPage.vue";
import ReportsPage from "../pages/ReportsPage.vue";

export const routes = [
  {
    path: "/",
    key: "overview",
    label: "Overview",
    icon: "home",
    component: markRaw(OverviewPage),
  },
  {
    path: "/rainfall",
    key: "rainfall",
    label: "Rainfall",
    icon: "rain",
    component: markRaw(RainfallPage),
  },
  {
    path: "/water-levels",
    key: "water-levels",
    label: "Water Levels",
    icon: "waves",
    component: markRaw(WaterLevelsPage),
  },
  {
    path: "/flood-forecast",
    key: "flood-forecast",
    label: "Flood Forecast",
    icon: "forecast",
    component: markRaw(FloodForecastPage),
  },
  {
    path: "/alerts",
    key: "alerts",
    label: "Alerts",
    icon: "alert",
    component: markRaw(AlertsPage),
  },
  {
    path: "/reports",
    key: "reports",
    label: "Reports",
    icon: "report",
    component: markRaw(ReportsPage),
  },
];

function normalize(hash) {
  const path = hash.replace(/^#/, "") || "/";
  return path.startsWith("/") ? path : "/" + path;
}

const currentPath = ref(normalize(window.location.hash));

window.addEventListener("hashchange", () => {
  currentPath.value = normalize(window.location.hash);
});

export const currentRoute = computed(
  () => routes.find((r) => r.path === currentPath.value) || routes[0],
);

export function navigate(path) {
  if (normalize(window.location.hash) === path) return;
  window.location.hash = path;
}
