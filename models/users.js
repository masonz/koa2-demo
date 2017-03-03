import mongoose from 'mongoose'
import bcrypt from 'bcrypt-nodejs'
import autopopulate from 'mongoose-autopopulate'

const Schema = mongoose.Schema

mongoose.Promise = global.Promise

const userSchema = Schema({
    username: {
        type: String,
        index: { unique: true },
        required: true,
        maxlength: 50,
        minlength: 8
    },
    password: {
        type: String,
        required: true,
        maxLenght: 20,
        minlength: 8
    },
    created_at: Date,
    updated_at: Date,
    todolist: [
        { type: Schema.Types.ObjectId, ref: 'todos', autopopulate: true }
    ]
})

userSchema.pre('save', function (next) {
    let user = this
    if (user.password) {
        let salt = bcrypt.genSaltSync(10)
        user.password = bcrypt.hashSync(user.password, salt)
    }
    next()
})

userSchema.methods.comparePassword = function (attemptedPassword, callback) {
    bcrypt.compare(attemptedPassword, this.password, function (err, isMatch) {
        if (err) return callback(err)
        callback(null, isMatch)
    })
}

userSchema.plugin(autopopulate)

export default mongoose.model('users', userSchema)