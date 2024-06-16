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
const Coches = mongoose.model('coches', cocheSchema, 'coches')
module.exports = Coches
