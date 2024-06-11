import type { AxiosError } from 'axios'

export interface RootResponse<T> {
  code: number
  message: string
  data: T
}

export type ErrorResponse = AxiosError<RootResponse<null>>

export interface Meta {
  total: number
  limit: number
  page: number
  offset: number
  current_page: number
  total_page: number
}

export interface ListMeta<T> {
  list: T
  meta: Meta
}

export interface PaginatedResponse<T> extends RootResponse<ListMeta<T>> {}
