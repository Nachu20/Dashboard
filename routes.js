const express = require('express');

const router = express.Router();
var controller=require('./controller.js');
router.route('/user/create').post(controller.createUserControllerFn);
module.exports = router;