<script setup lang="ts">
//
</script>

<template>
  <footer>
    <div
      class="pr-6 2xl:px-0
        dark:bg-neutral-900
      "
    >
      <div class="container py-4 mx-auto border-t dark:border-neutral-800 flex flex-col sm:flex-row gap-4 justify-between items-center">
        <Logo
          width="40"
          height="18"
        />
        <div class="text-xs text-gray-600 dark:text-neutral-300 text-center md:text-right">
          Copyright &copy; {{ new Date().getFullYear() }}. PT GITS Indonesia.
          <br class="inline sm:hidden">
          All rights reserved.
        </div>
      </div>
    </div>
  </footer>
</template>
