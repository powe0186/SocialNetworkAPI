const { Schema, model } = require('mongoose');

//Schema for the user model:
const userSchema = new Schema(
    {
        UserId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            //validate to make sure it is an email address.
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        /*reference to the thought model*/
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    }
);

//Virtual property that counts the number of friends one has.
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

//Initialize user model:
const User = model('user', userSchema);

module.exports = User;