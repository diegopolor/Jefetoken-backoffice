import { INews } from '../../types'
import { saveData, updateData, listData, deleteData } from '../utils/crud'
import { newsModel } from '../models/news'
import { responseHandler } from '../utils/responseHandler'
import { uploadImage } from '../utils/utilsImage'
import { dataFoundQuery, dataEliminatedQuery } from '../utils/dataResponseHandler'

import {
  saveErrorHandler,
  updateErrorHandler,
  listErrorHandler,
  deleteErrorHandler
} from '../utils/crudErrorHandler'

export const saveNews = async (data: INews, images: any): Promise<any> => {
  try {
    const dataSave = uploadImage(data, images)
    await saveData(dataSave, newsModel)
    return responseHandler(201, 'Datos guardados con exito')
  } catch (e: any) {
    return saveErrorHandler(e)
  }
}

export const updateNews = async (id: string, data: INews, images: any): Promise<any> => {
  try {
    const dataSave = uploadImage(data, images)
    await updateData(id, dataSave, newsModel)
    return responseHandler(200, 'Datos actualizados con exito')
  } catch (e: any) {
    return updateErrorHandler(e)
  }
}

export const listAllNews = async (): Promise<any> => {
  const data = await listData({ }, newsModel)
  return dataFoundQuery(data)
}

export const listFilteredNews = async (dateFilter: any = { }): Promise<any> => {
  try {
    const data = await listData(dateFilter, newsModel)
    return dataFoundQuery(data)
  } catch (e: any) {
    return listErrorHandler(e)
  }
}

export const deleteNews = async (id: any): Promise<any> => {
  try {
    const deleted = await deleteData(id, newsModel)
    return dataEliminatedQuery(deleted)
  } catch (e: any) {
    return deleteErrorHandler(e)
  }
}
