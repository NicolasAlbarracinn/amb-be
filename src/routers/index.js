const router = require('express').Router();

const userRoutes = require('./user');
const externalRoutes = require('./external');
const affiliatesRoutes = require('./affiliates');

router.use('/users', userRoutes);
router.use('/externals', externalRoutes);
router.use('/affiliates', affiliatesRoutes);

module.exports = router;
