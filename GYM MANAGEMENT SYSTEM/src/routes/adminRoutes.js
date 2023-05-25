// routes/feePayment.js
const express = require('express');
const router = express.Router();
const {  processFeePayment, addAdmin ,adminLogin,sendmessage,checkMonthlyFeeStatus} = require('../Controller.js/adminController');





// API route for fee payment
router.post('/fee-payment', processFeePayment);

router.post('/register', addAdmin);
router.post('/login', adminLogin);
router.post('/ok',sendmessage)
router.get('/checkactivestatus', checkMonthlyFeeStatus)


module.exports = router;
