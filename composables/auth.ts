import { storeToRefs } from 'pinia';

export const useAuth = () => {
  const auth = useAuthStore();
  const { loggedIn, user } = storeToRefs(auth);

  return { loggedIn, user, logout: auth.logout, login: auth.login };
};
