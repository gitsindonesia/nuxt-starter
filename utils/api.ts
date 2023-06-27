/**
 * API helper.
 *
 * @param options - Fetch options.
 * @returns - Fetch response.
 * @example
 * const response = await $api('https://example.com/api')
 * @example
 * const response = await $api('/api')
 * @example
 * const response = await $api('/api', {
 *  method: 'POST',
 *  body: JSON.stringify({ foo: 'bar' }),
 * })
 */
export function $api<T = unknown>(...options: Parameters<typeof $fetch>) {
  const config = useRuntimeConfig()
  const baseURL = config.public.apiUrl

  return $fetch<T>(options[0], {
    baseURL,
    ...options[1],
  })
}

/**
 * API hook.
 *
 * @param options Fetch options.
 * @returns Fetch response.
 * @example
 * const {data, pending} = await $useApi('https://example.com/api')
 */
export function useApi<T = unknown>(...options: Parameters<typeof $api>) {
  return useAsyncData(() => $api<T>(...options))
}

/**
 * API hook with lazy `true`.
 *
 * @param options Fetch options.
 * @returns Fetch response.
 * @example
 * const {data, pending} = await $useLazyApi('https://example.com/api')
 */
export function useLazyApi<T = unknown>(...options: Parameters<typeof $api>) {
  return useAsyncData(() => $api<T>(...options), { lazy: true })
}
