var express = require('express');
var router = express.Router();
var hello_controller = require('../controllers/helloCont');
var hello_controller = require('../controllers/hello2Cont');

router.get('/', hello_controller.hello);

router.get('/hellohellodois', hello_controller.hello2);

module.exports = router;