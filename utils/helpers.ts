import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

export const $breakpoints = useBreakpoints(breakpointsTailwind)
export const isMobile = $breakpoints.smaller('sm') // only smaller than lg

export function toCurrency(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value)
}
