<script setup lang="ts">
useHead({
  title: 'Home',
})

const features = ref([
  {
    name: 'Vue 3',
    description: 'The latest and greatest Vue.js version.',
    icon: 'logos:vue',
  },
  {
    name: 'Tailwind CSS',
    description: 'Utility-first CSS framework.',
    icon: 'logos:tailwindcss-icon',
  },
  {
    name: 'Nuxt 3',
    description: 'The latest and greatest Nuxt.js version.',
    icon: 'logos:nuxt-icon',
  },
])

const features2 = ref([
  {
    name: 'Simple',
    description: 'Simplify your workflow with a simple and clean UI.',
    icon: 'ri:layout-2-fill',
  },
  {
    name: 'Dark Mode',
    description: 'Enjoy the dark mode in your application.',
    icon: 'ri:moon-fill',
  },
  {
    name: 'Fast',
    description: 'Fast and responsive application.',
    icon: 'ri:speed-fill',
  },
  {
    name: 'Secured',
    description: 'Secured application with authentication and authorization.',
    icon: 'ri:lock-fill',
  },
  {
    name: 'Mobile-first',
    description: 'Mobile-first application with responsive design.',
    icon: 'ri:smartphone-fill',
  },
  {
    name: 'Customizable',
    description: 'Customizable application with Tailwind CSS and CSS Properties.',
    icon: 'ri:paint-brush-fill',
  },
])

const clients = ref([
  {
    name: 'Bukalapak',
    image: 'https://gits.id/wp-content/uploads/2022/06/bukalapak.png',
    url: 'https://www.bukalapak.com/',
  },
  {
    name: 'Pegadaian',
    image: 'https://gits.id/wp-content/uploads/2022/07/pegadaian.png',
    url: 'https://www.pegadaian.co.id/',
  },
  {
    name: 'Telkomsel',
    image: 'https://gits.id/wp-content/uploads/2022/06/telkomsel.png',
    url: 'https://www.telkomsel.com/',
  },
  {
    name: 'Toyota',
    image: 'https://gits.id/wp-content/uploads/2022/06/toyota.png',
    url: 'https://www.toyota.co.id/',
  },
  {
    name: 'PwC',
    image: 'https://gits.id/wp-content/uploads/2022/07/pwc.png',
    url: 'https://www.pwc.co.id/',
  },
  {
    name: 'Yamaha',
    image: 'https://gits.id/wp-content/uploads/2022/07/yamaha.png',
    url: 'https://www.yamaha-motor.co.id/',
  },
])
</script>

<template>
  <div>
    <section class="flex sm:py-24 py-14 sm:h-[calc(100vh-90px)] items-center hero relative">
      <div class="bg-primary-500/50 w-[100px] h-[100px] md:w-[400px] md:h-[400px] rounded-full blur-[50px] md:blur-[200px] absolute right-0 top-10" />
      <div class="bg-secondary-500/50 w-[100px] h-[100px] md:w-[400px] md:h-[400px] rounded-full blur-[50px] md:blur-[200px] absolute bottom-0 left-10" />

      <div class="mx-auto space-y-5 sm:space-y-7 px-4 sm:px-0 z-10">
        <h1 class="text-4xl sm:text-5xl tracking-tight font-semibold text-center leading-relaxed text-slate-900">
          Application <span class="text-primary">made simple</span><br class="hidden sm:inline">
          with <span class="bg-gradient-to-r from-primary-500 to-indigo-500 bg-clip-text text-transparent">GITS UI</span>
        </h1>
        <p class="text-slate-700 text-center max-w-xl text-base sm:text-lg">
          GITS UI is full-featured UI Framework built with Vue 3 and Tailwind CSS.
        </p>
        <div class="flex gap-4 justify-center items-center">
          <VBtn
            color="dark"
            rounded
            href="https://gitsindonesia.github.io/ui-component/"
            new-tab
          >
            Get started
          </VBtn>
          <VBtn
            prefix-icon="logos:github-icon"
            rounded
            text
            class="border border-slate-500 hover:border-slate-700"
            href="https://github.com/gitsindonesia/ui-component"
            new-tab
          >
            Github
          </VBtn>
        </div>
      </div>
    </section>

    <!-- trusted section -->
    <section class="py-10 sm:py-20">
      <div class="container mx-auto">
        <p class="text-center text-slate-700">
          Trusted by these six companies so far
        </p>
        <div class="px-6 2xl:px-0 mt-10 sm:max-w-4xl mx-auto grid gap-4 sm:gap-8 grid-cols-3 sm:grid-cols-6 items-center justify-center">
          <a
            v-for="client in clients"
            :key="client.name"
            :href="client.url"
            :title="client.name"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width="115"
              height="40"
              :src="client.image"
              :alt="client.name"
              class="h-8 sm:h-10 object-contain"
            >
          </a>
        </div>
      </div>
    </section>

    <!-- feature section -->
    <section class="py-10 sm:py-24 bg-zinc-900 px-6 2xl:px-0">
      <div class="container mx-auto">
        <div class="max-w-4xl space-y-5">
          <h2 class="text-3xl sm:text-5xl font-semibold text-white leading-2">
            Every feature you need to create web apps. Try it for yourself.
          </h2>
          <p class="text-zinc-500 text-base sm:text-lg">
            GITS UI was built Vue 3 and Nuxt 3. It is a collection of over 40 ready-to-use components.
          </p>
        </div>
        <div class="mt-10 sm:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div
            v-for="feature in features"
            :key="feature.name"
            class="space-y-4 rounded-xl p-8 border border-zinc-800 hover:bg-zinc-800 transition duration-300"
          >
            <VIcon :name="feature.icon" size="lg" />
            <h3 class="text-zinc-300 font-semibold">
              {{ feature.name }}
            </h3>
            <p class="text-sm text-zinc-500">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- feature 2 section -->
    <section class="py-10 sm:py-24 px-6 2xl:px-0">
      <div class="container mx-auto">
        <div class="max-w-3xl mx-auto space-y-5">
          <h2 class="text-3xl sm:text-4xl font-medium text-left sm:text-center">
            Now is the time to build your application
          </h2>
          <p class="text-left sm:text-center text-base sm:text-lg text-slate-700">
            GITS UI making it easy to build your application with comfort and fun.
          </p>
        </div>
        <div class="mt-10 sm:mt-24">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div
              v-for="feature in features2"
              :key="feature.name"
              class="space-y-4 rounded-xl p-8 border border-slate-200"
            >
              <VIcon :name="feature.icon" size="xl" class="bg-primary text-white p-2 rounded-lg" />
              <h3 class="text-zinc-900 font-medium">
                {{ feature.name }}
              </h3>
              <p class="text-sm text-zinc-700">
                {{ feature.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-10 sm:py-24 bg-zinc-900 px-6 2xl:px-0">
      <div class="sm:max-w-4xl mx-auto text-center space-y-5">
        <h3 class="text-white text-3xl sm:text-4xl font-medium">
          Try our demo today
        </h3>
        <p class="text-zinc-200 text-base sm:max-w-md leading-relaxed mx-auto">
          No register is required. Our demo is open publicly to everyone.
        </p>
        <VBtn rounded to="/auth/login">
          Try demo
        </VBtn>
      </div>
    </section>
  </div>
</template>
