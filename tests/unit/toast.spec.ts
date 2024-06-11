import { describe, it, expect, vi, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useToast } from '~/stores/toast'

describe('useToast Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should initialize with default values', () => {
    const toast = useToast()
    expect(toast.isOpen).toBe(false)
    expect(toast.message).toBe('')
    expect(toast.options).toEqual({
      color: 'default',
      timeout: 3000,
    })
  })

  it('should show toast with message and default options', () => {
    const toast = useToast()
    const message = 'Test Message'

    toast.show(message)

    expect(toast.isOpen).toBe(true)
    expect(toast.message).toBe(message)
    expect(toast.options).toEqual({})
  })

  it('should show toast with message and custom options', () => {
    const toast = useToast()
    const message = 'Test Message'
    const options = { color: 'red', timeout: 5000 }

    toast.show(message, options)

    expect(toast.isOpen).toBe(true)
    expect(toast.message).toBe(message)
    expect(toast.options).toEqual(options)
  })

  it('should hide toast after timeout', () => {
    vi.useFakeTimers()
    const toast = useToast()
    const message = 'Test Message'
    const options = { color: 'red', timeout: 3000 }

    toast.show(message, options)

    expect(toast.isOpen).toBe(true)
    expect(toast.message).toBe(message)

    vi.advanceTimersByTime(3000)

    expect(toast.isOpen).toBe(false)
    expect(toast.message).toBe('')
  })

  it('should close toast manually', () => {
    const toast = useToast()
    const message = 'Test Message'

    toast.show(message)
    toast.close()

    expect(toast.isOpen).toBe(false)
    expect(toast.message).toBe('')
  })
})
