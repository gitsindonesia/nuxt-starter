<script setup lang="ts">
const features = ref([
  {
    icon: 'ic:round-settings-input-component',
    name: '100+ Components',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias aspernatur laboriosam tempore magnam quos.',
  },
  {
    icon: 'ic:round-dark-mode',
    name: 'Dark Mode',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias aspernatur laboriosam tempore magnam quos.',
  },
  {
    icon: 'logos:nuxt-icon',
    name: 'Nuxt 3 Support',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias aspernatur laboriosam tempore magnam quos.',
  },
  {
    icon: 'logos:tailwindcss-icon',
    name: 'Tailwind CSS',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias aspernatur laboriosam tempore magnam quos.',
  },
  {
    icon: 'logos:vue',
    name: 'Vue 3',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias aspernatur laboriosam tempore magnam quos.',
  },
  {
    icon: 'logos:vitejs',
    name: 'Vite',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias aspernatur laboriosam tempore magnam quos.',
  },
  {
    icon: 'ic:round-translate',
    name: 'Localization',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias aspernatur laboriosam tempore magnam quos.',
  },
  {
    icon: 'ic:round-turn-left',
    name: 'RTL Support',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias aspernatur laboriosam tempore magnam quos.',
  },
]);
</script>
<template>
  <div
    class="
      w-0
      h-0
      border-t-0
      border-t-transparent
      border-b-[50px]
      border-b-indigo-600
      border-l-[100vw]
      border-l-white
      border-r-transparent
    "
  ></div>
  <section class="bg-indigo-600 text-white py-20">
    <div class="container mx-auto">
      <div class="space-y-2">
        <h3 class="text-4xl font-semibold">Fully Featured UI Component</h3>
        <p class="text-lg text-indigo-300">
          Out-of-the-box packed with battle tested UI Component.
        </p>
      </div>

      <div class="grid grid-cols-2 lg:grid-cols-4 mt-14 gap-x-8 gap-y-12">
        <div v-for="feature in features" :key="feature.name">
          <span class="bg-indigo-500 px-4 py-3 rounded inline-block">
            <v-icon :name="feature.icon" />
          </span>
          <h4 class="text-xl mt-6 font-semibold">
            {{ feature.name }}
          </h4>
          <p class="mt-2 text-indigo-300">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
  <div
    class="
      w-0
      h-0
      border-t-transparent
      border-t-[50px]
      border-t-indigo-600
      border-r-[100vw]
      border-l-transparent
      border-r-white
    "
  ></div>
</template>
