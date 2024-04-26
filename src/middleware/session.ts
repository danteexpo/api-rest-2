import { NextFunction, Request, Response } from 'express'
import { verifyToken } from '../utils/jwt.handle'
import { JwtPayload } from 'jsonwebtoken'

interface RequestExt extends Request {
  user?: string | JwtPayload
}

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwt = req.headers.authorization?.split(' ').pop()
    const user = verifyToken(jwt as string)
    if (!user) {
      res.status(401)
      res.send('INVALID_JWT_TOKEN')
    }
    req.user = user
    next()
  } catch (e) {
    res.status(400)
    res.send('INVALID_SESSION')
  }
}

export { checkJwt }
