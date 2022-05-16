const { ObjectId } = require('mongoose').Types;
const req = require('express/lib/request');
const res = require('express/lib/response');
const { User, Thought } = require('../models');

module.exports = {

    addFriend(req, res) {
        User.findOne({ _id: req.params.friendId })
            .then((friend) =>
                !friend
                    ? res.status(404).json({ message: 'No user has that ID.' })
                    : User.findOneAndUpdate(
                        { _id: req.params.userId },
                        { $addToSet: { friends: friend } },
                        { runValidators: true, new: true }
                    ))
            .then((user) => res.json({ message: 'friend added!' }))
            .catch((err) => res.status(500).json(err));

    }

}