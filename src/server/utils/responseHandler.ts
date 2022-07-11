import { IResponseHandler } from '../../types'

export const responseHandler = (
  code: number,
  message: string | object
): IResponseHandler => {
  return {
    code,
    message
  }
}
