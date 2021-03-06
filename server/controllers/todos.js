import 'babel-polyfill'
import Todo from '../models/todos'
import User from '../models/users'
import getCurUser from '../utils/getCurUser'

class TodosControllers {

    /**
     * Get all todos
     * @param {ctx} Koa Context
     */
    async find(ctx) {
        const user = await getCurUser(ctx)
        ctx.body = await Todo.find().where('user').equals(user)
    }

    /**
     * Find a todo
     * @param {ctx} Koa Context
     */
    async findById(ctx) {
        try {
            const todo = await Todo.findById(ctx.params.id)
            if (!todo) {
                ctx.throw(404)
            }
            ctx.body = todo
        } catch (err) {
            if (err.name === 'CastError' || err.name === 'NotFoundError') {
                ctx.throw(404)
            }
            ctx.throw(500)
        }
    }

    /**
     * Add a todo
     * @param {ctx} Koa Context
     */
    async add(ctx) {
        try {
            const { body } = ctx.request
            const user = await getCurUser(ctx)
            let data = { ...body, user }
            let todo = await new Todo(data)
            let promise = todo.save()
            promise.then(t => {
                let query = User.findById(user)
                query.then((doc) => {
                    doc.todolist.push(t._id)
                    doc.save()
                })
            })
            ctx.body = todo
        } catch (err) {
            ctx.throw(422)
        }
    }

    /**
     * Update a todo
     * @param {ctx} Koa Context
     */
    async update(ctx) {
        try {
            const { body } = ctx.request
            const { id } = ctx.params
            const todo = await Todo.findByIdAndUpdate(id,
                { ...body, updated_at: Date.now() })
            if (!todo) {
                ctx.throw(404)
            }
            const updated = await Todo.findById(id)
            ctx.body = updated
        } catch (err) {
            if (err.name === 'CastError' || err.name === 'NotFoundError') {
                return ctx.throw(err, 404)
            }
            ctx.throw(err.message, 500)
        }
    }

    /**
     * Delete a todo
     * @param {ctx} Koa Context
     */
    async delete(ctx) {
        try {
            const todo = await Todo.findByIdAndRemove(ctx.params.id)
            if (!todo) {
                ctx.throw(404)
            }
            ctx.body = todo
        } catch (err) {
            if (err.name === 'CastError' || err.name === 'NotFoundError') {
                ctx.throw(404)
            }
            ctx.throw(500)
        }
    }

}

export default new TodosControllers()