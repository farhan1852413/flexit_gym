// utils/generateToken.js
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  const payload = { id: user._id };
  const secret = process.env.JWT_SECRET;
  const expiresIn = process.env.JWT_EXPIRES_IN || '1d';
  return jwt.sign(payload, secret, { expiresIn });
};

module.exports = generateToken;