// routes/contactRoutes.js
const express = require('express');
const { submitContact, getAllContacts } = require('../controllers/contactController');
const protect = require('../middleware/auth');

const router = express.Router();

// Submit a new contact (protected)
router.post('/', submitContact);

// Get all contacts (protected)
router.get('/', protect, getAllContacts);

module.exports = router;
