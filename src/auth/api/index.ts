import axios from 'axios'

export const authInstance = axios.create({
  baseURL: 'http://localhost:3000/api/auth',
})