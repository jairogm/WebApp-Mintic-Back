// CRUD = Create Read Update Delete
// Crear, Leer, Actualizar, Eliminar
const User = require('./../models/user-model');
const users = [];

// POST
const createUser = (request, response) => {
};

// GET
const readUsers = (request, response) => {
  const id = request.params.id;

  const filter = {};
  if (id) {
    filter._id = id;
  }

  User.find(filter, (error, result) => {
    if (error) {
      return response.status(500).send({ error })
    }
    return response.send(result)
  })
};

// PATCH
const updateUser = () => {};

// DELETE
const deleteUser = () => {};

module.exports = {
  createUser,
  readUsers,
  updateUser,
  deleteUser,
};