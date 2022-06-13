import { defineStore } from 'pinia';

export interface AuthUser extends Record<string, any> {}

export type AuthState = {
  loggedIn: boolean;
  user: AuthUser | null;
  loading: boolean;
};

export const useAuthStore = defineStore({
  id: 'auth',
  state: (): AuthState => {
    const { token, user } = useAuthStorage();

    return {
      loggedIn: !!token.value,
      user: user.value,
      loading: false,
    };
  },
  actions: {
    login<T extends AuthUser = Record<string, any>>(user: T, token: string) {
      this.user = user;
      this.loggedIn = true;

      const { store } = useAuthStorage();
      store(token, user);
    },
    logout() {
      const { clear } = useAuthStorage();
      clear();

      this.loggedIn = false;
      this.user = null;
    },
  },
});
