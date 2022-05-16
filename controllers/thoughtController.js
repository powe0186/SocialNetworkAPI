const { ObjectId } = require('mongoose').Types;
const req = require('express/lib/request');
const res = require('express/lib/response');
const { User, Thought } = require('../models');


module.exports = {

    getThoughts(req, res) {
        Thought.find()
            .then(async (thoughts) => res.json(thoughts))
            .catch((err) => {
                console.error(err);
                res.status(500).json(err)
        })
    },

    //Need to figure out how to put the message _id into the array for the user who made it.

    createThought(req, res) {
            Thought.create({
                thoughtText: req.body.thoughtText,
                username: req.body.username
            })
            .then((thought) => User.findOneAndUpdate(
                { _id: thought.username },
                { $addToSet: { thoughts: thought._id } },
                { runValidators: true, new: true }
            ))
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
            
        },
        
    

    getOneThought(req, res) {
        Thought.findOne({ _id: req.params.id })
        .then((thought) => res.json(thought))
        .catch((err) => res.status(500).json(err))
    },

    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.id},
            { ...req.body }
        )
        .then((thought) => res.json(thought))
        .catch((err) => res.status(500).json(err))
    },

    deleteThought(req, res) {
        Thought.deleteMany({ _id: req.params.id })
        .then((thought) => res.json(thought))
        .catch((err) => res.status(500).json(err))
    },

}