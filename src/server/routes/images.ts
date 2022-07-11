import { Router } from 'express'
import path from 'path'

export const imagesRoute = Router()

imagesRoute.get('/images/:id', (req, res) => {
  const id = req.params.id
  res.sendFile(path.resolve(__dirname, `../files/images/${id}`))
})
