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

const pricing = ref([
  {
    color: 'white',
    name: 'Starter',
    icon: 'ic:round-star',
    price: 0,
    description: 'You’re new to investing but want to do it right. Get started for free.',
    features: [
      'Commission-free trading',
      'Multi-layered encryption',
      'One tip every day',
      'Invest up to $1,500 each month',
    ],
    action: 'Get started for free',
    actionColor: 'dark',
  },
  {
    color: 'white',
    name: 'Investor',
    icon: 'ic:round-star',
    price: 10,
    description: 'You’ve been investing for a while. Invest more and grow your wealth faster.',
    features: [
      'Commission-free trading',
      'Multi-layered encryption',
      'One tip every day',
      'Invest up to $1,500 each month',
      'Basic transaction anonymization',
    ],
    action: 'Subscribe',
    actionColor: 'dark',
  },
  {
    color: 'dark',
    name: 'VIP',
    icon: 'ic:round-stars',
    price: 199,
    description: 'You’ve got a huge amount of assets but it’s not enough. To the moon.',
    features: [
      'Commission-free trading',
      'Multi-layered encryption',
      'One tip every day',
      'Invest up to $1,500 each month',
      'Basic transaction anonymization',
      'Automated tax-loss harvesting',
    ],
    action: 'Subscribe',
    actionColor: 'primary',
  },
])

const faqs = ref([
  {
    question: 'What is the best investment strategy?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl lorem quis lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl lorem quis lorem.',
  },
  {
    question: 'How do I get started?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl lorem quis lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl lorem quis lorem.',
  },
  {
    question: 'How do I get started?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl lorem quis lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl lorem quis lorem.',
  },
  {
    question: 'How do I get started?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl lorem quis lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl lorem quis lorem.',
  },
  {
    question: 'How do I get started?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl lorem quis lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl lorem quis lorem.',
  },
  {
    question: 'How do I get started?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl lorem quis lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl lorem quis lorem.',
  },
])
</script>

<template>
  <div>
    <section class="flex sm:py-24 py-14 sm:h-[calc(100vh-90px)] items-center hero relative">
      <div class="bg-primary-500/50 w-[100px] h-[100px] md:w-[400px] md:h-[400px] rounded-full blur-[50px] md:blur-[200px] absolute right-0 top-10" />
      <div class="bg-secondary-500/50 w-[100px] h-[100px] md:w-[400px] md:h-[400px] rounded-full blur-[50px] md:blur-[200px] absolute bottom-0 left-10" />

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
    <section class="py-10 sm:py-20">
      <div class="container mx-auto">
        <p class="text-center text-slate-700">
          Trusted by these six companies so far
        </p>
        <div class="px-6 sm:px-0 mt-10 sm:max-w-4xl mx-auto grid gap-4 sm:gap-8 grid-cols-3 sm:grid-cols-6 items-center justify-center">
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
            GITS UI was built for investors like you who play by their own rules and aren’t going to let SEC regulations get in the way of their dreams. If other investing tools are afraid to build it, GITS UI has it.
          </p>
        </div>
        <div class="mt-10 sm:mt-24 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div class="hidden sm:block">
            <div class="bg-zinc-800 rounded-xl h-[585px]" />
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
            With typical market returns, you have to start young to secure your future. With GITS UI, it’s never too late to build your nest egg.
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
            Everyone is changing their life with GITS UI.
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

    <section id="pricing" aria-labelledby="pricingTitle" class="px-6 sm:px-0 py-14 sm:py-24 bg-gray-100">
      <div class="container mx-auto">
        <div class="max-w-4xl mx-auto space-y-5">
          <h2 id="pricingTitle" class="text-3xl sm:text-4xl font-medium text-left sm:text-center">
            Flat pricing, no management fees.
          </h2>
          <p class="text-left sm:text-center text-base sm:text-lg text-slate-700">
            Whether you’re one person trying to get ahead or a big firm trying to take over the world, we’ve got a plan for you.
          </p>
        </div>
      </div>

      <div class="container grid grid-cols-1 sm:grid-cols-3 gap-8 mx-auto mt-14 sm:mt-20 items-start">
        <div
          v-for="item in pricing"
          :key="item.name"
          class="rounded-xl shadow-lg shadow-gray-900/5 p-8 space-y-5"
          :class="{
            'bg-white': item.color === 'white',
            'bg-gray-900 text-white': item.color === 'dark',
          }"
        >
          <div>
            <VIcon :name="item.icon" size="lg" class="text-primary-500" />
            {{ item.name }}
          </div>
          <h3
            class=" font-semibold text-3xl"
            :class="{
              'text-zinc-900': item.color === 'white',
              'text-white': item.color === 'dark',
            }"
          >
            ${{ item.price }}
          </h3>
          <p
            class="text-sm"
            :class="{
              'text-gray-700': item.color === 'white',
              'text-gray-300': item.color === 'dark',
            }"
          >
            {{ item.description }}
          </p>
          <VBtn :color="item.actionColor" block>
            {{ item.action }}
          </VBtn>

          <ul
            class="space-y-3 divide-y flex flex-col"
            :class="{
              '': item.color === 'white',
              'divide-gray-800 text-gray-300': item.color === 'dark',
            }"
          >
            <li
              v-for="feature in item.features"
              :key="feature"
              class="flex gap-4 items-start pt-3 text-sm"
            >
              <VIcon name="ic:round-check-circle-outline" size="sm" class="text-primary-500" />
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section id="faq" aria-labelledby="faqTitle" class="px-6 sm:px-0 py-14 sm:py-24 bg-white">
      <div class="container mx-auto">
        <div class="space-y-5">
          <h2 id="faqTitle" class="text-3xl sm:text-4xl font-medium">
            Frequently asked questions
          </h2>
          <p class="text-base sm:text-lg text-slate-700">
            If you have anything else you want to ask, reach out to us.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div
            v-for="faq in faqs"
            :key="faq.question"
            class="space-y-3"
          >
            <h3 class="font-medium text-lg">
              {{ faq.question }}
            </h3>
            <p class="text-gray-600">
              {{ faq.answer }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
