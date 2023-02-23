/**
 * API helper.
 * 
 * @param options - Fetch options.
 * @returns - Fetch response.
 * @example
 * const { data } = await $api('https://example.com/api')
 * @example
 * const { data } = await $api('/api')
 * @example
 * const { data } = await $api('/api', {
 *  method: 'POST',
 *  body: JSON.stringify({ foo: 'bar' }),
 * })
 */
export const $api = <T = unknown>(...options: Parameters<typeof $fetch>) => {
  const config = useRuntimeConfig()
  const baseURL = config.public.apiUrl

  return $fetch<T>(options[0], {
    baseURL,
    ...options[1],
  })
}
