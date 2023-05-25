const express = require('express');
const router = express.Router();
const trainerAttendanceController = require('../Controller.js/attendanceController');



router.post('/record', trainerAttendanceController.recordAttendance);

router.put('/update', trainerAttendanceController.updateAttendance);

module.exports = router;
