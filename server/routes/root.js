import 'babel-polyfill'
import Router from 'koa-router'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
// import App from './App'
// import rootReducer from './reducers'

const router = new Router()

router.get('/', (ctx) => {
    return ctx.render('login')
})

export default router