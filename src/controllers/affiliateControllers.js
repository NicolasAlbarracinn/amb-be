const Affiliates = require('../models/affiliates');

const AppError = require('../utils/errorHandler');
const catchAsync = require('../utils/catchAsync');

const createOne = () => {};
exports.getOne = () => {};

exports.getAll = catchAsync(async (req, res, next) => {
  const documents = await Affiliates.find();

  if (!documents) {
    return next(new AppError('No affiliates list'), 400);
  }

  res.status(200).json({
    status: 'success',
    results: documents.length,
    data: documents,
  });
});

const updateOne = () => {};
const deleteOne = () => {};
