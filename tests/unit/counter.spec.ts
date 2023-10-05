import { afterEach, describe, expect, it } from 'vitest'
import { createPinia } from 'pinia'
import { useCounter } from '~/stores/counter'

// Create a Pinia instance
const pinia = createPinia()

// Get access to the store
const counterStore = useCounter(pinia)

// Write your test cases
describe('useCounter', () => {
  it('should initialize count to 0', () => {
    expect(counterStore.count).toBe(0)
  })

  it('should increment count', () => {
    counterStore.increment()
    expect(counterStore.count).toBe(1)
  })

  it('should decrement count', () => {
    counterStore.decrement()
    expect(counterStore.count).toBe(-1)
  })

  it('should calculate doubleCount correctly', () => {
    expect(counterStore.doubleCount).toBe(counterStore.count * 2)
  })
})

// Clean up after each test
afterEach(() => {
  counterStore.count = 0 // Reset the count to 0
})
