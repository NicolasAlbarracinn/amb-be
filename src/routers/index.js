const router = require('express').Router();

const userRoutes = require('./user');
const externalRoutes = require('./external');
const partnersRoutes = require('./partners');
const benefitsRoutes = require('./benefits');

router.use('/users', userRoutes);
router.use('/externals', externalRoutes);
router.use('/partners', partnersRoutes);
router.use('/benefits', benefitsRoutes);

module.exports = router;
