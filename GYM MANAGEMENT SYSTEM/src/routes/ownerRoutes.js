const express = require('express');
const router = express.Router();
const { ownerSignup, ownerLogin } = require('../Controller.js/ownerController');
const { verifyToken } = require('../Middleware/authtoken');

// Owner Signup
router.post('/signup', ownerSignup);

// Owner Login
router.post('/login', ownerLogin);

// Example Protected Route
router.get('/dashboard', verifyToken, (req, res) => {
  // Access owner data from req.owner
  const owner = req.owner;
  res.json({ message: 'Owner Dashboard', owner });
});

module.exports = router;
