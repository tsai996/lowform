import type {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios'
import axios from 'axios'

export interface ResultData<T> {
  code: number
  success: boolean
  message: string
  data: T
}

class RequestHttp {
  service: AxiosInstance

  public constructor(config: AxiosRequestConfig) {
    this.service = axios.create(config)
    this.service.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        config.headers['Authorization'] = 'Bearer token'
        return config
      },
      (error: AxiosError) => {
        console.log(error)
      }
    )
    this.service.interceptors.response.use((response: AxiosResponse) => {
      const { data } = response
      return data
    })
  }

  request<T>(config: AxiosRequestConfig): Promise<ResultData<T>> {
    return this.service.request(config)
  }
}

export default new RequestHttp({
  baseURL: '/',
  timeout: 10000
})
