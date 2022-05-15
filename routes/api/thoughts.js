const router = require('express').Router()
const { getThoughts, createThought } = require('../../controllers/thoughtController');

//get all thoughts or create a new thought
router.route('/').get(getThoughts).post(createThought)

module.exports = router;