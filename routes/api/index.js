const router = require('express').Router();
const usersRoutes = require('./users');
const thoughtsRoutes = require('./thoughts');
// I don't know what this is and don't remember doing it:
// const { append } = require('express/lib/response');

router.use('/users', usersRoutes);
router.use('/thoughtsRoutes', thoughtsRoutes);


module.exports = router;