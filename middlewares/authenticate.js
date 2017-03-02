import jwt from 'jsonwebtoken'

export default function (ctx) {
    ctx.status = 200
    return ctx.body = {
        uid: ctx.state,
        token: jwt.sign(
            { role: 'admin' },
            'Mason',
            { expiresIn: '2 days' }
        ),
        message: '登陆成功'
    }
}