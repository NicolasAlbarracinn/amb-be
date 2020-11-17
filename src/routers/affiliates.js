const express = require('express');
const { protect } = require('../middleware/validateUser');
const { getAll } = require('../controllers/affiliateControllers');

const router = new express.Router();

//router.use(protect);

router.get('/', getAll);

module.exports = router;
