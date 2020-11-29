const express = require('express');
const { protect } = require('../middleware/validateUser');
const { getAll, savePartner, updatePartner, updatePartnerStatus } = require('../controllers/partnersControllers');

const router = new express.Router();

router.use(protect);

router.get('/', getAll);
router.post('/', savePartner);
router.patch('/', updatePartner);
router.patch('/updateStatus', updatePartnerStatus);

module.exports = router;
