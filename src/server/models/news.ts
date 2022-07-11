import { Schema, model } from 'mongoose'
import { INews } from '../../types'

const newsSchema = new Schema<INews>({
  date: Date,
  title: String,
  content: String,
  author: String,
  URIimage: String,
  tags: String
})

export const newsModel = model('news', newsSchema)
