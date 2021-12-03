const express = require('express');
const router =express.Router();

const userController = require('../Controller/user.controller');

router.get('/userData',userController.getUserList);

router.post('/Register', userController.postRegister);


module.exports =router
