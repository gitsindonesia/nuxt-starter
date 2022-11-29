import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

export const $breakpoints = useBreakpoints(breakpointsTailwind)
export const isMobile = $breakpoints.smaller('sm') // only smaller than lg
