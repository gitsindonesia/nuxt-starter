import axios from 'axios'

// login
export interface LoginPayload {
  username: string
  password: string
  expiresInMins?: number
}

export interface LoginResponse {
  id: number
  username: string
  firstName: string
  lastName: string
  gender: string
  image: string
  token: string
  refreshToken: string
}

export function login(payload: LoginPayload) {
  return axios.post<LoginResponse>('https://dummyjson.com/auth/login', payload)
}