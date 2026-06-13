// models/Booking.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  trainerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Trainer', required: true },
  bookingDate: { type: Date, required: true },
  bookingTime: { type: String, required: true }, // e.g., '10:00 AM'
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending',
  },
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
