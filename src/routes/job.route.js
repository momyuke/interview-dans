const express = require('express');
const route = express.Router();
const JobController = new (require('../controller/job.controller'))();
const authentication = require('../middleware/authentication');



route.use(authentication);
route.get('/list', (req,res) => JobController.listJob(req,res));
route.get('/details/:id', (req,res) => JobController.jobsDetail(req,res));

module.exports = route;