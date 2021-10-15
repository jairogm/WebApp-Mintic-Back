const express = require('express');
const { createUser, readUsers, updateUser, deleteUser, authUser } = require('./../controllers/user-controller');

// Router
const router = express.Router();

router.post('/', createUser);

router.get('/', readUsers);

router.get('/', readUsers);

router.patch('/:id', updateUser);

router.delete('/:id', deleteUser);

router.post('/auth/', authUser);

// GET, POST, PATCH, DELETE // Users

module.exports = router;