<script setup lang="ts">
defineProps<{
  title?: string;
  subtitle?: string;
}>();
</script>

<template>
  <section class="bg-white h-[calc(100vh-70px)] grid place-items-center">
    <div class="container mx-auto text-center py-20">
      <slot name="title" :title="title">
        <h1
          class="
            text-7xl
            font-black
            text-transparent
            bg-clip-text bg-gradient-to-r
            from-primary-500
            to-indigo-600
          "
        >
          {{ title }}
        </h1>
      </slot>
      <slot name="subtitle" :subtitle="subtitle">
        <p class="text-gray-600 font-light text-3xl mt-5 sm:max-w-4xl mx-auto">
          {{ subtitle }}
        </p>
      </slot>
      <slot name="actions" />
    </div>
  </section>
</template>
