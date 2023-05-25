const express = require('express');
const router = express.Router();
const adminController = require('../Controller.js/adminController')



router.post('/fee-payment', adminController.processFeePayment);

router.put('/pay/:trainerId', adminController.paySalary)

router.post('/register', adminController.addAdmin);

router.post('/login', adminController.adminLogin);

router.post('/ok', adminController.sendmessage)

router.get('/checkactivestatus', adminController.checkMonthlyFeeStatus)

router.get('/accounts', adminController.getAccountDetails)



module.exports = router;
