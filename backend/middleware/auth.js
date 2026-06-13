// middleware/auth.js
const jwt = require('jsonwebtoken');
const asyncHandler = require('./asyncHandler');
const User = require('../models/User');

/**
 * Protect routes by verifying JWT token.
 * Attaches the authenticated user document to req.user.
 */
const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({ message: 'Not authorized, token missing' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password');
    if (!user) {
      return res.status(401).json({ message: 'Not authorized, user not found' });
    }
    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: 'Not authorized, token invalid' });
  }
});

module.exports = protect;
