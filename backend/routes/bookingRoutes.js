// routes/bookingRoutes.js
const express = require('express');
const { body, param } = require('express-validator');
const {
  getAllBookings,
  getBookingById,
  createBooking,
  updateBooking,
  deleteBooking,
} = require('../controllers/bookingController');
const protect = require('../middleware/auth');

const router = express.Router();

// Validation rules for creating/updating a booking
const bookingValidation = [
  body('userId').isMongoId().withMessage('Valid userId required'),
  body('trainerId').isMongoId().withMessage('Valid trainerId required'),
  body('bookingDate').isISO8601().toDate().withMessage('Valid bookingDate required'),
  body('bookingTime').notEmpty().withMessage('bookingTime is required'),
];

// Protected routes
router.get('/', protect, getAllBookings);
router.get('/:id', protect, param('id').isMongoId(), getBookingById);
router.post('/', protect, bookingValidation, createBooking);
router.put('/:id', protect, param('id').isMongoId(), bookingValidation, updateBooking);
router.delete('/:id', protect, param('id').isMongoId(), deleteBooking);

module.exports = router;
