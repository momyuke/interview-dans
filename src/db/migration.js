const User = require('../models/User');
const connection = require('./connection');
const {v4} = require('uuid');

(async () => {
    await connection.authenticate();
    await User.sync();
    await User.create({id: v4(), name:'test', username: 'test', password: 'test'});
    await connection.close();
})();