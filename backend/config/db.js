// config/db.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
  try {
    const mongoUri = 'mongodb://127.0.0.1:27017/gym';
    const conn = await mongoose.connect(mongoUri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    // Continue without exiting; the app may still function for routes not requiring DB
  }
};

module.exports = connectDB;