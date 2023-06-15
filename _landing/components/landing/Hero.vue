<template>
  <section
    class="flex sm:py-20 py-14 sm:h-[calc(100vh-90px)] items-center hero relative
    bg-white dark:bg-neutral-900 px-4 2xl:px-0
  "
  >
    <div class="items-center flex flex-col sm:flex-row gap-10 md:gap-4 container mx-auto px-6 md:px-0">
      <div class="flex-1 order-2 sm:order-1 text-center md:text-left">
        <h1 class="text-4xl sm:text-7xl tracking-tight font-semibold sm:leading-snug gap-3 flex flex-wrap items-center justify-center md:justify-start">
          <span class="bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent">Nuxt.js</span>
          <span class="font-thin text-red-500 md:text-5xl text-base">&hearts;</span>
          <span class="bg-gradient-to-r from-primary-500 to-indigo-500 bg-clip-text text-transparent">Morpheme UI</span>
        </h1>
        <p class="text-gray-500 dark:text-neutral-300 max-w-xl text-base sm:text-xl sm:leading-8 mt-4">
          Quickly get started on your Vue.js project with this Nuxt.js and Morpheme UI starter kit. It includes pre-configured setup and a variety of Morpheme UI components. Perfect for Vue.js developers looking to create a professional web app.
        </p>

        <div class="flex justify-center md:justify-start gap-2 md:gap-4 mt-10">
          <VBtn
            color="primary"
            rounded
            href="https://gitsindonesia.github.io/ui-component/"
            new-tab
            size="lg"
          >
            Get started
          </VBtn>
          <VBtn
            rounded
            text
            href="https://github.com/gitsindonesia/ui-component"
            new-tab
            size="lg"
            suffix-icon="ri:arrow-right-s-line"
          >
            Open on GitHub
          </VBtn>
        </div>
      </div>
      <div class="w-full sm:w-5/12 order-1 md:order-2">
        <Logo
          class="mx-auto"
          sizes="xs:200px md:300px"
          width="450"
          height="200"
          placeholder
        />
      </div>
    </div>
  </section>
</template>
