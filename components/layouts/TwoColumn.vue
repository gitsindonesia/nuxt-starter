<template>
  <div class="sm:h-screen block sm:flex">
    <div class="sm:w-6/12 bg-primary text-white flex items-center justify-center">
      <slot name="left">
        &nbsp;
      </slot>
    </div>
    <div class="sm:w-6/12 flex items-center justify-center bg-white">
      <slot />
    </div>
  </div>
</template>
