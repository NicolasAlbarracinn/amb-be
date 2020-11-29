const express = require('express');
const { protect } = require('../middleware/validateUser');
const { getAll, savePartner, updatePartner, getOne } = require('../controllers/partnersControllers');

const router = new express.Router();

// router.get('/:partnerId', getOne);

// router.use(protect);

router.route('/').get(getAll).post(savePartner).patch(updatePartner);

router.route('/:partnerId').get(getOne);

module.exports = router;
