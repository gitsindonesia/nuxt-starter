<template>
  <div class="md:h-screen block md:flex">
    <div class="md:w-6/12 bg-gradient-to-r from-cyan-500 to-primary-500 text-white flex items-center justify-center">
      <slot name="left">
        <img
          src="/login.svg"
          alt="illustration"
          width="460"
          heigt="460"
          class="sm:w-[460px] sm:h-[460px]"
        >
      </slot>
    </div>
    <div class="md:w-6/12 flex items-center justify-center bg-white">
      <slot />
    </div>
  </div>
</template>
