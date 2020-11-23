const express = require('express');
const router = express.Router();
const userController = require('../controller/userController')
router.post("/p1", userController.addProduct);
router.post("/p2", userController.editProductDetails);
router.post("/p3", userController.deleteProduct);
router.get("/p4", userController.getAllProduct);

module.exports = router