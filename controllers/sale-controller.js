// CRUD = Create Read Update Delete
// Crear, Leer, Actualizar, Eliminar
const Sale = require('./../models/sale-model');
const users = [];

// POST
const createSale = (request, response) => {
};

// GET
const readSales = (request, response) => {
  const id = request.params.id;

  const filter = {};
  if (id) {
    filter._id = id;
  }

  Sale.find(filter, (error, result) => {
    if (error) {
      return response.status(500).send({ error })
    }
    return response.send(result)
  })
};

// PATCH
const updateSale = () => {};

// DELETE
const deleteSale = () => {};

module.exports = {
  createSale,
  readSales,
  updateSale,
  deleteSale,
};