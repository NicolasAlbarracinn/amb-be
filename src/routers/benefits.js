const express = require('express');
const { protect } = require('../middleware/validateUser');
const { createOne, getParnetInfo } = require('../controllers/benefitsController');

const router = new express.Router();

// router.use(protect);
router.get('/:partnerId', getParnetInfo);
router.post('/', createOne);

module.exports = router;
