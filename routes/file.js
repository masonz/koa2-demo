import path from 'path'
import crypto from 'crypto'
import Router from 'koa-router'
import multer from 'koa-multer'
import { baseApi } from '../config'
import jwt from '../middlewares/jwt'
// import FileController from '../controllers/file'

const api = 'upload'

let fileUrl = ''
let message = '没有文件上传'
let status = 400

const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function (req, file, cb) {
        const { originalname } = file
        const { extname } = path
        crypto.pseudoRandomBytes(16, (err, raw) => {
            if (err) {
                status = 400
                return message = '上传失败'
            }
            status = 200
            message = '上传成功'
            fileUrl = `/uploads/${raw.toString('hex')}${extname(originalname)}`
            cb(null, raw.toString('hex') + extname(originalname))
        })
    }
})

const upload = multer({ storage })

const router = new Router()

router.prefix(`/${baseApi}/${api}`)

router.post('/', jwt, upload.single('file'), async (ctx, next) => {
    ctx.status = status
    ctx.body = {
        message: message,
        url: fileUrl
    }
})

export default router