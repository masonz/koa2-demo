import jwt from 'koa-jwt'

export default jwt({
    secret: 'Mason'
})