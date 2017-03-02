import 'babel-polyfill'
import Router from 'koa-router'
import { baseApi } from '../config'
import jwt from '../middlewares/jwt'
import UserController from '../controllers/users'
import authenticate from '../middlewares/authenticate'

const api = 'users'

const router = new Router()

router.prefix(`/${baseApi}/${api}`)

// get api/logout
router.get('/', UserController.find)

// post api/users
router.post('/', UserController.add)

// post api/users/login
router.post('/login', UserController.login, authenticate)

// get api/todos/id
router.get('/:id', jwt, UserController.findById)

// put api/todos/id
router.put('/:id', jwt, UserController.update)

// delete api/todos/id
router.delete('/:id', jwt, UserController.delete)

export default router
