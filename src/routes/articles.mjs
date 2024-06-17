import express from 'express'
import {
  deleteAticleHandler,
  getAticleHandler,
  getAticlesHandler,
  postAticlesHandler,
  putAticleHandler
} from '../controllers/articles.mjs'
import authenticate from '../middlewares/authenticate.mjs'


const articlesRouter = express.Router()

articlesRouter.get('/', authenticate, getAticlesHandler)
articlesRouter.post('/', authenticate, postAticlesHandler)

articlesRouter.get('/:articleId', authenticate, getAticleHandler)
articlesRouter.put('/:articleId', authenticate, putAticleHandler)
articlesRouter.delete('/:articleId', authenticate, deleteAticleHandler)

export default articlesRouter
 