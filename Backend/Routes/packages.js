const express = require("express");
const router = express.Router();
const packageController = require('../Controller/package.controller')

router.get('/',packageController.getPackage)
router.get('/:id',packageController.getPackagebyId)

module.exports = router;