const { connect, connection } = require('mongoose');

const connectionString = 'mongodb://0.0.0.0:27017/socialNetworkDB'

connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;