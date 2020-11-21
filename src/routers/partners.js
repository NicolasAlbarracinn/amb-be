const express = require('express');
const { protect } = require('../middleware/validateUser');
const { getAll, savePartner } = require('../controllers/partnersControllers');

const router = new express.Router();

router.use(protect);

router.get('/', getAll);
router.post('/', savePartner);

module.exports = router;
