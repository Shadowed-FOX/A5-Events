// src/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Definiujemy ścieżki
router.get('/', userController.getAllUsers); // GET /api/users
router.post('/add', userController.createUser); // POST /api/users/add

module.exports = router;