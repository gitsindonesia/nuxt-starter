<script setup lang="ts">
defineProps<{
  title?: string;
  subtitle?: string;
}>();
</script>

<template>
  <section class="bg-white">
    <div class="container mx-auto text-center py-20">
      <slot name="title" :title="title">
        <h1
          class="
            text-8xl
            font-black
            text-transparent
            bg-clip-text bg-gradient-to-r
            from-primary-500
            to-green-500
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
