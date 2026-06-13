// models/Membership.js
const mongoose = require('mongoose');

const membershipSchema = new mongoose.Schema({
  name: { type: String, required: true },
  duration: { type: Number, required: true }, // duration in months
  price: { type: Number, required: true },
  description: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Membership', membershipSchema);
