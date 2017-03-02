import 'babel-polyfill'
import User from '../models/users'
import bcrypt from 'bcrypt-nodejs'

class UsersControllers {

    /**
     * Get all Users
     * @param {ctx} Koa Context
     */
    async find(ctx) {
        ctx.body = await User.find()
    }

    /**
     * Find a user
     * @param {ctx} Koa Context
     */
    async findById(ctx) {
        try {
            const user = await User.findById(ctx.params.id)
            if (!user) {
                ctx.throw(404)
            }
            ctx.body = user
        } catch (err) {
            if (err.name === 'CastError' || err.name === 'NotFoundError') {
                ctx.throw(404)
            }
            ctx.throw(500)
        }
    }

    /**
     * Add a user
     * @param {ctx} Koa Context
     */
    async add(ctx) {
        try {
            const user = await new User(ctx.request.body).save()
            ctx.body = user
        } catch (err) {
            ctx.throw(err)
        }
    }

    /**
     * Update a user
     * @param {ctx} Koa Context
     */
    async update(ctx) {
        try {
            const user = await User.findByIdAndUpdate(ctx.params.id,
                { ...ctx.request.body, updated_at: Date.now() })
            if (!user) {
                ctx.throw(404)
            }
            const updated = await User.findById(ctx.params.id)
            ctx.body = updated
        } catch (err) {
            if (err.name === 'CastError' || err.name === 'NotFoundError') {
                return ctx.throw(err, 404)
            }
            ctx.throw(err.message, 500)
        }
    }

    /**
     * Delete a user
     * @param {ctx} Koa Context
     */
    async delete(ctx) {
        try {
            const user = await User.findByIdAndRemove(ctx.params.id)
            if (!user) {
                ctx.status = 405
                return ctx.body = {
                    message: '查无此账号'
                }
            }
            ctx.body = {
                message: '删除用户成功'
            }
        } catch (err) {
            if (err.name === 'CastError' || err.name === 'NotFoundError') {
                ctx.throw(404)
            }
            ctx.throw(500)
        }
    }

    /**
     * login
     * @param {ctx} Koa Context
     */
    async login(ctx, next) {
        try {
            const { username, password } = ctx.request.body
            await User.findOne({ username }, (err, user) => {
                if (!user) {
                    ctx.status = 400
                    return ctx.body = {
                        message: '账号不存在'
                    }
                }
                user.comparePassword(password, (err, isMatch) => {
                    if (isMatch) {
                        return next()
                    }
                    ctx.status = 401
                    ctx.body = {
                        message: '账户名和密码不匹配'
                    }
                })
            })
        } catch (err) {
            ctx.status = 401
            ctx.body = {
                message: 'Authentication Fail'
            }
        }
    }

}

export default new UsersControllers()