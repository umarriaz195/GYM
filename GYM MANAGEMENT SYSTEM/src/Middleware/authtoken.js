const jwt = require('jsonwebtoken');
const Owner = require('../Models/owner');

exports.verifyToken = async (req, res, next) => {
  const token = req.header('Authorization');

  try {
    // Check if the token is provided
    if (!token) {
      return res.status(401).json({ message: 'Access denied. Token missing' });
    }

    // Verify and decode the token
    const decoded = jwt.verify(token, 'your-secret-key');

    // Find the owner associated with the token
    const owner = await Owner.findById(decoded._id);
    if (!owner) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    // Add the owner to the request object
    req.owner = owner;
    next();
  } catch (error) {
    console.error('Error verifying token:', error.message);
    res.status(401).json({ message: 'Invalid token' });
  }
};
