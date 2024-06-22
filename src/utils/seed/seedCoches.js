const mongoose = require('mongoose')
const Coches = require('../../api/models/coches')
const coches = require('../../data/coches')

mongoose
  .connect(
    'mongodb+srv://proyecto6:proyecto6@cluster0.tneyazi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(async () => {
    const allCoches = await Coches.find()
    if (allCoches.length) {
      await Coches.collection.drop()
      console.log('Coches eliminados')
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    await Coches.insertMany(coches)
    console.log('Coches Introducidos')
  })
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect(console.log('desconectado de la bbdd')))
