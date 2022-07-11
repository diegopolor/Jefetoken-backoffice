import mongoose from 'mongoose'
import { env } from './environments'

const URI = String(env.DBHOST)

export const DBConnect = (): any => {
  mongoose.connect(URI)
    .then(() => {
      console.log(
        '\nConectado a la base de datos ✔\n'
          .yellow
      )
    }).catch((err) => {
      console.log(
        'No se ha podido conectar a la base de datos ❌'
          .red
      )
      console.log(err)
    })
}

export const DBCloseConnection = (): any => {
  mongoose.connection.close().then(() => {
    console.log('Desconexión exitosa.')
  }).catch((err) => {
    console.log('No se ha podido desconectar de la base de datos.')
    console.log(err)
  })
}
