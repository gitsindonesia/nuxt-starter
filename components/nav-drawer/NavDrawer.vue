<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import { computed } from 'vue'
import type { Variants } from '../variants'

interface Props {
  variant?: Variants
  modelValue?: boolean
  shadow?: 'sm' | 'md' | 'lg' | 'xl' | boolean
  bordered?: boolean
  sticky?: boolean
  fixed?: boolean
  right?: boolean
  left?: boolean
  transition?: string
  overlay?: boolean
  overlayTransition?: string
  closeOnOverlayClick?: boolean
  mini?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: true,
  variant: 'default',
  transition: 'nav-drawer-transition',
  overlayTransition: 'nav-drawer-overlay-transition',
  closeOnOverlayClick: true,
  mini: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'clickOverlay'): void
}>()

const isOpen = useVModel(props, 'modelValue', emit)

const classes = computed(() => {
  const shadowClass
    = typeof props.shadow === 'string'
      ? `nav-drawer--shadow-${props.shadow}`
      : 'nav-drawer--shadow'

  return [
    'nav-drawer',
    `nav-drawer-${props.variant}`,
    {
      [shadowClass]: !!props.shadow,
      'nav-drawer--bordered': props.bordered,
      'nav-drawer--sticky': props.sticky,
      'nav-drawer--fixed': props.fixed,
      'nav-drawer--right': props.right,
      'nav-drawer--left': props.left,
      'nav-drawer--mini': props.mini,
    },
  ]
})

const transitionName = computed(() => {
  return props.right ? 'nav-drawer-right-transition' : props.transition
})

const onOverlayClick = () => {
  emit('clickOverlay')

  if (props.closeOnOverlayClick)
    isOpen.value = false
}
</script>

<template>
  <teleport to="body">
    <transition :name="overlayTransition">
      <div
        v-if="overlay && isOpen"
        aria-label="Overlay"
        class="nav-drawer-overlay"
        @click="onOverlayClick"
      />
    </transition>
  </teleport>
  <transition :name="transitionName">
    <aside v-if="isOpen" :class="classes" v-bind="$attrs">
      <slot />
    </aside>
  </transition>
</template>

<style src="./NavDrawer.css"></style>
