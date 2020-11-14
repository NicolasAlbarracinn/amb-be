const express = require('express');
const { protect } = require('../middleware/validateUser');
const { getOne } = require('../controllers/affiliateControllers');

const router = new express.Router();

router.use(protect);

router.get('/', getOne);

module.exports = router;
