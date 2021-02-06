const express = require('express');
const router = express.Router();

//Accessing the controller
const usersController = require('../controllers/users_controller');
//using the controller for a route
router.get('/profile', usersController.profile);

module.exports = router;