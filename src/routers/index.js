const router = require('express').Router();

const userRoutes = require('./user');
const externalRoutes = require('./external');

router.use('/users', userRoutes);
router.use('/externals', externalRoutes);

module.exports = router;
