const express = require('express');
const { getMe, updateMe, getAllUsers, deleteUser } = require('../controllers/userController');
const protect = require('../middleware/auth');
const { body } = require('express-validator');

const router = express.Router();

// Validation for profile update
const updateValidation = [
  body('name').optional().notEmpty().withMessage('Name cannot be empty'),
  body('email').optional().isEmail().withMessage('Valid email required'),
  body('password')
    .optional()
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),
];

router.get('/me', protect, getMe);
router.put('/me', protect, updateValidation, updateMe);

// Admin routes
router.get('/', protect, getAllUsers);
router.delete('/:id', protect, deleteUser);

module.exports = router;
