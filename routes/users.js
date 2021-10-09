const express = require('express');
const { createUser, readUsers, updateUser,deleteUser } = require('./../controllers/user-controller');

// Router
const router = express.Router();

router.post('/', createUser);

router.get('/', readUsers);

router.get('/:id', readUsers);

router.patch('/:id', updateUser);

router.delete('/:id', deleteUser);

// GET, POST, PATCH, DELETE // Users

module.exports = router;