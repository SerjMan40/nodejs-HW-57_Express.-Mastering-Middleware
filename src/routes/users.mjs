import express from 'express'
import {
  deleteUserIdHandler,
  getUserIdHandler,
  getUsersHandler,
  postUsersHandler,
  putUserIdHandler
} from '../controllers/users.mjs'
import authenticate from '../middlewares/authenticate.mjs'
import validateUserInput from '../middlewares/validateUserInput.mjs'


const usersRouter = express.Router()

usersRouter.get('/', authenticate, getUsersHandler)
usersRouter.post('/', validateUserInput, authenticate,  postUsersHandler)

usersRouter.get('/:userId', authenticate,  getUserIdHandler)
usersRouter.put('/:userId', authenticate,  putUserIdHandler)
usersRouter.delete('/:userId', authenticate,  deleteUserIdHandler)

export default usersRouter
