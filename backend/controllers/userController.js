// controllers/userController.js
const asyncHandler = require('../middleware/asyncHandler');
const { validationResult } = require('express-validator');
const User = require('../models/User');

// @desc    Get current user's profile
// @route   GET /api/users/me
exports.getMe = asyncHandler(async (req, res) => {
  // protect middleware already attached req.user
  res.json(req.user);
});

// @desc    Update current user's profile (name, email, password)
// @route   PUT /api/users/me
exports.updateMe = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;
  const user = await User.findById(req.user._id);

  if (name) user.name = name;
  if (email) user.email = email;
  if (password) user.password = password; // will be hashed by pre-save hook

  await user.save();

  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  });
});

// @desc    Admin: Get all users
// @route   GET /api/users
exports.getAllUsers = asyncHandler(async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Admin access required' });
  }
  const users = await User.find().select('-password');
  res.json(users);
});

// @desc    Admin: Delete a user
// @route   DELETE /api/users/:id
exports.deleteUser = asyncHandler(async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Admin access required' });
  }
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'User deleted' });
});
