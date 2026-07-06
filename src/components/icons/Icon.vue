<template>
  <svg
    v-if="name === 'home'"
    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
  ><path d="M3 11.5 12 4l9 7.5" /><path d="M5.5 10v9a1 1 0 0 0 1 1H9a1 1 0 0 0 1-1v-4.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1V19a1 1 0 0 0 1 1h2.5a1 1 0 0 0 1-1v-9" /></svg>

  <svg
    v-else-if="name === 'rain'"
    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
  ><path d="M17.5 12a4.5 4.5 0 0 0-3-8.4A6 6 0 0 0 3.2 8.1 4 4 0 0 0 4.5 16H17a3.5 3.5 0 0 0 .5-4Z" /><path d="M8 19l-1 2M12 19l-1 2M16 19l-1 2" /></svg>

  <svg
    v-else-if="name === 'waves'"
    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
  ><path d="M2 8c1.5-1.5 3.5-1.5 5 0s3.5 1.5 5 0 3.5-1.5 5 0 3.5 1.5 5 0" /><path d="M2 14c1.5-1.5 3.5-1.5 5 0s3.5 1.5 5 0 3.5-1.5 5 0 3.5 1.5 5 0" /><path d="M2 20c1.5-1.5 3.5-1.5 5 0s3.5 1.5 5 0 3.5-1.5 5 0 3.5 1.5 5 0" /></svg>

  <svg
    v-else-if="name === 'forecast'"
    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
  ><path d="M3 17c1.2-1.2 2.8-1.2 4 0s2.8 1.2 4 0 2.8-1.2 4 0 2.8 1.2 4 0" /><path d="M3 21c1.2-1.2 2.8-1.2 4 0s2.8 1.2 4 0 2.8-1.2 4 0 2.8 1.2 4 0" /><path d="M7 13V6a2 2 0 0 1 4 0v1" /><path d="M11 8h2a3 3 0 0 1 3 3" /></svg>

  <svg
    v-else-if="name === 'alert'"
    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
  ><path d="M12 3 1.5 21h21L12 3Z" /><path d="M12 10v4" /><circle cx="12" cy="17" r="0.6" fill="currentColor" stroke="none" /></svg>

  <svg
    v-else-if="name === 'report'"
    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
  ><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 8h8M8 12h8M8 16h5" /></svg>

  <svg
    v-else-if="name === 'refresh'"
    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
  ><path d="M3 12a9 9 0 0 1 15.3-6.4L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-15.3 6.4L3 16" /><path d="M3 21v-5h5" /></svg>

  <svg
    v-else-if="name === 'pin'"
    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
  ><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.3" /></svg>

  <svg
    v-else-if="name === 'menu'"
    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
  ><path d="M3 6h18M3 12h18M3 18h18" /></svg>

  <svg
    v-else-if="name === 'close'"
    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
  ><path d="M6 6l12 12M18 6L6 18" /></svg>

  <svg
    v-else-if="name === 'chevron-right'"
    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
  ><path d="M9 6l6 6-6 6" /></svg>

  <svg
    v-else-if="name === 'cloud-logo'"
    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"
  ><path d="M6 17.5c-2 0-3.5-1.6-3.5-3.5 0-1.8 1.4-3.3 3.1-3.5A4.5 4.5 0 0 1 14 9a3.5 3.5 0 0 1 .5 6.9" /><path d="M4 20.5c3-1.5 6-1.5 9 0M9 20.5c3-1.5 6-1.5 9 0" /></svg>
</template>

<script setup>
defineProps({
  name: { type: String, required: true }
})
</script>

<style scoped>
svg {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
