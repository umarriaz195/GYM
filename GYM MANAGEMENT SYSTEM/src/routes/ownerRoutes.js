const express = require('express');
const router = express.Router();
const { verifyToken } = require('../Middleware/authtoken');
const ownerController= require('../Controller.js/ownerController')



router.post('/signup', ownerController.ownerSignup);

router.post('/login', ownerController.ownerLogin);

router.post('/account',ownerController.createAccount)

router.get('/dashboard',ownerController.dashboard)


module.exports = router;
