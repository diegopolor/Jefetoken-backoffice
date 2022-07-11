import { responseHandler } from './responseHandler'

export const dataFoundQuery = (data: any): any => {
  if (data.length !== 0) return responseHandler(200, data)
  else return responseHandler(404, { error: 'No se encontraron datos en esta consulta' })
}

export const dataEliminatedQuery = (data: any): any => {
  if (data !== null) return responseHandler(204, ' ')
  else return responseHandler(404, { error: 'No se encontró el elemento a eliminar' })
}
