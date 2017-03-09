import Koa from 'koa'
import views from "koa-views"
import logger from 'koa-logger'
import helmet from 'koa-helmet'
import mongoose from 'mongoose'
import routing from './server/routes/'
import serve from "koa-static2"
import favicon from 'koa-favicon'
import bodyparser from 'koa-bodyparser'
import { port, connexionString } from './config.js'

// const koaSwagger = require('koa2-swagger-ui')

mongoose.connect(connexionString)
mongoose.connection.on('error', console.error)

// Create Koa Application
const app = new Koa()

app
  .use(serve("/", __dirname)) // set static root path
  .use(logger())
  .use(bodyparser())
  .use(helmet())
  .use(favicon(__dirname + '/server/public/images/favicon.ico'))
  .use(views(__dirname + "/server/views", { extension: 'pug' }))
// .use(koaSwagger({
//   routePrefix: '/swagger', // host at /swagger instead of default /docs 
//   swaggerOptions: {
//     url: '/api-blueprint/api.json', // example path to json 
//   },
// }))

routing(app)

// Start the application
app.listen(port, () => console.log(`✅  The server is running at http://localhost:${port}/`))

export default app