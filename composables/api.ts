export const useApi = <T = unknown>(...args: Parameters<typeof $fetch>) => {
  const config = useRuntimeConfig();
  const auth = useAuthStorage();
  const token = auth.token.value;

  return useFetch<T>(args[0], {
    baseURL: config.public.apiUrl,
    headers: {
      authorization: token ? `Bearer ${token}` : undefined,
    },
    ...args[1],
  });
};
