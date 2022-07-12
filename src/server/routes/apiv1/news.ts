import { Router } from 'express'
import { saveNews, updateNews, listAllNews, listFilteredNews, deleteNews } from '../../controllers/news'
import { promiseEnd } from '../../utils/promiseEnd'
import { pruebaMiddleware } from '../../middlewares/prueba'

export const newsRouters = Router()

// Guardar noticias
newsRouters.post('/', (req, res) => {
  const file = req.files?.images
  saveNews(req.body, file)
    .then((response) => {
      res.status(response.code).json(response.message).end()
    }, promiseEnd)
})

// Actualizar Noticias
newsRouters.put('/:id', (req, res) => {
  const file = req.files?.images
  updateNews(req.params.id, req.body, file)
    .then((response) => {
      res.status(response.code).json(response.message).end()
    }, promiseEnd)
})

newsRouters.get('/', pruebaMiddleware, (_req, res) => {
  listAllNews()
    .then((response) => {
      res.status(response.code).json(response.message).end()
    }, promiseEnd)
})

newsRouters.post('/filter', (req, res) => {
  console.log(req.body)
  listFilteredNews(req.body)
    .then((response) => {
      res.status(response.code).json(response.message).end()
    }, promiseEnd)
})

newsRouters.delete('/:id', (req, res) => {
  deleteNews(req.params.id)
    .then((response) => {
      res.status(response.code).json(response.message).end()
    }, promiseEnd)
})
