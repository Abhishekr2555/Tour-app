const express = require("express");
const router = express.Router();
const customerController = require('../Controller/custmore.controller')

router.post('/add',customerController.customerDetail)

module.exports = router;