const express = require("express");
const router = express.Router();
const bookingController = require('../Controller/booking.controller')

router.post('/post',bookingController.book)

module.exports = router;