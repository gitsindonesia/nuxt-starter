<script setup lang="ts">
const { user } = useAuthStore()
</script>

<template>
  <VAppBar shadow="md" class="py-3">
    <div class="container flex items-center justify-between mx-auto px-4">
      <AppLogo class="h-8" />

      <VBtn v-if="!user" color="primary" @click="$router.push('/auth/login')">
        Masuk
      </VBtn>
      <VBtn
        v-else
        color="primary"
        suffix-icon="mdi-arrow-right"
        @click="$router.push('/dashboard')"
      >
        Back to Dashboard
      </VBtn>
    </div>
  </VAppBar>
  <div class="container mx-auto p-4 sm:mt-3">
    <slot />
  </div>
</template>
