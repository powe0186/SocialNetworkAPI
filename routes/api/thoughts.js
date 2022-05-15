const router = require('express').Router()
const { getThoughts, createThought, getOneThought, updateThought, deleteThought } = require('../../controllers/thoughtController');

//get all thoughts or create a new thought
router.route('/').get(getThoughts).post(createThought)

router.route('/:id').get(getOneThought).put(updateThought).delete(deleteThought)
module.exports = router;