import { useAuthStore } from '~~/stores/auth';

export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuthStore();
  const router = useRouter();

  if (auth.loggedIn) {
    return router.push({
      path: '/',
      query: {
        from: to.path,
      },
    });
  }
});
