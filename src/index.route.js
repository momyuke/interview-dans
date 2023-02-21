const express = require('express');
const route = express.Router();
const UserRoute = require('./routes/user.route');
const JobRoute = require('./routes/job.route');

route.use('/user', UserRoute);
route.use('/job', JobRoute);

module.exports = route;