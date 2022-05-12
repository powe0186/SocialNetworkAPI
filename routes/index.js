const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

//Mini project uses this:
// router.use((req, res) => res.send('Wrong route!'));

module.exports = router;