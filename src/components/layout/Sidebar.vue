<template>
  <transition name="scrim-fade">
    <div v-if="open" class="scrim" @click="$emit('close')"></div>
  </transition>

  <aside class="sidebar" :class="{ 'is-open': open }">
    <div class="brand">
      <div class="brand-mark">
        <img src="/bkk-logo.png" alt="BKK Logo" class="logo" />
      </div>
      <div class="brand-text">
        <div class="brand-title">BKK</div>
        <div class="brand-sub">FloodWatch</div>
      </div>
      <button class="close-btn" @click="$emit('close')" aria-label="Close menu">
        <Icon name="close" />
      </button>
    </div>

    <nav class="nav">
      <a
        v-for="item in routes"
        :key="item.key"
        :href="'#' + item.path"
        class="nav-item"
        :class="{ active: item.key === currentRoute.key }"
        @click="$emit('close')"
      >
        <span class="nav-icon"><Icon :name="item.icon" /></span>
        <span>{{ item.label }}</span>
      </a>
    </nav>
  </aside>
</template>

<script setup>
import Icon from "../icons/Icon.vue";
import { routes, currentRoute } from "../../router";

defineProps({
  open: { type: Boolean, default: false },
});
defineEmits(["close"]);
</script>

<style scoped>
.logo {
  width: 68px;
  height: 68px;
  object-fit: contain;
  padding: 10px;
}
.sidebar {
  width: var(--sidebar-w);
  flex-shrink: 0;
  background: var(--navy-900);
  color: var(--text-on-navy);

  height: 100vh;

  position: sticky;
  top: 0;

  overflow-y: auto;

  padding: 22px 16px 24px;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 8px;
  position: relative;
}

.brand-mark {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background: linear-gradient(160deg, #1b3a66, #0e2547);
  color: #6fb7ff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  flex-shrink: 0;
}

.brand-title {
  font-weight: 800;
  font-size: 15px;
  color: #ffffff;
  letter-spacing: 0.2px;
  line-height: 1.2;
}

.brand-sub {
  font-size: 12.5px;
  color: var(--text-on-navy-dim);
  line-height: 1.2;
}

.close-btn {
  display: none;
  margin-left: auto;
  background: transparent;
  border: none;
  color: var(--text-on-navy);
  width: 32px;
  height: 32px;
  padding: 6px;
  cursor: pointer;
  border-radius: 8px;
}
.close-btn:hover {
  background: rgba(255, 255, 255, 0.08);
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 11px 12px;
  border-radius: 9px;
  color: var(--text-on-navy);
  font-size: 14.5px;
  font-weight: 500;
  transition:
    background 0.15s ease,
    color 0.15s ease;
}

.nav-icon {
  width: 19px;
  height: 19px;
  flex-shrink: 0;
  opacity: 0.85;
}

.nav-item:hover {
  background: rgba(255, 255, 255, 0.06);
  color: #ffffff;
}

.nav-item.active {
  background: var(--blue-600);
  color: #ffffff;
}
.nav-item.active .nav-icon {
  opacity: 1;
}

.scrim {
  display: none;
}

@media (max-width: 900px) {
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;

    width: var(--sidebar-w);
    height: 100dvh;

    background: var(--navy-900);

    overflow-y: auto;

    z-index: 99999;

    transform: translateX(-100%);
    transition: transform 0.25s ease;
    box-shadow: var(--shadow-pop);
  }

  .sidebar.is-open {
    transform: translateX(0);
  }

  .scrim {
    position: fixed;
    inset: 0;
    background: rgba(8, 15, 30, 0.45);
    z-index: 99998;
  }
}
</style>
