import express from 'express'
import morgan from 'morgan'
import path from 'path'
import fileUpload from 'express-fileupload'
import 'colors'

import { env } from './config/environments'
import { DBConnect } from './config/mongodb'
import { apiRoutesV1 } from './server/routes/apiv1'
import { imagesRoute } from './server/routes/images'

const app = express()
const PORT = env.PORT !== undefined ? env.PORT : 3000

DBConnect()

// middlewares
app.use(express.json())
app.use(morgan('dev'))
// middelware para recibir archivos en la petición
app.use(fileUpload({
  createParentPath: true
}))

// ||--------- Rutas del servidor ---------||

// Añade el frontend al servidor en la ruta '/'
app.use(express.static(path.resolve(__dirname, './public')))
// Rutas de la API
apiRoutesV1(app)
// Ruta para mostrar imagenes del servidor
app.use(imagesRoute)
app.use((_req, res) => {
  res.send('Ruta no disponible 404')
  res.status(404).end()
})

app.listen(PORT, () => {
  console.clear()
  console.log('==============================='.green)
  console.log(` Server stared in port ${String(PORT)}`.green)
  console.log('==============================='.green)
})
