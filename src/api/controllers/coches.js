const Coches = require('../models/coches')

const postCoches = async (req, res, next) => {
  try {
    const newCoche = new Coches(req.body)
    const cochesSaved = await newCoche.save()
    return res.status(201).json(cochesSaved)
  } catch (error) {
    return res.status(400).json('ha fallado la petición')
  }
}

const getCoches = async (req, res, next) => {
  try {
    const allCoches = await Coches.find()
    return res.status(200).json(allCoches)
  } catch (error) {
    return res.status(400).json('ha fallado la busqueda')
  }
}

const updateCoches = async (req, res, next) => {
  try {
    const { id } = req.params
    const newCoches = new Coche(req.body)
    newCoches._id = id
    const up = await Coche.findByIdAndUpdate(id, newCoches, { new: true })
    return res.status(200).json(up)
  } catch (error) {
    return res.status(400).json('ha fallado la busqueda')
  }
}

const deleteCoches = async (req, res, next) => {
  try {
    const { id } = req.params
    await Coches.findByIdAndDelete(id)
    return res.status(200).json('elemento eliminado')
  } catch (error) {
    return res.status(400).json('ha fallado la busqueda')
  }
}

module.exports = {
  getCoches,
  postCoches,
  deleteCoches,
  updateCoches
}
