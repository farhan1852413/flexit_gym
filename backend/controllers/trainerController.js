const asyncHandler = require('../middleware/asyncHandler');
const Trainer = require('../models/Trainer');

exports.getAllTrainers = asyncHandler(async (req, res) => {
  const trainers = await Trainer.find();
  res.json(trainers);
});

exports.getTrainerById = asyncHandler(async (req, res) => {
  const trainer = await Trainer.findById(req.params.id);
  if (!trainer) {
    return res.status(404).json({ message: 'Trainer not found' });
  }
  res.json(trainer);
});

exports.createTrainer = asyncHandler(async (req, res) => {
  const trainer = await Trainer.create(req.body);
  res.status(201).json(trainer);
});

exports.updateTrainer = asyncHandler(async (req, res) => {
  const trainer = await Trainer.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!trainer) {
    return res.status(404).json({ message: 'Trainer not found' });
  }
  res.json(trainer);
});

exports.deleteTrainer = asyncHandler(async (req, res) => {
  const trainer = await Trainer.findByIdAndDelete(req.params.id);
  if (!trainer) {
    return res.status(404).json({ message: 'Trainer not found' });
  }
  res.json({ message: 'Trainer deleted' });
});
