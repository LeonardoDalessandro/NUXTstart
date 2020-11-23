import {ErrorInterface, ErrorWrapperInterface} from '@/models/errorModels'
import {ResponseInterface, ResponseWrapperInterface} from '@/models/responseModels'

/**
 * Return message for HTTP status code
 * @param {number} status - HTTP status code
 * @returns {string} Message of network operation
 */
function _getStatusMessage (status:number):string {
  let message:string = ''
  switch (status) {
    case 200:
      message = 'All done. Request successfully executed'
      break
    case 201:
      message = 'Data successfully created'
      break
    case 400:
      message = 'Bad Request'
      break
    case 401:
      message = 'Need auth'
      break
    case 404:
      message = 'Not found'
      break
    case 503:
      message = 'Service unavailable. Try again later'
      break
    default:
      message = 'Something wrong. Client default error message'
      break
  }
  return message
}

function _getResponseErrorMessage (error: ErrorInterface):string {
  if (error.response && error.response.data) return error.response.data.message
  if (error.response && error.response.statusText) return error.response.statusText
  return error.message === 'Network Error' ? 'Oops! Network Error. Try again later' : error.message
}

/**
 * Create instant, which represent response object
 * @param {Object} [data] - custom data
 * @param {Object} [response] - axios response object
 * @param {String} [message] - custom message to display
 */
export class ResponseWrapper implements ResponseWrapperInterface {
  data = {}
  success = 0
  status = 0
  statusMessage = ''
  message = ''

  constructor (response: ResponseInterface, data:Object = {}, message:string) {
    this.data = data
    this.success = response.data.success
    this.status = response.status
    this.statusMessage = _getStatusMessage(this.status)
    this.message = message
  }
}

/**
 * Create instant, which represent error object
 * @param {Object} [error] - axios error object
 * @param {String} [message] - custom message to display
 */
export class ErrorWrapper extends Error implements ErrorWrapperInterface {
  success = ''
  meta = ''
  code = 0
  status = 0
  statusMessage = ''
  message = ''

  constructor (error:ErrorInterface, message:string) {
    super()
    this.success = error.response.data.success
    this.meta = error.response.data.meta
    this.code = error.response.data.code
    this.status = error.response.status
    this.statusMessage = _getStatusMessage(this.status)
    this.message = message || _getResponseErrorMessage(error)
  }
}
