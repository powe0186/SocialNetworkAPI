const router = require('express').Router();
const { getUsers, createUser, getSingleUser, updateUser, deleteUser } = require('../../controllers/userController');
const { addFriend, removeFriend } = require('../../controllers/friends')


//get all users or create a new user.
router.route('/').get(getUsers).post(createUser);

//get a specific or update a specific user or delete a user
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

router.route('/:userId/friend/:friendId').put(addFriend).delete(removeFriend);

module.exports = router;