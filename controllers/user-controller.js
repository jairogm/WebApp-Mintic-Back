// CRUD = Create Read Update Delete
// Crear, Leer, Actualizar, Eliminar
const User = require('./../models/user-model');
const users = [];

// POST
const createUser = (request, response) => {
  const user = new User(request.body)
  user.save((error, result)=>{
    if(error) {
      return response.status(500).send({error})
    }
    return response.send(result)
  })

};

// GET
const readUsers = (request, response) => {
  const id = request.query.id;
  const username = request.query.username;
  const name = request.query.name;
  const DNI = request.query.DNI;

  const filter = {};
  if (id) {
    filter._id = id;
  }
  if (DNI) {
    filter.DNI = DNI;
  }
  if (username) {
    filter.userName = username;
  }
  if (name) {
    filter.name = name;
  }
  User.find(filter, (error, result) => {
    if (error) {
      return response.status(500).send({ error })
    }
    return response.send(result)
  })
};

// PATCH
const updateUser = (request, response) => {
  const id = request.params.id;
  if (!id) {
    return response.status(400).send({ error: 'No hay id, para modificar' });
  }

  User.updateOne({ _id: id }, request.body, (error, result) => {
    if (error) {
      return response.status(500).send({ error });
    }

    User.find({ _id: id }, (error, result) => {
      if (error) {
        return response.status(500).send({ error });
      }
      return response.send(result);
    });
  });
};

// DELETE
const deleteUser = (request, response) => {
  const id = request.params.id;
  if (!id) {
    return response.status(400).send({ error: 'No hay id, para eliminar' });
  }
  User.remove({ _id: id }, (error, result) => {
    if (error) {
      return response.status(500).send({ error });
    }
    return response.send(result);
  });
};

module.exports = {
  createUser,
  readUsers,
  updateUser,
  deleteUser,
};