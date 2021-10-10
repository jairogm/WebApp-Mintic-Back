// CRUD = Create Read Update Delete
// Crear, Leer, Actualizar, Eliminar
const Product = require('./../models/product-model');
const products = [];

// POST
const createProduct = (request, response) => {
  const product = request.body;
  const newProduct = new Product(product);
  newProduct.save((error, result) => {
    if (error) {
      return response.status(500).send({ error })
    }
    return response.send(result)
  })
};

// GET
const readProducts = (request, response) => {
  const id = request.query.id;
  const title = request.query.title;
  const sku = request.query.sku;
  const author = request.query.author;

  const filter = {};
  if (id) {
    filter._id = id;
  }
  if (title) {
    filter.title = title;
  }
  if (sku) {
    filter.sku = sku;
  }
  if (author) {
    filter.author = author;
  }

  Product.find(filter, (error, result) => {
    if (error) {
      return response.status(500).send({ error })
    }
    return response.send(result)
  })
};

// PATCH
const updateProduct = (request, response) => {
  const id = request.params.id;
  if (!id) {
    return response.status(400).send({ error: 'No hay id, para modificar' });
  }

  Product.updateOne({ _id: id }, request.body, (error, result) => {
    if (error) {
      return response.status(500).send({ error });
    }

    Product.find({ _id: id }, (error, result) => {
      if (error) {
        return response.status(500).send({ error });
      }
      return response.send(result);
    });
  });
};

// DELETE
const deleteProduct = (request, response) => {
  const id = request.params.id;
  if (!id) {
    return response.status(400).send({ error: 'No hay id, para eliminar' });
  }
  Product.remove({ _id: id }, (error, result) => {
    if (error) {
      return response.status(500).send({ error });
    }
    return response.send(result);
  });
};

module.exports = {
  createProduct,
  readProducts,
  updateProduct,
  deleteProduct,
};