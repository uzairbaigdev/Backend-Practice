import express from 'express'
import userRoutes from './routes/usersRoutes.js'
import productRoutes from './routes/productRoutes.js'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const app = express()
const port = 3000
// const publicPath = path.join(path.dirname(fileURLToPath(import.meta.url)), 'public')
  
// app.use(express.static(publicPath))

app.use('/users', userRoutes)
app.use('/products', productRoutes)

let age = 15;

//middleware 1
const middleware1 = (req,res,next) => {
   if(age >= 18) {
      res.send("You are allowed to access this route")
      next();
   } else {
      res.status(403).send("You are not allowed to access this route")
   }
}

app.get("/",middleware1,(req,res)=> {
  res.send("Hello from server.js")
})

app.listen(port, () => {
  console.log(`app is listening on port number ${port}`)
})