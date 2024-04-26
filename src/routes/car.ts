import { Router } from 'express'
import {
  deleteCtrl,
  getAllCtrl,
  getOneCtrl,
  postCtrl,
  updateCtrl,
} from '../controllers/car'
import { checkJwt } from '../middleware/session'

const router = Router()

router.get('/', getAllCtrl)
router.get('/:id', getOneCtrl)
router.post('/', checkJwt, postCtrl)
router.put('/:id', checkJwt, updateCtrl)
router.delete('/:id', checkJwt, deleteCtrl)

export { router }
