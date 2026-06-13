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
app.use(helmet({
  crossOriginResourcePolicy: false // ✅ helmet can block CORS, disable it
}));

const corsOptions = {
  origin: [
    'http://localhost:5173',
    'https://flexit-gym.vercel.app'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // ✅ add OPTIONS
  allowedHeaders: ['Content-Type', 'Authorization'],    // ✅ add this
  credentials: true
}

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // ✅ handle preflight for all routes

app.use(express.json());

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