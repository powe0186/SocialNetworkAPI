const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { userSeeds } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('Connected');
    console.table(userSeeds);

    //delete existing data.
    await User.deleteMany({});
    await Thought.deleteMany({});

    //Seed users with the data in the data.js file.
    await User.collection.insertMany(userSeeds);
    console.info('Seeding complete! 🌱');
    process.exit(0);
});