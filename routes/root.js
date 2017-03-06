import 'babel-polyfill'
import Router from 'koa-router'

const router = new Router()

router.get('/', (ctx) => {
    return ctx.render('index', { company: ["alibaba", "tencent", "baidu"] })
})

export default router
