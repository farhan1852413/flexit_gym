// controllers/authController.js
const asyncHandler = require('../middleware/asyncHandler');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const generateToken = require('../utils/generateToken');

/**
 * @desc    Register a new user
 * @route   POST /api/auth/register
 * @access  Public
 */
exports.registerUser = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { name, email, password, role } = req.body;
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists with this email' });
  }
  const user = await User.create({ name, email, password, role });
  const token = generateToken(user);
  res.status(201).json({ _id: user._id, name: user.name, email: user.email, role: user.role, token });
});

/**
 * @desc    Login user & get token
 * @route   POST /api/auth/login
 * @access  Public
 */
exports.loginUser = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }
  const token = generateToken(user);
  res.json({ _id: user._id, name: user.name, email: user.email, role: user.role, token });
});

/**
 * @desc    Get logged in user profile
 * @route   GET /api/auth/profile
 * @access  Private
 */
exports.getUserProfile = asyncHandler(async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: 'User not found' });
  }
  res.json(req.user);
});
