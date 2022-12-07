<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})

useHead({
  title: 'Home',
})
</script>

<template>
  <div>
    <DashboardStats />

    <DashboardSalesHistory />

    <DashboardProducts />
  </div>
</template>
