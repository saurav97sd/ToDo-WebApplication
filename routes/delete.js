const express = require('express');
const router = express.Router();

//Accessing the controller
const deleteController = require('../controllers/delete_controller');
//using the controller for a route
router.post('/todo', deleteController.todo);

module.exports = router;