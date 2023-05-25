const express = require('express');
const router = express.Router();
const memberController = require('../Controller.js/memberController');

// Create a member
router.post('/', memberController.createMember);

// Read all members
router.get('/all', memberController.getAllMembers);
// Get active members
router.get('/active-members',memberController.getActiveMembers)

// Read a specific member by ID
router.get('/:memberId', memberController.getMemberById);

// Update a member
router.put('/:memberId', memberController.updateMember);

// Delete a member
router.delete('/delete/:memberId', memberController.deleteMember);

//check payment status
router.post('/payment-status', memberController.checkMonthlyFeeStatus);

module.exports = router;


