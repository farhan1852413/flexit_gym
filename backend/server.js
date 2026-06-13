// server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');

// Load env vars
dotenv.config({ path: './.env' });

// Connect to DB
connectDB();

const app = express();

// Middleware
app.use(helmet());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json()); // parse JSON bodies

app.get("/", (req, res) => {
  res.send("Flexit Backend is running 🚀");
});

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/memberships', require('./routes/membershipRoutes'));
app.use('/api/trainers', require('./routes/trainerRoutes'));
app.use('/api/contacts', require('./routes/contactRoutes'));

// Global error handler (must be after routes)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
