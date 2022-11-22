<template>
  <div class="md:h-screen block md:flex">
    <div class="md:w-6/12 bg-primary text-white flex items-center justify-center">
      <slot name="left">
        &nbsp;
      </slot>
    </div>
    <div class="md:w-6/12 flex items-center justify-center bg-white">
      <slot />
    </div>
  </div>
</template>
