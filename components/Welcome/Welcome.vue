<template>
  <div class="h-screen flex items-center">
    <div class="container mx-auto lg:p-20 space-y-6">
      <div class="flex justify-center">
        <img src="/logo.png" alt="Logo" class="h-10">
      </div>
      <h1 class="text-display-sm font-semibold text-center dark:text-slate-200 text-slate-900">
        Welcome to Morpheme!
      </h1>
      <div class="shadow-md dark:border-slate-800 border max-w-lg mx-auto flex items-center gap-2 flex-col bg-white dark:bg-slate-900 rounded-[10px] p-10">
        <h2 class="text-slate-800 dark:text-slate-300 text-display-xs font-semibold">
          Get started
        </h2>
        <div class="text-slate-800 text-center dark:text-slate-300">
          Start by editing this page in
          <code class="font-mono font-semibold">pages/index.vue</code>.
        </div>
      </div>
      <footer class="flex justify-center">
        <VButton
          to="/products"
          text
        >
          View Product Page
        </VButton>
        <VButton
          suffix-icon="ri:external-link-line"
          href="https://ui.morpheme.design"
          new-tab
          text
        >
          Visit Documentation
        </VButton>
      </footer>
    </div>
  </div>
</template>
