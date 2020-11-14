const Affiliates = require('../models/affiliates');

const AppError = require('../utils/errorHandler');
const catchAsync = require('../utils/catchAsync');

const createOne = () => {};
exports.getOne = () => {};

//posibles sort criterias parameters: "asc", "desc", "ascending", "descending", 1, or -1
//TODO: Improve this
exports.getAll = catchAsync(async (req, res, next) => {
  let dbQuery;
  const { sortFiel, sortCriteria } = req.query;

  if (sortFiel && sortCriteria) {
    dbQuery = Affiliates.find().sort({ [sortFiel]: sortCriteria });
  } else {
    dbQuery = Affiliates.find();
  }

  const documents = await dbQuery;

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
