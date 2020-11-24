import qs from 'qs'

import api from './api'
import { AuthService } from '@/services/authService'

import { ResponseWrapper, ErrorWrapper } from './utils'

import { ErrorInterface } from '@/models/errorModels'
import { ResponseInterface } from '@/models/responseModels'

export class BaseService {
  static get entity ():string {
    throw new Error('entity getter not defined')
  }
  /**
   * ------------------------------
   * @HELPERS
   * ------------------------------
   */

  static responseWrapper (response:ResponseInterface, data:Object, message:string) {
    return new ResponseWrapper(response, data, message)
  }

  static errorWrapper (error:ErrorInterface, message:string) {
    return new ErrorWrapper(error, message)
  }

  static querystring (obj: object) {
    return qs.stringify(obj, {
      encode: false
    })
  }

  /**
   * ------------------------------
   * @API_CALLS_PUBLIC
   * ------------------------------
   */

  static async getListPublic (parameters = {}) {

    const params = { ...parameters }

    try {
      const response = await api.get(`${this.entity}`, { params })
      const data = {
        content: response.data.data,
        total: Number(response.headers['x-total-count'])
      }
      const message = `${this.entity} public list: loaded`

      return new ResponseWrapper(response, data, message)
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      
      throw new ErrorWrapper(error, message)
    }
  }

  static async getByIdPublic (id:number) {
    try {
      const response = await api.get(`${this.entity}/${id}`)
      const message = `${this.entity} public item: loaded`

      return new ResponseWrapper(response, response.data.data, message)
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      
      throw new ErrorWrapper(error, message)
    }
  }

  /**
   * ------------------------------
   * @API_CALLS_PRIVATE
   * ------------------------------
   */  
  
  static async getById (id:number) {
    const isAuth:boolean = AuthService.getIsAuth()

    if (isAuth) {
      try {
        const response = await api.get(`${this.entity}/${id}`)
        const message = `${this.entity} private item: loaded`

        return new ResponseWrapper(response, response.data.data, message)
      } catch (error) {
        const message = error.response.data ? error.response.data.error : error.response.statusText

        throw new ErrorWrapper(error, message)
      }
    }
  }

  static async create (data:Object = {}) {
    const isAuth:boolean = AuthService.getIsAuth()

    if (isAuth) {
      try {
        const response = await api.post(`${this.entity}`, data)
        const message = `New ${this.entity} created`

        return new ResponseWrapper(response, response.data.data, message)
      } catch (error) {
        const message = `New ${this.entity} try to create, but fail`

        throw new ErrorWrapper(error, message)
      }
    }
  }

  static async update (id:number, data:Object = {}) {
    const isAuth:boolean = AuthService.getIsAuth()

    if (isAuth) {
      try {
        const response = await api.put(`${this.entity}/${id}`, data)
        const message = `Selected ${this.entity} updated`

        return new ResponseWrapper(response, response.data.data, message)
      } catch (error) {
        const message = `Selected ${this.entity} try to update, but fail`

        throw new ErrorWrapper(error, message)
      }
    }
  }

  static async remove (id:number) {
    const isAuth:boolean = AuthService.getIsAuth()
    
    if (isAuth) {
      try {
        const response = await api.delete(`${this.entity}/${id}`)
        const message = `Selected ${this.entity} deleted`

        return new ResponseWrapper(response, response.data.data, message)
      } catch (error) {
        const message = `Selected ${this.entity} try to delete, but fail`

        throw new ErrorWrapper(error, message)
      }
    }
  }
}