import { IUsers } from '../../types'
import { usersModel } from '../models/users'
import { deleteData, listData, saveData, updateData } from '../utils/crud'
import { dataFoundQuery, dataEliminatedQuery } from '../utils/dataResponseHandler'
import { responseHandler } from '../utils/responseHandler'
import { passEncrypt } from '../utils/passEncrypt'

// Manejador de errores de crud
import {
  saveErrorHandler,
  updateErrorHandler,
  listErrorHandler,
  deleteErrorHandler
} from '../utils/crudErrorHandler'

export const saveUser = async (data: IUsers): Promise<any> => {
  try {
    const dataSave = await passEncrypt(data)
    await saveData(dataSave, usersModel)
    return responseHandler(201, { sucess: 'Datos guardados con exito' })
  } catch (e: any) {
    return saveErrorHandler(e, 'email')
  }
}

export const updateUser = async (id: string, data: IUsers): Promise<any> => {
  try {
    const dataSave = await passEncrypt(data)
    await updateData(id, dataSave, usersModel)
    return responseHandler(200, { sucess: 'Datos actualizados con exito' })
  } catch (e: any) {
    return updateErrorHandler(e)
  }
}

export const listAllUsers = async (): Promise<any> => {
  const data = await listData({ }, usersModel)
  return dataFoundQuery(data)
}

export const listFilteredUsers = async (filter: any = { }): Promise<any> => {
  try {
    const data = await listData(filter, usersModel)
    return dataFoundQuery(data)
  } catch (e: any) {
    return listErrorHandler(e)
  }
}

export const deleteUser = async (id: any): Promise<any> => {
  try {
    const deleted = await deleteData(id, usersModel)
    return dataEliminatedQuery(deleted)
  } catch (e: any) {
    return deleteErrorHandler(e)
  }
}
