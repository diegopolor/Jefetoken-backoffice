import { Schema, model } from 'mongoose'
import { IUsers } from '../../types'
import uniqueValidator from 'mongoose-unique-validator'

const userSchema = new Schema<IUsers>({
  email: { type: String, unique: true },
  password: String,
  wallet: String,
  rol: String
})

userSchema.plugin(uniqueValidator)

export const usersModel = model('Users', userSchema)
