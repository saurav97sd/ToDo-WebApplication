const express = require('express');

//using the express.Router() module 
const router = express.Router();
console.log('Router loaded'); //Just Checking

//importing the controller
const homeController = require('../controllers/home_controller');

//setting the action for route
router.get('/', homeController.home);
//For any route other than '/' use this
router.use('/delete', require('./delete'));
router.use('/add', require('./add'));

//exporting it to be used by server.js
module.exports = router;