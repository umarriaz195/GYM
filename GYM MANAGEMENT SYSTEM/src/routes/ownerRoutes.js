const express = require('express');
const router = express.Router();
const { ownerSignup,dashboard, createAccount,ownerLogin } = require('../Controller.js/ownerController');
const { verifyToken } = require('../Middleware/authtoken');

// Owner Signup
router.post('/signup', ownerSignup);

// Owner Login
router.post('/login', ownerLogin);
router.post('/account',createAccount)
// Example Protected Route
// router.get('/dashboard', verifyToken, (req, res) => {
//   // Access owner data from req.owner
//   const owner = req.owner;
//   res.json({ message: 'Owner Dashboard', owner });
// });
router.get('/dashboard',dashboard)
module.exports = router;
