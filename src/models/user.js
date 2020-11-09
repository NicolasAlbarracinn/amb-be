const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const AppError = require('../utils/errorHandler');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Email is invalid');
        }
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 7,
      trim: true,
      validate(value) {
        if (value.toLowerCase().includes('password')) {
          throw new Error('Password cannot contain "password"');
        }
      },
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    image: {
      base64: String,
      imageFormat: String,
    },
    completed: {
      type: Boolean,
      required: true,
      default: false,
    },
    role: {
      type: String,
      enum: ['financista', 'vendedores', 'asociado', 'potencialAsociado', 'empleado'],
      default: 'potencialAsociado',
    },
  },
  {
    timestamps: true,
  },
);

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET);
  return token;
};

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new AppError('Incorrect email or password', 401);
  }
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new AppError('Incorrect email or password', 401);
  }

  return user;
};

// Hash the plain text password before saving
userSchema.pre('save', async function (next) {
  const user = this;

  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
