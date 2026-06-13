// routes/membershipRoutes.js
const express = require('express');
const { body, param } = require('express-validator');
const {
  getMemberships,
  getMembership,
  createMembership,
  updateMembership,
  deleteMembership,
} = require('../controllers/membershipController');
const protect = require('../middleware/auth');

const router = express.Router();

// Validation rules
const membershipValidation = [
  body('name').notEmpty().withMessage('Name is required'),
  body('duration').isNumeric().withMessage('Duration must be a number'),
  body('price').isNumeric().withMessage('Price must be a number'),
];

router.get('/', protect, getMemberships);
router.get('/:id', protect, param('id').isMongoId(), getMembership);
router.post('/', protect, membershipValidation, createMembership);
router.put('/:id', protect, param('id').isMongoId(), membershipValidation, updateMembership);
router.delete('/:id', protect, param('id').isMongoId(), deleteMembership);

module.exports = router;
