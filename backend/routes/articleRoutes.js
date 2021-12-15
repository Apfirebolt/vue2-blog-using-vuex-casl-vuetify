import express from 'express'
const router = express.Router()
import {
  createArticle,
  getArticles,
  getSingleArticle,
  deleteArticle,
  updateArticle,
} from '../controllers/articleController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/')
  .post(protect, createArticle)
  .get(getArticles)
router
  .route('/:id')
  .put(protect, updateArticle)
  .delete(protect, deleteArticle)
  .get(getSingleArticle)

export default router
