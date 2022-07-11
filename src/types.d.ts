export type UsersRol = 'user' | 'admin'

export interface IUsers {
  email: string
  password: string
  wallet: string
  rol: UsersRol
}

export interface INews {
  date: string
  title: string
  content: string
  author: string
  URIimage: string
  tags: string
}

export interface IResponseHandler {
  code: number
  message: string | object
}
