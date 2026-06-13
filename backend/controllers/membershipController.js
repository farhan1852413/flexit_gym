// controllers/membershipController.js
const asyncHandler = require('../middleware/asyncHandler');
const { validationResult } = require('express-validator');
const Membership = require('../models/Membership');

// @desc    Get all memberships
// @route   GET /api/memberships
// @access  Private
exports.getMemberships = asyncHandler(async (req, res) => {
  const memberships = await Membership.find();
  res.json(memberships);
});

// @desc    Get single membership
// @route   GET /api/memberships/:id
// @access  Private
exports.getMembership = asyncHandler(async (req, res) => {
  const membership = await Membership.findById(req.params.id);
  if (!membership) {
    return res.status(404).json({ message: 'Membership not found' });
  }
  res.json(membership);
});

// @desc    Create a membership
// @route   POST /api/memberships
// @access  Private
exports.createMembership = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const membership = await Membership.create(req.body);
  res.status(201).json(membership);
});

// @desc    Update a membership
// @route   PUT /api/memberships/:id
// @access  Private
exports.updateMembership = asyncHandler(async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const membership = await Membership.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!membership) {
    return res.status(404).json({ message: 'Membership not found' });
  }
  res.json(membership);
});

// @desc    Delete a membership
// @route   DELETE /api/memberships/:id
// @access  Private
exports.deleteMembership = asyncHandler(async (req, res) => {
  const membership = await Membership.findByIdAndDelete(req.params.id);
  if (!membership) {
    return res.status(404).json({ message: 'Membership not found' });
  }
  res.json({ message: 'Membership deleted' });
});
