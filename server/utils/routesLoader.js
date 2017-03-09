import glob from 'glob'

// 动态添加路由
export default function (dirname) {
    return new Promise((resovle, reject) => {
        const routes = []
        glob(`${dirname}/*`, {
            ignore: '**/index.js'
        }, (err, files) => {
            if (err) {
                return reject(err)
            }
            files.forEach(file => {
                const route = require(file)
                routes.push(route)
            })
            return resovle(routes)
        })
    })
}