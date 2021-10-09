const express = require('express');
const { createSale, readSales } = require('./../controllers/sale-controller');

// Router
const router = express.Router();

router.post('/', createSale);

router.get('/', readSales);

router.get('/:id', readSales);

// GET, POST, PATCH, DELETE // Sales

module.exports = router;