const express = require("express");
const router = express.Router();
const adminController = require('../Controller/admin.controller')
const authenticateAdmin = require('../Middleware/auth')

router.get('/',authenticateAdmin,adminController.getPackage)
router.post('/post',authenticateAdmin,adminController.postPackage)
router.put('/post/:id',authenticateAdmin,adminController.postPackageId)
router.delete('/post/:id',authenticateAdmin,adminController.deletePackage)

module.exports = router;