import { NextFunction, Request, Response } from 'express'

const logMiddleWare = (req: Request, res: Response, next: NextFunction) => {
  const userAgent = req.headers['user-agent']
  console.log(userAgent)
  next()
}

export { logMiddleWare }
