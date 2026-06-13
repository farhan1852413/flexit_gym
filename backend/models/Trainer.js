// models/Trainer.js
const mongoose = require('mongoose');

const trainerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    specialization: { type: String },
    experience: { type: Number }, // years of experience
    image: { type: String }, // URL to trainer photo
    bio: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Trainer', trainerSchema);
