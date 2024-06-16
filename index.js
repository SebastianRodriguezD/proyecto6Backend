require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/config/db')
const cochesRoutes = require('./src/api/routes/coches')
const ventasRoutes = require('./src/api/routes/ventas')

const app = express()
connectDB()
app.use(express.json())

app.use('/api/v1/coches', cochesRoutes)
app.use('/api/v1/ventas', ventasRoutes)

app.use('/ping', (req, res, next) => {
  res.status(202).json('pong')
})

app.use('*', (req, res, next) => {
  return res.status(404).json('Route not found')
})

app.listen(3000, () => {
  console.log('Servidor levantado en: http://localhost:3000')
})
