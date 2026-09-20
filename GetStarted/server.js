import express from 'express'
import 'dotenv/config'
import userRoutes from './routes/usersRoutes.js'
import productRoutes from './routes/productRoutes.js'
import { closeDatabaseConnection, connectToDatabase } from './config/database.js'

const app = express()
const port = Number(process.env.PORT) || 3000

app.use('/users', userRoutes)
app.use('/products', productRoutes)

const server = await connectToDatabase().then(() => app.listen(port, () => {
   console.log(`App is listening on port ${port}`)
})).catch((error)=> {
   console.error(`error in conecting database`,error);
})

async function shutdown(signal) {
   console.log(`${signal} received. Shutting down...`)
   server.close(async () => {
      await closeDatabaseConnection()
      process.exit(0)
   })
}

process.on('SIGINT', () => shutdown('SIGINT'))
process.on('SIGTERM', () => shutdown('SIGTERM'))