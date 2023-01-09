<template>
  <section class="flex sm:py-24 py-14 sm:h-[calc(100vh-90px)] items-center hero relative">
    <!-- <div class="bg-primary-500/50 w-[100px] h-[100px] md:w-[400px] md:h-[400px] rounded-full blur-[50px] md:blur-[200px] absolute right-0 top-10" /> -->
    <!-- <div class="bg-secondary-500/50 w-[100px] h-[100px] md:w-[400px] md:h-[400px] rounded-full blur-[50px] md:blur-[200px] absolute bottom-0 left-10" /> -->

    <div class="items-center flex gap-4 container mx-auto">
      <div class="flex-1">
        <h1 class="text-4xl sm:text-6xl tracking-tight font-semibold sm:leading-snug space-x-3">
          <span class="bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent">Nuxt.js</span>
          <span class="font-thin text-red-500">&hearts;</span>
          <span class="bg-gradient-to-r from-primary-500 to-indigo-500 bg-clip-text text-transparent">GITS UI</span>
        </h1>
        <p class="text-slate-500 max-w-xl text-base sm:text-xl mt-2">
          Quickly get started on your Vue.js project with this Nuxt.js and GITS UI starter kit.
        </p>

        <div class="flex gap-4 mt-10">
          <VBtn
            color="dark"
            rounded
            href="https://gitsindonesia.github.io/ui-component/"
            new-tab
            size="lg"
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
            size="lg"
          >
            GitHub
          </VBtn>
        </div>
      </div>
      <div class="w-full sm:w-4/12">
        <v-logo size="custom" img-class="md:w-[300px] mx-auto" />
      </div>
    </div>
  </section>
</template>
