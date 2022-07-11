import { Router } from 'express'
import {
  saveUser,
  updateUser,
  listAllUsers,
  listFilteredUsers,
  deleteUser
} from '../../controllers/users'
import { promiseEnd } from '../../utils/promiseEnd'

export const userRouters = Router()

// Guardar usuarios
userRouters.post('/', (req, res) => {
  saveUser(req.body)
    .then((response: any) => {
      res.status(response.code).json(response.message).end()
    }, promiseEnd)
})

// Actualizar usuarios
userRouters.put('/:id', (req, res) => {
  updateUser(req.params.id, req.body)
    .then((response) => {
      res.status(response.code).json(response.message).end()
    }, promiseEnd)
})

// Listar usuarios
userRouters.get('/', (_req, res) => {
  listAllUsers()
    .then((response: any) => {
      res.status(response.code).json(response.message).end()
    }, promiseEnd)
})

// Listar usuarios filtrados
userRouters.post('/filter', (req, res) => {
  listFilteredUsers(req.body)
    .then((response: any) => {
      res.status(response.code).json(response.message).end()
    }, promiseEnd)
})

// eliminar usuarios
userRouters.delete('/:id', (req, res) => {
  deleteUser(req.params.id)
    .then((response: any) => {
      res.status(response.code).json(response.message).end()
    }, promiseEnd)
})
