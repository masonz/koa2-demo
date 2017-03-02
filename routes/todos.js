import 'babel-polyfill'
import Router from 'koa-router'
import { baseApi } from '../config'
import jwt from '../middlewares/jwt'
import TodosController from '../controllers/todos'

const api = 'todos'

const router = new Router()

router.prefix(`/${baseApi}/${api}`)

// get api/todos
router.get('/', jwt, TodosController.find)

// post api.todos
router.post('/', jwt, TodosController.add)

// get api/todos/id
router.get('/:id', jwt, TodosController.findById)

// put api/todos/id
router.put('/:id', jwt, TodosController.update)

// delete api/todos/id
router.delete('/:id', jwt, TodosController.delete)

export default router
