const express = require('express');
const User = require('../models/user');
const auth = require('../middleware/auth');
const { sendWelcomeEmail, sendCancelationEmail } = require('../emails/account');
const router = new express.Router();

router.post('/users', async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    // sendWelcomeEmail(user.email, user.name);
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post('/users/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password);
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    console.log(e);
    res.status(400).send();
  }
});

router.post('/users/profile', auth, async (req, res) => {
  try {
    res.status(201).send(req.user);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.patch('/users/profile/edit', auth, async (req, res) => {

  const updatedProfile = {...req.body, _id: req.user._id, completed: true};
  console.log(updatedProfile);
  try {
    const user = await User.findOneAndUpdate({ _id: updatedProfile._id }, updatedProfile, { new: true }).exec();
    res.send({ user });
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

module.exports = router;
