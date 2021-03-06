import api from './api'
import securityService from './securityService'

import { ResponseWrapper, ErrorWrapper } from './utils'
import $store from '../store'

import { AuthinputDataInterface } from '@/models/authModels'


let BEARER: string = ''
let isAuth: boolean = false

export class AuthService {
  /**
   ******************************
   * @API
   ******************************
   */

  static async makeLogin (data:AuthinputDataInterface) {
    try {
      const fingerprint = await securityService()
      const response = await api.post(`${process.env.API_BASE_URL}/auth/login`,
        { data, fingerprint },
        { withCredentials: true })
      const token = response.data.data.accessToken

      _setAuthData(token)
      const message = `Login success`

      return new ResponseWrapper(response, response.data.data, message)
    } catch (error) {
      const message = `Login fail`

      throw new ErrorWrapper(error, message)
    }
  }

  static async makeLogout () {
    try {
      const response = await api.post('auth/logout', {}, { withCredentials: true })
      _resetAuthData()
      //TODO: understand how redirect programaticaly from here
      //this.$router.push({ name: 'login' }).catch(() => {}) 
      const message = `Logout success`

      return new ResponseWrapper(response, response.data.data, message)
    } catch (error) {
      const message = `Logout fail`

      throw new ErrorWrapper(error, message)
    }
  }


  /**
   ******************************
   * @METHODS
   ******************************
   */

  static getBearer () {
    return BEARER
  }

  static setBearer (accessToken:string) {
    BEARER = `Bearer ${accessToken}`
  }

  static getIsAuth () {
    return isAuth
  }

  static setIsAuth (val:boolean) {
    isAuth = val
  }

}
/**
 ******************************
 * @private_methods
 ******************************
 */

function _resetAuthData () {
  // reset userData in store
  $store.commit('user/SET_CURRENT_USER', {})

  // reset tokens
  AuthService.setBearer('')
  AuthService.setIsAuth(false)
}

function _setAuthData (accessToken:string) {
  AuthService.setBearer(accessToken)
  AuthService.setIsAuth(true)
}