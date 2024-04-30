const express = require('express');
const { testPostController } = require('../controller/testController.js');

//router object
const router = express.Router();

//routes
router.post('/test-post', testPostController);

//export
module.exports = router;
