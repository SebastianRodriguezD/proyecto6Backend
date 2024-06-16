const {
  getVentas,
  postVentas,
  deleteVentas,
  updateVentas,
  getVentasId
} = require('../controllers/ventas')

const ventasRoutes = require('express').Router()
ventasRoutes.get('/:id', getVentasId)
ventasRoutes.get('/', getVentas)
ventasRoutes.post('/', postVentas)
ventasRoutes.delete('/:id', deleteVentas)
ventasRoutes.put('/:id', updateVentas)

module.exports = ventasRoutes
