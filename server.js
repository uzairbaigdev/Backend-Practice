import express from 'express'
import userRoutes from './routes/usersRoutes.js'
import productRoutes from './routes/productRoutes.js'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const app = express()
const port = 3000
const publicPath = path.join(path.dirname(fileURLToPath(import.meta.url)), 'public')

app.use(express.static(publicPath))

app.use('/users', userRoutes)
app.use('/products', productRoutes)

app.listen(port, () => {
  console.log(`app is listening on port number ${port}`)
})