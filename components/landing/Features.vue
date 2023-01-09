<script setup lang="ts">
const features = [
  {
    name: 'Vue 3',
    description: 'The latest and greatest Vue.js',
    icon: 'logos-vue',
  },
  {
    name: 'Nuxt 3',
    description: 'The latest and greatest Nuxt.js',
    icon: 'logos-nuxt-icon',
  },
  {
    name: 'Tailwind CSS',
    description: 'A utility-first CSS framework',
    icon: 'logos-tailwindcss-icon',
  },
  {
    name: 'Customization',
    description: 'Customizable application with CSS Properties',
    icon: 'logos:css-3',
  },
  {
    name: 'TypeScript',
    description: 'A typed superset of JavaScript that scales',
    icon: 'logos-typescript-icon',
  },
  {
    name: 'Linting',
    description: 'Code analysis tool that helps maintain code quality and consistency',
    icon: 'logos-eslint',
  },
]
</script>

<template>
  <section class="py-10 sm:py-24 px-6 2xl:px-0 bg-gray-50">
    <div class="container mx-auto">
      <div class="max-w-3xl space-y-5 mx-auto text-center">
        <h2 class="text-3xl sm:text-4xl font-medium">
          Every feature you need
        </h2>
        <p class="text-base sm:text-lg text-gray-700">
          Focus on adding features and functionality to your app.
        </p>
      </div>
      <div class="mt-10 sm:mt-24">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div
            v-for="feature in features"
            :key="feature.name"
            class="space-y-4 rounded-xl p-8 borde shadow-card hover:shadow-xl transition duration-300 bg-white"
          >
            <VIcon :name="feature.icon" size="xl" class="rounded-lg" />
            <h3 class="text-gray-900 font-medium">
              {{ feature.name }}
            </h3>
            <p class="text-sm text-gray-700">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
