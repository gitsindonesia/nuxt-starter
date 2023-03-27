<script setup lang="ts">
//
</script>

<template>
  <footer class="dark:bg-neutral-900">
    <div class="container px-4 2xl:px-0 py-4 mx-auto border-t dark:border-neutral-800 flex flex-col sm:flex-row gap-4 justify-between items-center">
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
  </footer>
</template>
