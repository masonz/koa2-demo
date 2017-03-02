import 'babel-polyfill'
import Router from 'koa-router'

const router = new Router()

router.get('/', (ctx) => {
    return ctx.render('index')
})

export default router
