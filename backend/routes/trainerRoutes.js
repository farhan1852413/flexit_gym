// routes/trainerRoutes.js
const express = require('express');
const { body, param } = require('express-validator');
const {
  getAllTrainers,
  getTrainerById,
  createTrainer,
  updateTrainer,
  deleteTrainer,
} = require('../controllers/trainerController');
const protect = require('../middleware/auth');

const router = express.Router();

// Validation rules for creating/updating a trainer
const trainerValidation = [
  body('name').notEmpty().withMessage('Name is required'),
  body('specialization').optional().isString(),
  body('experience').optional().isInt({ min: 0 }).withMessage('Experience must be a non‑negative integer'),
  body('image').optional().isURL().withMessage('Image must be a valid URL'),
  body('bio').optional().isString(),
];

// Public routes
router.get('/', getAllTrainers);
router.get('/:id', param('id').isMongoId(), getTrainerById);

// Protected routes
router.post('/', protect, trainerValidation, createTrainer);
router.put('/:id', protect, param('id').isMongoId(), trainerValidation, updateTrainer);
router.delete('/:id', protect, param('id').isMongoId(), deleteTrainer);

module.exports = router;
