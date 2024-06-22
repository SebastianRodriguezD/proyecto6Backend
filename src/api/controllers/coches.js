const Coches = require('../models/coches')

const postCoches = async (req, res, next) => {
  try {
    const newCoche = new Coches(req.body)
    const cochesSaved = await newCoche.save()
    return res.status(201).json(cochesSaved)
  } catch (error) {
    return res.status(400).json('ha fallado la creación')
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
    const updateData = req.body

    const updatedCoche = await Coches.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true, runValidators: true }
    )

    if (!updatedCoche) {
      return res.status(404).json('Coche no encontrado')
    }

    return res.status(200).json(updatedCoche)
  } catch (error) {
    return res.status(400).json('ha fallado la actualización del coche')
  }
}

const deleteCoches = async (req, res, next) => {
  try {
    const { id } = req.params
    await Coches.findByIdAndDelete(id)
    return res.status(200).json('elemento eliminado')
  } catch (error) {
    return res.status(400).json('ha fallado la eliminación del elemento')
  }
}

module.exports = {
  getCoches,
  postCoches,
  deleteCoches,
  updateCoches
}
