const express = require('express');
const router = express.Router();
const trainerController = require('../Controller.js/trainerController');

// Route for adding a trainer
router.post('/add', trainerController.addTrainer);

// Route for getting all trainers
router.get('/', trainerController.getAllTrainers);

// Route for getting a single trainer by ID
router.get('/:id', trainerController.getTrainerById);

// Route for updating a trainer
router.put('/:id', trainerController.updateTrainer);

// Route for deleting a trainer
router.delete('/:id', trainerController.deleteTrainer);

module.exports = router;
