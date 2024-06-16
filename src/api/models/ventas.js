const mongoose = require('mongoose')

const ventaSchema = new mongoose.Schema(
  {
    vendido: { type: Boolean, required: true },
    year: { type: Number, required: true },
    coche: [{ type: mongoose.Types.ObjectId, ref: 'coches' }]
  },
  {
    timestamps: true,
    collection: 'ventas'
  }
)

const Ventas = mongoose.model('ventas', ventaSchema, 'ventas')

module.exports = Ventas
