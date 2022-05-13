const { Schema, model } = require('mongoose');

//Schema for creating a thought:

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        reactions: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Reaction'
            },
        ],
    },
    {
        toJSON: {
            getters: true,
        },
    }
);


//Virtual that gets the number of reactions.
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;