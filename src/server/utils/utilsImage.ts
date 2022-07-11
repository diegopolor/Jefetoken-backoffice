import path from 'path'
import { v4 as uuidv4 } from 'uuid'

// Da formato a los nombres de las imagenes subidas y devuelve ubicación de la imagen a subir y el nombre
export const formatImage = (images: any, pathImage: string): any => {
  const idRandom = uuidv4()
  const ImageExtension = images?.name.split('.')[1]
  const imageEncryptName = `${idRandom}.${String(ImageExtension)}`
  // Toma la raiz de la ruta de imagenes
  const imagesPath = path.resolve(__dirname, pathImage)
  // Cocatena la ruta de la imagen con el nombre del misma para obtener la ubicación donde mover la imagen
  const imageMV = path.join(imagesPath, `${imageEncryptName}`)
  return ({
    imageMV,
    imageEncryptName
  })
}

// Sube la imagen al servidor y devuelve la ruta de la imagen en el modelo pasado como parametro
export const uploadImage = (data: any, images: any): any => {
  const imageFormat = formatImage(images, '../files/images')
  // Mueve la imagen a la ruta retornada
  images.mv(imageFormat.imageMV)

  const URIimage = `/images/${String(imageFormat.imageEncryptName)}`
  const dataSave = { ...data, URIimage }
  return dataSave
}
