// controllers/contactController.js
const asyncHandler = require('../middleware/asyncHandler');
const Contact = require('../models/Contact');
const protect = require('../middleware/auth'); // ensure protect is imported for usage if needed

// @desc    Submit a new contact message
// @route   POST /api/contacts
// @access  Protected (requires authentication)
exports.submitContact = asyncHandler(async (req, res) => {
  // Assuming the request body contains name, email, message fields
  const { name, email, message } = req.body;
  const contact = await Contact.create({ name, email, message });
  res.status(201).json(contact);
});

// @desc    Get all contacts
// @route   GET /api/contacts
// @access  Protected (requires authentication)
exports.getAllContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
});

module.exports = exports;
