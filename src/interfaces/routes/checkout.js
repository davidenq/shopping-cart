"use strict";
const { CheckoutProduct } = require("../controllers/CheckoutController");

const internals = {};
exports = module.exports = internals;

internals.ProductRoutes = function (app) {
  app.post("/checkout", CheckoutProduct);
};
