"use strict";
const products = require("../data/products.json");
const ShoppingCart = require("./ShoppingCart.js");

exports.CheckoutRoutes = function (req, res) {
  const items = req.body.map((x) =>
    products.find((product) => product.productCode === x)
  );
  const shoppingCart = new ShoppingCart(items);
  return res.json(shoppingCart.checkout());
};
