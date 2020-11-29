const Partners = require('../models/partners');

const AppError = require('../utils/errorHandler');
const catchAsync = require('../utils/catchAsync');
const { getValueForNextSequence } = require('../utils/sequenceValues');

const createOne = () => {};
exports.getOne = catchAsync(async (req, res, next) => {
  const data = await Partners.findOne({ partnerId: req.params.partnerId });

  if (!data) {
    return next(new AppError('El socio no existe', 404));
  }

  res.status(200).json({
    status: 'success',
    data,
  });
});

//posibles sort criterias parameters: "asc", "desc", "ascending", "descending", 1, or -1
//TODO: Improve this
exports.getAll = catchAsync(async (req, res, next) => {
  const { sortField, sortCriteria, limit, offset } = req.query;

  const query = [];

  if (sortField && sortCriteria) {
    query.push({ $sort: { [sortField]: sortCriteria === 'asc' ? 1 : -1 } });
  }

  query.push({
    $facet: {
      metadata: [{ $count: 'count' }],
      data: [{ $skip: parseInt(offset) }, { $limit: parseInt(limit) }], // add projection here wish you re-shape the docs
    },
  });

  const [
    {
      data,
      metadata: [{ count }],
    },
  ] = await Partners.aggregate(query);

  if (!data) {
    return next(new AppError('No partners list'), 400);
  }

  res.status(200).json({
    status: 'success',
    count,
    data,
  });
});

exports.savePartner = catchAsync(async (req, res, next) => {
  const newPartnerId = await getValueForNextSequence(Partners, 'partnerId');
  const partner = new Partners({
    ...req.body,
    partnerId: newPartnerId,
    createdBy: req.user._id,
  });
  await partner.save();

  res.status(200).json({
    status: 'success',
    data: { partnerId: newPartnerId },
  });
});

exports.updatePartner = catchAsync(async (req, res, next) => {
  const updatedPartner = await Partners.findOneAndUpdate(
    { partnerId: req.body.partnerId },
    {
      ...req.body.data,
      modifiedBy: req.user._id,
    },
    { new: true },
  ).exec();

  res.status(200).json({
    status: 'success',
    data: {},
  });
});

exports.updatePartnerStatus = catchAsync(async (req, res, next) => {
  const updatedPartner = await Partners.findOneAndUpdate(
    { partnerId: req.body.partnerId },
    {
      status: req.body.status,
      modifiedBy: req.user._id,
    },
    { new: true },
  ).exec();

  res.status(200).json({
    status: 'success',
    data: updatedPartner,
  });
});

const updateOne = () => {};
const deleteOne = () => {};
