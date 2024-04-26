import { Request, Response } from 'express'
import { handleHttp } from '../utils/error.handle'
import {
  getCars,
  getCar,
  insertCar,
  updateCar,
  deleteCar,
} from '../services/car'
import { JwtPayload } from 'jsonwebtoken'

interface RequestExt extends Request {
  user?: string | JwtPayload
}

const getAllCtrl = async (_req: Request, res: Response) => {
  try {
    const response = await getCars()
    res.send(response)
  } catch (e) {
    handleHttp(res, 'ERROR_GET_ALL')
  }
}

const getOneCtrl = async (req: Request, res: Response) => {
  try {
    const response = await getCar(req.params.id)
    res.send(response)
  } catch (e) {
    handleHttp(res, 'ERROR_GET_ONE')
  }
}

const postCtrl = async (req: RequestExt, res: Response) => {
  try {
    const response = await insertCar(req.body)
    res.send({ data: response, user: req.user })
  } catch (e) {
    handleHttp(res, 'ERROR_POST')
  }
}

const updateCtrl = async (req: Request, res: Response) => {
  try {
    const response = await updateCar(req.params.id, req.body)
    res.send(response)
  } catch (e) {
    handleHttp(res, 'ERROR_UPDATE')
  }
}

const deleteCtrl = async (req: Request, res: Response) => {
  try {
    const response = await deleteCar(req.params.id)
    res.send(response)
  } catch (e) {
    handleHttp(res, 'ERROR_DELETE')
  }
}

export { getAllCtrl, getOneCtrl, postCtrl, updateCtrl, deleteCtrl }
