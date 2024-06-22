const mongoose = require('mongoose')

const ventaSchema = new mongoose.Schema(
  {
    vendido: { type: Boolean, required: true },
    year: { type: Number, required: true },
    coche: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'coches',
        required: true,
        unique: true
      }
    ]
  },
  {
    timestamps: true,
    collection: 'ventas'
  }
)

ventaSchema.index({ coches: 1, year: 1 }, { unique: true })

const Ventas = mongoose.model('Ventas', ventaSchema, 'ventas')

module.exports = Ventas
