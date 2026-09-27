import express from 'express'
import 'dotenv/config'
import path from 'path'
import { fileURLToPath } from 'url'
import { connectToDatabase } from './config/database.js'
import userRoutes from './routes/usersRoutes.js'
import productRoutes from './routes/productRoutes.js'

const app = express()
const port = process.env.PORT || 3000
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.json())
app.use('/users', userRoutes)
app.use('/products', productRoutes)
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

const startServer = () => {
  app.listen(port, () => {
    console.log(`server is running on port ${port}`)
  })
}

connectToDatabase()
  .then(() => {
    startServer()
  })
  .catch((error) => {
    console.error('Database connection failed. Starting server without MongoDB:', error.message)
    startServer()
  })