const express = require('express');
const { renaper } = require('../controllers/renaperControllers');
const { protect } = require('../middleware/validateUser');

const router = new express.Router();

router.use(protect);
router.get('/renaper', renaper);

module.exports = router;
