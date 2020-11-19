const Affiliates = require('../models/affiliates');

const AppError = require('../utils/errorHandler');
const catchAsync = require('../utils/catchAsync');

const createOne = () => {};
exports.getOne = () => {};

//posibles sort criterias parameters: "asc", "desc", "ascending", "descending", 1, or -1
//TODO: Improve this
exports.getAll = catchAsync(async (req, res, next) => {
  const { sortField, sortCriteria, limit, offset } = req.query;

  const query = [];

  if (sortField && sortCriteria) {
    query.push({ $sort: { [sortField]: sortCriteria === 'asc' ? 1 : -1 } });
  }

  if (offset) {
    query.push({ $skip: parseInt(offset) });
  }
  if (limit) {
    query.push({ $limit: parseInt(limit) });
  }

  const documents = await Affiliates.aggregate(query);

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
