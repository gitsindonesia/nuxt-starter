export const $api = <T = unknown>(...options: Parameters<typeof $fetch>) => {
  const config = useRuntimeConfig()
  const baseURL = config.public.apiUrl

  return $fetch<T>(options[0], {
    baseURL,
    ...options[1],
  })
}
