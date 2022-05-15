const { ObjectId } = require('mongoose').Types;
const req = require('express/lib/request');
const res = require('express/lib/response');
const { User, Thought } = require('../models');


module.exports = {

    getThoughts(req, res) {
        Thought.find()
            .then(async (thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err))
    },

    createThought(req, res) {
        Thought.create(req.body)
        .then((thought) => res.json(thought))
        .catch((err) => res.status(500).json(err))
    },

    

}