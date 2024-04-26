import { Request, Response } from 'express'
import { handleHttp } from '../utils/error.handle'
import { loginUser, registerNewUser } from '../services/auth'

const registerCtrl = async (req: Request, res: Response) => {
  try {
    const responseUser = await registerNewUser(req.body)
    res.send(responseUser)
  } catch (e) {
    handleHttp(res, 'ERROR_REGISTER_USER')
  }
}

const loginCtrl = async (req: Request, res: Response) => {
  try {
    const responseUser = await loginUser(req.body)

    if (responseUser === 'PASSWORD_INCORRECT') {
      res.status(403)
    }

    res.send(responseUser)
  } catch (e) {
    handleHttp(res, 'ERROR_LOGIN_USER')
  }
}

export { registerCtrl, loginCtrl }
