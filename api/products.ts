export interface Product {
  id: number
  title: string
  price: number
  stock: number
  category: string
  thumbnail: string
}

export interface ProductsResponse {
  total: number
  products: Product[]
}

export const getProducts = (params?: {
  limit?: number
  skip?: number
}) => {
  return $api<ProductsResponse>('/products', {
    params,
  })
}
