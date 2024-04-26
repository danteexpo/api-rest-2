import { Router } from 'express'
import {
  deleteItem,
  getItem,
  getItems,
  postItem,
  updateItem,
} from '../controllers/item'
import { logMiddleWare } from '../middleware/log'

const router = Router()

router.get('/', logMiddleWare, getItems)
router.get('/:id', getItem)
router.post('/', postItem)
router.put('/:id', updateItem)
router.delete('/:id', deleteItem)

export { router }
