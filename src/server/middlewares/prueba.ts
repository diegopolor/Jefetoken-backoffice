export const pruebaMiddleware = (req: any, _res: any, next: any): void => {
  const AuthValue = req.header('Authentication')
  const token = AuthValue.split(' ')[1]
  console.log(token)
  next()
}
