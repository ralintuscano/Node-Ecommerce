const path = require("path");

const express = require("express");

const adminController = require("../controllers/admin");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", adminController.getAddProduct);

// /admin/add-product => POST
router.post("/add-product", adminController.getAddProduct);

router.get("/products");

router.get("/edit-product");

router.post("/edit-product");

module.exports = router;
