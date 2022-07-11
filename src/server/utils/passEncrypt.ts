import bcrypt from 'bcrypt'

// recibe el pass y devuelve el pass encriptado dentro del modelo pasado por parametro
export const passEncrypt = async (data: any): Promise<any> => {
  const password = await bcrypt.hash(data.password, 10)
  const dataSave = { ...data, password }
  return dataSave
}
