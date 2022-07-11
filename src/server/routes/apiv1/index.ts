import { Router } from 'express'
import { userRouters } from './users'
import { newsRouters } from './news'

export const apiRoutesV1 = (app: any): void => {
  const Route = Router()
  Route.use('/users', userRouters)
  Route.use('/news', newsRouters)
  app.use('/api/v1', Route)
}
