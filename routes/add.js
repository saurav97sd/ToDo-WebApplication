const express = require('express');
const router = express.Router();

//Accessing the controller
const addController = require('../controllers/add_controller');
//using the controller for a route
router.post('/todo', addController.todo);

module.exports = router;