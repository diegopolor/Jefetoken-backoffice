import { responseHandler } from './responseHandler'

export const saveErrorHandler = (e: any, uniqueName: string = ' '): any => {
  if (String(e).includes('unique')) {
    return responseHandler(400, { error: `El valor del campo "${uniqueName}" ya se encuentra registrado.` })
  } else if (e._message.includes('validation failed') === true) {
    return responseHandler(400, { error: 'Datos enviados no validos, verifique la información.' })
  }
}

export const updateErrorHandler = (e: any): any => {
  // Si da error en el campo _id
  if (e.path.includes('_id') === true) {
    return responseHandler(400, { error: 'El id no coincide con un registro existente.' })
  } else if (e.path.includes('_id') !== true) { // si da error en un campo diferente
    return responseHandler(400, { error: `El valor del campo "${String(e.path)}" es incorrecto` })
  }
}

export const listErrorHandler = (e: any): any => {
  // Si da error en el campo _id
  if (e.path.includes('_id') === true) {
    return responseHandler(404, { error: 'No se encontraron datos relacionados a la id' })
  }
}

export const deleteErrorHandler = (e: any): any => {
  if (e.path.includes('_id') === true) { // si se envia en la petición una key erronea
    return responseHandler(404, { error: `No se encuentran registros con la id:  ${String(JSON.stringify(e.value))}` })
  }
}
