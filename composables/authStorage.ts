import type { AuthUser } from '~~/stores/auth'

export const AUTH_TOKEN_STORAGE_KEY = 'auth.token'
export const AUTH_USER_STORAGE_KEY = 'auth.user'

export const useAuthStorage = (
  { authTokenKey, authUserKey } = {
    authTokenKey: AUTH_TOKEN_STORAGE_KEY,
    authUserKey: AUTH_USER_STORAGE_KEY,
  },
) => {
  const user = useCookie<AuthUser | null>(authUserKey)
  const token = useCookie<string>(authTokenKey)

  const store = (newToken: string, newUser: Record<string, any>) => {
    token.value = newToken
    user.value = newUser
  }

  const clear = () => {
    user.value = null
    token.value = ''
  }

  return { store, clear, user, token }
}
