const express = require('express');
const { protect } = require('../middleware/validateUser');
const {
  getAll,
  savePartner,
  updatePartner,
  updatePartnerStatus,
  getOne,
} = require('../controllers/partnersControllers');

const router = new express.Router();

// router.get('/:partnerId', getOne);

router.get('/', getAll);
router.post('/', savePartner);
router.patch('/', updatePartner);
router.patch('/updateStatus', updatePartnerStatus);

router.route('/:partnerId').get(getOne);

module.exports = router;
