// import { responseErrorHandler } from '../utils/ResponseErrorHandler'

export const saveData = async (data: any, Modelo: any): Promise<any> => {
  const dataModel = new Modelo(data)
  const saved = dataModel.save()
  return saved
}

export const listData = async (filter: any = {}, model: any): Promise<any> => {
  const data = await model.find(filter)
  return data
}

export const updateData = async (id: string, data: any, model: any): Promise<any> => {
  const update = await model.findByIdAndUpdate({ _id: id }, data)
  return update
}

export const deleteData = async (id: string, model: any): Promise<any> => {
  const deleteD = await model.findByIdAndDelete(id)
  return deleteD
}
