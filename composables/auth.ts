import { storeToRefs } from 'pinia';
import { useAuthStore } from '~~/stores/auth';

export const useAuth = () => {
  const auth = useAuthStore();
  const { loggedIn, user } = storeToRefs(auth);

  return { loggedIn, user, logout: auth.logout, login: auth.login };
};
