const jwt = require('jsonwebtoken');
const User = require('../models/user');
const AppError = require('../utils/errorHandler');
const catchAsync = require('../utils/catchAsync');

exports.protect = catchAsync(async (req, res, next) => {
  const headerHasToken = req.headers.authorization && req.headers.authorization.startsWith('Bearer');
  const token = headerHasToken && req.headers.authorization.split(' ')[1];

  if (!token) {
    return next(new AppError('Not Logged in, please login', 401));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findOne({ _id: decoded._id });

  if (!user) {
    next(new AppError('User does not exist', 404));
  }

  req.token = token;
  req.user = user;

  next();
});

//TODO: add validation middleware for user roles
