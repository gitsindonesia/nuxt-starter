export interface AuthUser extends Record<string, any> {
  id: number
  name: string
  email: string
}

export const useAuth = defineStore('auth', () => {
  const isLoggedIn = ref(false)
  const user = ref<AuthUser>()
  const token = ref()

  function login(_user: AuthUser, _token: string) {
    isLoggedIn.value = true
    user.value = _user
    token.value = _token
  }

  function logout() {
    isLoggedIn.value = false
    user.value = undefined
    token.value = undefined
  }

  return {
    isLoggedIn,
    user,
    token,
    login,
    logout
  }
}, {
  persist: true
})