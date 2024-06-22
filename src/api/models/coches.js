const mongoose = require('mongoose')
const cocheSchema = new mongoose.Schema(
  {
    imgUrl: { type: String, required: true },
    year: { type: Number, required: true },
    title: { type: String, required: true }
  },
  {
    timestamps: true,
    collection: 'coches'
  }
)

cocheSchema.index({ imgUrl: 1, year: 1, title: 1 }, { unique: true }) // Ejemplo de índice único, para evitar duplicado.

const Coches = mongoose.model('coches', cocheSchema, 'coches')
module.exports = Coches
