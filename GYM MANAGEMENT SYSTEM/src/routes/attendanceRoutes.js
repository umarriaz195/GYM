const express = require('express');
const router = express.Router();
const trainerAttendanceController = require('../Controller.js/attendanceController');

// Route for recording trainer attendance
router.post('/record', trainerAttendanceController.recordAttendance);

// Route for updating trainer attendance
// router.post('/update', trainerAttendanceController.updateAttendance);
router.put('/update', trainerAttendanceController.updateAttendance);

module.exports = router;
