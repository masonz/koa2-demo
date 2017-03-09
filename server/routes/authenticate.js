import 'babel-polyfill'
import Router from 'koa-router'
import { baseApi } from '../../config'
import authenticate from '../middlewares/authenticate'

const api = 'authenticate'

const router = new Router()

router.prefix(`/${baseApi}/${api}`)

router.post('/', authenticate)

export default router