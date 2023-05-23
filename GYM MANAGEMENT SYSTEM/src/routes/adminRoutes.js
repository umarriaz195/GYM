// routes/feePayment.js
const express = require('express');
const router = express.Router();
const {  processFeePayment, addAdmin ,adminLogin} = require('../Controller.js/adminController');





// API route for fee payment
router.post('/fee-payment', processFeePayment);

router.post('/register', addAdmin);
router.post('/login', adminLogin);


module.exports = router;
