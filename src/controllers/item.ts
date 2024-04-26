import { Request, Response } from 'express'
import { handleHttp } from '../utils/error.handle'
import {
  getCars,
  getCar,
  insertCar,
  updateCar,
  deleteCar,
} from '../services/item'

const getItems = async (_req: Request, res: Response) => {
  try {
    const responseItems = await getCars()
    res.send(responseItems)
  } catch (e) {
    handleHttp(res, 'ERROR_GET_ITEMS')
  }
}

const getItem = async (req: Request, res: Response) => {
  try {
    const responseItem = await getCar(req.params.id)
    res.send(responseItem)
  } catch (e) {
    handleHttp(res, 'ERROR_GET_ITEM')
  }
}

const postItem = async (req: Request, res: Response) => {
  try {
    const responseItem = await insertCar(req.body)
    res.send(responseItem)
  } catch (e) {
    handleHttp(res, 'ERROR_POST_ITEM')
  }
}

const updateItem = async (req: Request, res: Response) => {
  try {
    const responseItem = await updateCar(req.params.id, req.body)
    res.send(responseItem)
  } catch (e) {
    handleHttp(res, 'ERROR_UPDATE_ITEM')
  }
}

const deleteItem = async (req: Request, res: Response) => {
  try {
    const responseItem = await deleteCar(req.params.id)
    res.send(responseItem)
  } catch (e) {
    handleHttp(res, 'ERROR_DELETE_ITEM')
  }
}

export { getItems, getItem, postItem, updateItem, deleteItem }
