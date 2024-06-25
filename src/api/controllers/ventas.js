// segunda colección
const Ventas = require('../models/ventas')

const postVentas = async (req, res, next) => {
  try {
    // Eliminar IDs duplicados
    const uniqueCocheIds = [...new Set(coche)]

    // Verificar si alguno de los coches ya está asociado con otra venta
    const existingVenta = await Ventas.findOne({
      coche: { $in: uniqueCocheIds }
    })
    if (existingVenta) {
      return res
        .status(400)
        .json('Uno o más coches ya están asociados a otra venta')
    }
    const newVenta = new Ventas({
      vendido,
      year,
      coche: uniqueCocheIds
    })
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

    //? Obtener la venta actual
    const currentVenta = await Ventas.findById(id)
    if (!currentVenta) {
      return res.status(404).json('Venta no encontrada')
    }

    //? Verificar si se proporcionan coches y procesarlos
    if (req.body.coche) {
      //? Eliminar IDs duplicados
      const uniqueCocheIds = [...new Set(req.body.coche)]

      //? Verificar si alguno de los coches ya está asociado con otra venta diferente
      const existingVenta = await Ventas.findOne({
        _id: { $ne: id },
        coche: { $in: uniqueCocheIds }
      })
      if (existingVenta) {
        return res
          .status(400)
          .json('Uno o más coches ya están asociados a otra venta')
      }

      //? Actualizar coches en la venta
      currentVenta.coche = uniqueCocheIds
    }

    //? Actualizar solo los campos proporcionados
    if (req.body.vendido !== undefined) {
      currentVenta.vendido = req.body.vendido
    }
    if (req.body.year !== undefined) {
      currentVenta.year = req.body.year
    }

    //? Guardar la venta actualizada en la base de datos
    const updatedVenta = await currentVenta.save()

    return res.status(200).json(updatedVenta)
  } catch (error) {
    return res.status(400).json('Ha fallado la actualización')
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
