const path = require("path");

const express = require("express");

const shopController = require("../controllers/shop");

const error = require("../controllers/error");

const router = express.Router();

router.get("/", shopController.getIndex);

router.get("/products", shopController.getProducts);

router.get("/products/:productId", shopController.getProduct);

router.get("/cart", shopController.getCart);

router.post("/cart", shopController.postCart);

router.get("/orders", shopController.getOrders);

router.post("/cart-delete-item", shopController.postCartDeleteProduct);

router.get("/checkout", shopController.getCheckout);

router.post("/create-order", shopController.postOrder);

module.exports = router;
