const express = require('express');
const User = require('../models/user');
const AppError = require('../utils/errorHandler');
const { protect } = require('../middleware/validateUser');
const { sendWelcomeEmail, sendCancelationEmail } = require('../emails/account');
const catchAsync = require('../utils/catchAsync');

const router = new express.Router();

//TODO: i think all the logic should goes in a separate module, this folder should only handle the routing
const register = catchAsync(async () => {
  const user = new User(req.body);
  await user.save();
  // sendWelcomeEmail(user.email, user.name);
  const token = await user.generateAuthToken();

  const cookieOptions = {
    expires: new Date(Date.now() + process.env.COOKIE_EXPIRATION_TIME),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  };

  res.cookie('jwt', token, cookieOptions);

  res.status(201).json({
    status: 'success',
    token,
    user: {
      role: user.role,
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });
});

const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError('Please provide credentials'), 400);
  }

  const user = await User.findByCredentials(req.body.email, req.body.password);
  const token = await user.generateAuthToken();

  const cookieOptions = {
    expires: new Date(Date.now() + process.env.COOKIE_EXPIRATION_TIME),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  };

  res.cookie('jwt', token, cookieOptions);

  const { firstName, lastName, completed, image, role } = user;
  res.status(201).json({
    status: 'success',
    token,
    user: {
      email,
      firstName,
      lastName,
      completed,
      image,
      role,
    },
  });
});

const profile = catchAsync(async (req, res, next) => {
  const { email, image, firstName, lastName, completed, role } = req.user;
  res.status(200).json({
    status: 'success',
    user: {
      email,
      firstName,
      lastName,
      completed,
      image,
      role,
    },
  });
});

const updateProfile = catchAsync(async (req, res, next) => {
  const updatedProfile = { ...req.body, _id: req.user._id, completed: true };
  const { email, firstName, lastName, completed, image, role } = await User.findOneAndUpdate(
    { _id: updatedProfile._id },
    updatedProfile,
    { new: true },
  ).exec();
  res.status(200).json({
    status: 'success',
    user: {
      email,
      firstName,
      lastName,
      completed,
      image,
      role,
    },
  });
});

const logout = (req, res) => {
  res.clearCookie('jwt');
  res.status(200).json({ status: 'success' });
};

router.post('/users', register);
router.post('/users/login', login);
router.get('/users/logout', logout);
router.post('/users/profile', protect, profile);
router.patch('/users/profile/edit', protect, updateProfile);

module.exports = router;
