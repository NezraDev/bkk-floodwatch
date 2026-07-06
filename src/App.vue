<template>
  <div class="layout">
    <Sidebar :open="sidebarOpen" @close="sidebarOpen = false" />

    <div class="main">
      <div class="main-inner">
        <PageHeader
          :updated-at="updatedAt"
          @menu="sidebarOpen = true"
          @refresh="refreshData"
        />

        <h2 class="section-title">{{ currentRoute.label }}</h2>

        <component :is="currentRoute.component" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Sidebar from './components/layout/Sidebar.vue'
import PageHeader from './components/layout/PageHeader.vue'
import { currentRoute } from './router'

const sidebarOpen = ref(false)
const updatedAt = ref('20 May 2024 10:00')

function refreshData() {
  const now = new Date()
  updatedAt.value = now.toLocaleString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).replace(',', ',')
}
</script>

<style scoped>
.layout {
  display: flex;
  min-height: 100vh;
  align-items: flex-start;
}

.main {
  flex: 1;
  min-width: 0;
}

.main-inner {
  padding: 24px 32px 48px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-width: 1440px;
  margin: 0 auto;
}

.section-title {
  margin: 4px 0 -4px;
  font-size: 16px;
  font-weight: 700;
  color: var(--navy-900);
}

@media (max-width: 900px) {
  .main-inner {
    padding: 18px 20px 40px;
  }
}
</style>
