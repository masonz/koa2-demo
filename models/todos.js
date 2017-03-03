import mongoose from 'mongoose'
import autopopulate from 'mongoose-autopopulate'

const Schema = mongoose.Schema

mongoose.Promise = global.Promise

const todoSchema = Schema({
    title: {
        type: String,
        required: true,
        maxlength: 50
    },
    desc: {
        type: String,
        default: '',
        maxLenght: 200
    },
    done: {
        type: Boolean,
        default: false
    },
    created_at: Date,
    updated_at: Date,
    user: { type: Schema.Types.ObjectId, ref: 'users', autopopulate: { select: 'username' } }
})

todoSchema.plugin(autopopulate)

export default mongoose.model('todos', todoSchema)