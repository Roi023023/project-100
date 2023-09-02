const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController'); // Import the admin controller

router.get('/', homeController.getHomePage); // Route to the controller homepage 

module.exports = router;