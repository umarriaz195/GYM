// routes/feePayment.js
const express = require('express');
const router = express.Router();
const { getAccountDetails,sendmessage, processFeePayment,paySalary, addAdmin ,adminLogin} = require('../Controller.js/adminController');





// API route for fee payment
router.post('/fee-payment', processFeePayment);
router.put('/pay/:trainerId',paySalary)
router.post('/register', addAdmin);
router.post('/login', adminLogin);
router.post('/ok',sendmessage)

router.get('/accounts',getAccountDetails)
module.exports = router;
