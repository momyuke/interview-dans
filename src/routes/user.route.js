const express = require('express');
const route = express.Router();
const UserController = new (require('../controller/UserController'))();

route.post('/login', (req,res) => UserController.loginController(req,res));

module.exports = route;