const express = require('express');
const { protect } = require('../middleware/validateUser');
const { register, login, logout, updateProfile, profile } = require('../controllers/userControllers');

const router = new express.Router();

router.post('/', register);
router.post('/login', login);
router.get('/logout', logout);

//Potected routes
router.use(protect);

router.post('/profile', profile);
router.patch('/profile/edit', updateProfile);

module.exports = router;
