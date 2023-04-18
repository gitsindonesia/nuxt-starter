import { describe, expect, it } from 'vitest'

describe('client-side nuxt features', () => {
  it('can use core nuxt composables within test file', () => {
    expect(useAppConfig().name).toBe('Nuxt + Morpheme UI Starter')
  })
})
