const express = require('express');
const { createProduct, readProducts, updateProduct, deleteProduct } = require('./../controllers/product-controller');

// Router
const router = express.Router();

router.post('/', createProduct);

router.get('/', readProducts);

router.get('/:id', readProducts);

router.patch('/:id', updateProduct)

router.delete('/:id', deleteProduct)

// GET, POST, PATCH, DELETE // Products

module.exports = router;