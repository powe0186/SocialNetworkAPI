const router = require('express').Router();
const { getThoughts, createThought, getOneThought, updateThought, deleteThought } = require('../../controllers/thoughtController');
const { createReaction } = require('../../controllers/reactionsController');




//get all thoughts or create a new thought
router.route('/').get(getThoughts).post(createThought);

router.route('/:id').get(getOneThought).put(updateThought).delete(deleteThought);

router.route('/:id/reactions').post(createReaction);


module.exports = router;
