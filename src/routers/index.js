const router = require('express').Router();

const userRoutes = require('./user');
const externalRoutes = require('./external');
const partnersRoutes = require('./partners');

router.use('/users', userRoutes);
router.use('/externals', externalRoutes);
router.use('/partners', partnersRoutes);

module.exports = router;
