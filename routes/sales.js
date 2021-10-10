const express = require('express');
const { createSale, readSales, updateSale, deleteSale } = require('./../controllers/sale-controller');

// Router
const router = express.Router();

router.post('/', createSale);

router.get('/', readSales);

router.get('/:id', readSales);

router.patch('/:id', updateSale);

router.delete('/:id', deleteSale);

// GET, POST, PATCH, DELETE // Sales

module.exports = router;