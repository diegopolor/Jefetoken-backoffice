import dotenv from 'dotenv'
import path from 'path'

dotenv.config()

const UsedEnvironment = dotenv.config({
  path: path.resolve(__dirname, `../environments/.env.${String(process.env.NODE_ENV)}`)
})

export const env = {
  PORT: UsedEnvironment.parsed?.PORT,
  DBHOST: UsedEnvironment.parsed?.DBHOST
}
