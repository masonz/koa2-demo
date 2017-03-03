import jwt from 'jsonwebtoken'

// get current user
export default (ctx) => {

    const { authorization } = ctx.header 

    const token = authorization.substr(7)

    let decode = jwt.verify(token, 'Mason')

    return decode.user

}