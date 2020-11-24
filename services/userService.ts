import api from './api'
import { AuthService } from '@/services/authService'

import { ResponseWrapper, ErrorWrapper } from './utils'

import { BaseService } from './baseService'

export class UsersService extends BaseService {
  static get entity ():string {
    return 'users'
  }

  static async getCurrent () {
    const isAuth:boolean = AuthService.getIsAuth()

    if (isAuth) {
      try {
        const response = await api.get(`${this.entity}/current`)
        const message = `Selected ${this.entity} updated`

        return new ResponseWrapper(response, response.data.data, message)
      } catch (error) {
        const message = error.response.data ? error.response.data.error : error.response.statusText

        throw new ErrorWrapper(error, message)
      }
    }
  }
}