import { Request, Response } from 'express'
import { handleHttp } from '../utils/error.handle'

const getItems = (_req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, 'ERROR_GET_ITEMS')
  }
}

const getItem = (req: Request, res: Response) => {
  try {
    console.log(req.params.id)
  } catch (e) {
    handleHttp(res, 'ERROR_GET_ITEM')
  }
}

const postItem = (req: Request, res: Response) => {
  try {
    res.send(req.body)
  } catch (e) {
    handleHttp(res, 'ERROR_POST_ITEM')
  }
}

const updateItem = (_req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, 'ERROR_UPDATE_ITEM')
  }
}

const deleteItem = (_req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, 'ERROR_DELETE_ITEM')
  }
}

export { getItems, getItem, postItem, updateItem, deleteItem }
