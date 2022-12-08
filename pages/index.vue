<script setup lang="ts">
definePageMeta({
  layout: 'landing',
})

useHead({
  title: 'Home',
  bodyAttrs: {
    class: 'bg-white',
  },
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
  {
    name: 'CSS Properties',
    description: 'The latest and greatest CSS properties.',
    icon: 'logos:css-3',
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

const reviews = ref([
  {
    title: 'Great product!',
    description: 'This exceeded my expectations.',
    reviewer: 'Jane Doe',
  },
  {
    title: 'Excellent product',
    description: 'I\'m very happy with this product.',
    reviewer: 'John Doe',
  },
  {
    title: 'The best product I\'ve ever used',
    description: 'I\'m very happy with this product.',
    reviewer: 'Mary Smith',
  },
  {
    title: 'Above and beyond',
    description: 'I\'m very happy with this product.',
    reviewer: 'Jade Doe',
  },
  {
    title: 'Above my expectations',
    description: 'I\'m very happy with this product.',
    reviewer: 'Gorge Doe',
  },
  {
    title: 'One of the best',
    description: 'I\'m very happy with this product.',
    reviewer: 'Axel Doe',
  },
])
</script>

<template>
  <div>
    <section class="flex sm:py-24 py-14 sm:h-[calc(100vh-100px)] items-center hero">
      <div class="mx-auto space-y-5 sm:space-y-7 px-4 sm:px-0">
        <h1 class="text-4xl sm:text-5xl tracking-tight font-semibold text-center leading-tight text-slate-900">
          Application <span class="text-primary">made simple</span><br class="hidden sm:inline">
          for your business
        </h1>
        <p class="text-slate-700 text-center max-w-2xl text-base sm:text-lg">
          All features and tools that you need to build your application with
          comfort and fun.
        </p>
        <div class="flex gap-4 justify-center items-center">
          <VBtn color="dark" rounded>
            Get 6 months free
          </VBtn>
          <VBtn prefix-icon="ri:play-fill" rounded outlined>
            Watch video
          </VBtn>
        </div>
      </div>
    </section>

    <!-- trusted section -->
    <section class="py-10 sm:py-24">
      <div class="container mx-auto">
        <p class="text-center text-slate-700">
          Trusted by these six companies so far
        </p>
        <div class="px-6 sm:px-0 mt-7 sm:max-w-4xl mx-auto grid gap-4 sm:gap-8 grid-cols-3 sm:grid-cols-6 items-center justify-center">
          <a
            v-for="client in clients"
            :key="client.name"
            :href="client.url"
            :title="client.name"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img :src="client.image" :alt="client.name" class="h-8 sm:h-10 object-contain">
          </a>
        </div>
      </div>
    </section>

    <!-- feature section -->
    <section class="py-10 sm:py-24 bg-zinc-900 px-6 sm:px-0">
      <div class="container mx-auto">
        <div class="max-w-4xl space-y-5">
          <h2 class="text-3xl sm:text-4xl font-semibold text-white">
            Every feature you need to win. Try it for yourself.
          </h2>
          <p class="text-zinc-500 text-base sm:text-lg">
            Pocket was built for investors like you who play by their own rules and aren’t going to let SEC regulations get in the way of their dreams. If other investing tools are afraid to build it, Pocket has it.
          </p>
        </div>
        <div class="mt-10 sm:mt-24 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div class="hidden sm:block">
            <div class="bg-zinc-800 rounded-xl h-[790px]" />
          </div>
          <div class="flex flex-col gap-8">
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
      </div>
    </section>

    <!-- feature 2 section -->
    <section class="py-10 sm:py-24 px-6 sm:px-0">
      <div class="container mx-auto">
        <div class="max-w-4xl mx-auto space-y-5">
          <h2 class="text-3xl sm:text-4xl font-medium text-left sm:text-center">
            Now is the time to build your portfolio.
          </h2>
          <p class="text-left sm:text-center text-base sm:text-lg text-slate-700">
            With typical market returns, you have to start young to secure your future. With Pocket, it’s never too late to build your nest egg.
          </p>
        </div>
        <div class="mt-10 sm:mt-24">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div
              v-for="feature in features2"
              :key="feature.name"
              class="space-y-4 rounded-xl p-8 border border-slate-200"
            >
              <VIcon :name="feature.icon" size="xl" class="shadow-sm p-2 rounded-lg" />
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
    <section class="py-10 sm:py-24 bg-zinc-900 px-6 sm:px-0">
      <div class="sm:max-w-4xl mx-auto text-center space-y-5">
        <h3 class="text-white text-3xl sm:text-4xl font-medium">
          Get your first tips today
        </h3>
        <p class="text-zinc-200 text-base sm:max-w-md leading-relaxed mx-auto">
          It takes 30 seconds to sign up. Download the app and create an account today and we’ll send you a tip guaranteed to double your first investment.
        </p>
        <VBtn rounded to="/auth/register">
          Get started
        </VBtn>
      </div>
    </section>

    <!-- review section -->
    <section class="py-10 sm:py-24 px-6 sm:px-0 bg-gray-50">
      <div class="container mx-auto">
        <div class="max-w-4xl mx-auto space-y-5">
          <h2 class="text-3xl sm:text-4xl font-medium text-left sm:text-center">
            Everyone is changing their life with Pocket.
          </h2>
          <p class="text-left sm:text-center text-base sm:text-lg text-slate-700">
            Thousands of people have doubled their net-worth in the last 30 days.
          </p>
        </div>
        <div class="mt-10 sm:mt-24">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div
              v-for="review in reviews"
              :key="review.title"
              class="space-y-4 rounded-xl p-8 shadow-md shadow-gray-900/5 bg-white"
            >
              <div class="flex gap-1 items-center">
                <VIcon
                  v-for="i in 5"
                  :key="i"
                  name="ic:round-star"
                  size="sm"
                  class="text-primary-500"
                />
              </div>
              <h3 class="text-zinc-900 font-semibold text-lg">
                "{{ review.title }}"
              </h3>
              <p class="text-base">
                {{ review.description }}
              </p>
              <p class="text-sm text-gray-600">
                - {{ review.reviewer }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
