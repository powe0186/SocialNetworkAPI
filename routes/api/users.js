const router = require('express').Router();
const { getUsers, createUser, getSingleUser, updateUser, deleteUser } = require('../../controllers/userController');


//get all users or create a new user.
router.route('/').get(getUsers).post(createUser);

//get a specific or update a specific user or delete a user
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);




module.exports = router;