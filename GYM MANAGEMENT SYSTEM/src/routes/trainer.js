const express = require('express');
const router = express.Router();
const trainerController = require('../Controller.js/trainerController');


router.post('/add', trainerController.addTrainer);

router.get('/', trainerController.getAllTrainers);

router.get('/:id', trainerController.getTrainerById);

router.put('/:id', trainerController.updateTrainer);

router.delete('/:id', trainerController.deleteTrainer);

router.get('/attendence/:id',trainerController.getAttendence)

module.exports = router;
