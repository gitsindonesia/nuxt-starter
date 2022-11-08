<script setup lang="ts">
definePageMeta({
  layout: 'blank',
})

useHead({
  title: 'Help',
})

const { user } = useAuthStore()
</script>

<template>
  <LayoutsHeaderOnly>
    <template #right>
      <VBtn v-if="!user" to="/auth/login" color="primary">
        Masuk
      </VBtn>
      <VBtn v-else to="/dashboard" color="primary">
        Back to Dashboard
        <VIcon name="mdi-arrow-right" class="ml-2" />
      </VBtn>
    </template>

    <div class="p-6 rounded-lg bg-white">
      <header class="text-2xl font-bold mb-4">
        <h1>Help</h1>
      </header>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed aut, earum vitae obcaecati quis nostrum excepturi modi minus! Magni veritatis eius dignissimos architecto repellendus delectus totam saepe eum, alias quibusdam.
      </p>
    </div>
  </LayoutsHeaderOnly>
</template>
