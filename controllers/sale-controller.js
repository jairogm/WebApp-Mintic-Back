// CRUD = Create Read Update Delete
// Crear, Leer, Actualizar, Eliminar
const Sale = require('./../models/sale-model');
const Sales = [];

// POST
const createSale = (request, response) => {
  const newSale = new Sale(request.body)
  newSale.save((error, result)=>{
    if(error) {
      return response.status(500).send({error})
    }
    return response.send(result)
  })

};

// GET
const readSales = (request, response) => {
  const id = request.query.id;
  const clientid = request.query.clientid;
  const clientname = request.query.clientname;
  const date = request.query.date;
  const sellerid = request.query.sellerid;

  const filter = {};
  if (id) {
    filter._id = id;
  }
  if (clientid) {
    filter.clientid = clientid;
  }
  if (clientname) {
    filter.clientname = clientname;
  }
  if (date) {
    filter.date = date;
  }
  if(sellerid){
    filter.sellerid = sellerid;
  }

  Sale.find(filter, (error, result) => {
    if (error) {
      return response.status(500).send({ error })
    }
    return response.send(result)
  })
};

// PATCH
const updateSale = (request, response) => {
  const id = request.params.id;
  if (!id) {
    return response.status(400).send({ error: 'No hay id, para modificar' });
  }

  Sale.updateOne({ _id: id }, request.body, (error, result) => {
    if (error) {
      return response.status(500).send({ error });
    }

    Sale.find({ _id: id }, (error, result) => {
      if (error) {
        return response.status(500).send({ error });
      }
      return response.send(result);
    });
  });
};

// DELETE
const deleteSale = (request, response) => {
  const id = request.params.id;
  if (!id) {
    return response.status(400).send({ error: 'No hay id, para eliminar' });
  }
  Sale.remove({ _id: id }, (error, result) => {
    if (error) {
      return response.status(500).send({ error });
    }
    return response.send(result);
  });
};

module.exports = {
  createSale,
  readSales,
  updateSale,
  deleteSale,
};