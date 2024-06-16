const {
  getCoches,
  postCoches,
  deleteCoches,
  updateCoches
} = require('../controllers/coches')

const cochesRoutes = require('express').Router()

cochesRoutes.get('/', getCoches)
cochesRoutes.post('/', postCoches)
cochesRoutes.delete('/:id', deleteCoches)
cochesRoutes.put('/:id', updateCoches)

module.exports = cochesRoutes
