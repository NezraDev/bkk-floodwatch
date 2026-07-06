# BKK FloodWatch

Flood forecasting dashboard for Bangkok, Thailand. Vue 3 + Vite, with Leaflet
for all spatial/map views.

## Run it

```bash
npm install
npm run dev
```

## Project structure

Each sidebar item is its own route/page — data is not mixed together on one
screen. Navigation is a small dependency-free hash router (`src/router`), so
clicking "Rainfall" in the sidebar navigates to `#/rainfall`, "Water Levels"
to `#/water-levels`, etc.

```
src/
  router/
    index.js            # route table + hash-based navigation
  pages/                 # one file per sidebar destination
    OverviewPage.vue
    RainfallPage.vue
    WaterLevelsPage.vue
    FloodForecastPage.vue
    AlertsPage.vue
    ReportsPage.vue
  components/
    layout/              # Sidebar, PageHeader (shared app chrome)
    shared/               # StatCard, AlertItem, FilterTabs (reused across pages)
    icons/                # Icon.vue (inline SVG icon set)
    overview/             # components used only by the Overview page
      OverviewMap.vue
    rainfall/             # components used only by the Rainfall page
      RainfallMap.vue        (Leaflet)
      RainfallTrendChart.vue
    water-levels/         # components used only by the Water Levels page
      WaterLevelMap.vue      (Leaflet)
      WaterLevelTable.vue
    flood-forecast/       # components used only by the Flood Forecast page
      ForecastMap.vue        (Leaflet)
      ForecastSummaryTable.vue
    alerts/                # components used only by the Alerts page
      AlertsTable.vue
    reports/               # components used only by the Reports page
      ReportsTable.vue
```

Adding a new page: create a component in `src/pages/`, register it in
`src/router/index.js`, and it automatically appears in the sidebar nav.

All maps (Overview, Rainfall, Water Levels, Flood Forecast) are built with
[Leaflet](https://leafletjs.com/) + OpenStreetMap tiles.
