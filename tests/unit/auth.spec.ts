import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useAuth } from '~/stores/auth'

describe('useAuth Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should initialize with default values', () => {
    const auth = useAuth()
    expect(auth.isLoggedIn).toBe(false)
    expect(auth.user).toBeUndefined()
    expect(auth.token).toBeUndefined()
  })

  it('should login correctly', () => {
    const auth = useAuth()
    const user = { id: 1, name: 'John Doe', email: 'john.doe@example.com' }
    const token = 'some-token'

    auth.login(user, token)

    expect(auth.isLoggedIn).toBe(true)
    expect(auth.user).toEqual(user)
    expect(auth.token).toBe(token)
  })

  it('should logout correctly', () => {
    const auth = useAuth()
    const user = { id: 1, name: 'John Doe', email: 'john.doe@example.com' }
    const token = 'some-token'

    auth.login(user, token)
    auth.logout()

    expect(auth.isLoggedIn).toBe(false)
    expect(auth.user).toBeUndefined()
    expect(auth.token).toBeUndefined()
  })
})
