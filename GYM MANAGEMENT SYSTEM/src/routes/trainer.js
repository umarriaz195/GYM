const express = require('express');
const router = express.Router();
const trainerController = require('../Controller.js/trainerController');

// Route for adding a trainer
router.post('/add', trainerController.addTrainer);

module.exports = router;
