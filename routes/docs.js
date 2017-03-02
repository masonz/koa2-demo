import 'babel-polyfill'
import aglio from 'aglio'
import Router from 'koa-router'
import fs from 'fs'

let htmlCtx = ''

let options = {
    themeVariables: 'default',
    theme: 'slate'
}

// parse markdown to html
fs.readFile('api-doc/doc.md', 'utf8', function (err, blueprint) {
    if (err) throw err
    aglio.render(blueprint, options, (err, html, warnings) => {
        if (err) return console.log(err)
        if (warnings) console.log('build api-doc done~')
        htmlCtx = html
    })
})

const router = new Router()

router.prefix('/doc')

router.get('/', (ctx, next) => {
    ctx.body = htmlCtx
    next()
})

export default router
