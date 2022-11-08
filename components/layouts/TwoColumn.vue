<template>
  <div class="h-screen flex">
    <div class="w-6/12 bg-primary text-white flex items-center justify-center">
      <slot name="left">
        &nbsp;
      </slot>
    </div>
    <div class="w-6/12 flex items-center justify-center bg-white">
      <slot />
    </div>
  </div>
</template>
