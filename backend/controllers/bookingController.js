// controllers/bookingController.js
const asyncHandler = require('../middleware/asyncHandler');
const { validationResult } = require('express-validator');
const Booking = require('../models/Booking');

// @desc    Get all bookings
// @route   GET /api/bookings
// @access  Protected
exports.getAllBookings = asyncHandler(async (req, res) => {
  const bookings = await Booking.find();
  res.json(bookings);
});

// @desc    Get a single booking by ID
// @route   GET /api/bookings/:id
// @access  Protected
exports.getBookingById = asyncHandler(async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  if (!booking) {
    return res.status(404).json({ message: 'Booking not found' });
  }
  res.json(booking);
});

// @desc    Create a new booking
// @route   POST /api/bookings
// @access  Protected
exports.createBooking = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const booking = await Booking.create(req.body);
  res.status(201).json(booking);
});

// @desc    Update a booking
// @route   PUT /api/bookings/:id
// @access  Protected
exports.updateBooking = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!booking) {
    return res.status(404).json({ message: 'Booking not found' });
  }
  res.json(booking);
});

// @desc    Delete a booking
// @route   DELETE /api/bookings/:id
// @access  Protected
exports.deleteBooking = asyncHandler(async (req, res) => {
  const booking = await Booking.findByIdAndDelete(req.params.id);
  if (!booking) {
    return res.status(404).json({ message: 'Booking not found' });
  }
  res.json({ message: 'Booking deleted' });
});

module.exports = exports;
