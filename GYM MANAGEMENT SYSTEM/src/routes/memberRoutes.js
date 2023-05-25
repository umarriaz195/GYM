const express = require('express');
const router = express.Router();
const memberController = require('../Controller.js/memberController');


router.post('/', memberController.createMember);

router.get('/all', memberController.getAllMembers);

router.get('/active-members', memberController.getActiveMembers)

router.get('/:memberId', memberController.getMemberById);

router.put('/:memberId', memberController.updateMember);

router.delete('/delete/:memberId', memberController.deleteMember);

router.post('/payment-status', memberController.checkMonthlyFeeStatus);



module.exports = router;


