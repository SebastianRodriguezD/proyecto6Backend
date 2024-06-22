// segunda colección
const Ventas = require('../models/ventas')

const postVentas = async (req, res, next) => {
  try {
    const newVenta = new Ventas(req.body)
    const ventasSaved = await newVenta.save()
    return res.status(201).json(ventasSaved)
  } catch (error) {
    return res.status(400).json('ha fallado la creación')
  }
}

const getVentas = async (req, res, next) => {
  try {
    const allventas = await Ventas.find().populate('coche')
    return res.status(200).json(allventas)
  } catch (error) {
    return res.status(400).json('ha fallado la busqueda')
  }
}

const getVentasId = async (req, res, next) => {
  try {
    const { id } = req.params
    const ventasId = await Ventas.findById(id).populate('coche')
    return res.status(200).json(ventasId)
  } catch (error) {
    return res.status(400).json('ha fallado la busqueda')
  }
}

const updateVentas = async (req, res, next) => {
  try {
    const { id } = req.params
    const newVentas = new Ventas(req.body)
    newVentas._id = id
    const up = await Ventas.findByIdAndUpdate(id, newVentas, { new: true })
    return res.status(200).json(up)
  } catch (error) {
    return res.status(400).json('ha fallado la actualización')
  }
}

const deleteVentas = async (req, res, next) => {
  try {
    const { id } = req.params
    await Ventas.findByIdAndDelete(id)
    return res.status(200).json('elemento eliminado')
  } catch (error) {
    return res.status(400).json('ha fallado la eliminación del elemento')
  }
}

module.exports = {
  getVentas,
  getVentasId,
  postVentas,
  updateVentas,
  deleteVentas
}
