const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');


module.exports = {
    getUsers(req, res) {
    User.find()
        .then(async (users) => {
            return res.json(users);
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        })
    },

}

