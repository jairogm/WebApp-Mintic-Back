const express = require('express');
const { createUser, readUsers } = require('./../controllers/user-controller');

// Router
const router = express.Router();

router.post('/', createUser);

router.get('/', readUsers);

router.get('/:id', readUsers);

// GET, POST, PATCH, DELETE // Users

module.exports = router;