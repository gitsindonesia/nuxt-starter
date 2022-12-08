export interface Product {
  id: number
  title: string
  price: number
  stock: number
  category: string
  thumbnail: string
  description: string
  images: string[]
}

export interface ProductsResponse {
  total: number
  products: Product[]
}

/**
 * Get products list.
 *
 * @params `limit` Limit of products to return.
 * @params `skip` Number of products to skip.
 */
export const getProducts = (params?: {
  limit?: number
  skip?: number
}) => {
  return $api<ProductsResponse>('/products', {
    params,
  })
}

/**
 * Get single product.
 *
 * @param id Product ID.
 */
export const getProduct = (id: number | string) => {
  return $api<Product>(`/products/${id}`)
}
