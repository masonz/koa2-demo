import jwt from 'jsonwebtoken'

export default function (ctx) {
    ctx.status = 200
    const { state } = ctx
    return ctx.body = {
        uid: state,
        token: jwt.sign(
            { user: state },
            'Mason',
            { expiresIn: '2 days' }
        ),
        message: '登陆成功'
    }
}