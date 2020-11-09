const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const AppError = require('../utils/errorHandler');
const catchAsync = require('../utils/catchAsync');

exports.protect = catchAsync(async (req, res, next) => {
  const headerHasToken = req.headers.authorization && req.headers.authorization.startsWith('Bearer');
  const token = headerHasToken ? req.headers.authorization.split(' ')[1] : req.cookies ? req.cookies.jwt : undefined;

  if (!token) {
    return next(new AppError('Not Logged in, please login', 401));
  }

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  const user = await User.findOne({ _id: decoded._id });

  if (!user) {
    new AppError('The user does not exist', 401);
  }

  req.token = token;
  req.user = user;

  next();
});

//TODO: add validation middleware for user roles
