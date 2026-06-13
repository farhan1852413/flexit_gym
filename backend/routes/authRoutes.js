// routes/authRoutes.js
const express = require('express');
const { body } = require('express-validator');
const { registerUser, loginUser, getUserProfile } = require('../controllers/authController');
const protect = require('../middleware/auth');

const router = express.Router();

// Validation rules
const registerValidation = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),
  body('role').optional().isIn(['member', 'admin']).withMessage('Invalid role'),
];

const loginValidation = [
  body('email').isEmail().withMessage('Valid email is required'),
  body('password').exists().withMessage('Password is required'),
];

// @route   POST /api/auth/register
router.post('/register', registerValidation, registerUser);

// @route   POST /api/auth/login
router.post('/login', loginValidation, loginUser);

// @route   GET /api/auth/profile
router.get('/profile', protect, getUserProfile);

module.exports = router;
