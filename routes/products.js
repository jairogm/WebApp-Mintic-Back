const express = require('express');
const { createProduct, readProducts, updateProduct, deleteProduct } = require('./../controllers/product-controller');

const {validateRole} = require('./../middleware/validate-role')
const {validateUser} = require('./../middleware/validate-user')

// Router
const router = express.Router();

router.post('/', [validateUser, validateRole], createProduct);

router.get('/', readProducts);

router.get('/', readProducts);

router.patch('/:id', [validateUser, validateRole], updateProduct)

router.delete('/:id', [validateUser, validateRole], deleteProduct)

// GET, POST, PATCH, DELETE // Products

module.exports = router;