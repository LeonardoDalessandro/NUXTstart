/**
 * HTTP request layer
 * if auth is required return patched axios instance(with access token in headers)
 * else return clear axios instance
 */

import axios from 'axios'

import { AuthService } from '@/services/authService'

export class Http {
  isAuth:boolean = false
  instance:any

  constructor (auth: boolean) {
    this.isAuth = auth ? auth : false
    this.instance = axios.create({})
  }

  init () {
    if (this.isAuth) {
      this.instance.interceptors.request.use(request => {
        request.headers.authorization = AuthService.getBearer()
        //TODO: if access token expired and refreshToken is exist >> go to API and get new access token
        return request
      }, error => {
        return Promise.reject(error)
      })
    }

    return this.instance
  }
}