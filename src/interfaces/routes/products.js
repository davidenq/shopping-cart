"use strict";
const {
  GetProducts,
  GetProductsByCode,
} = require("../controllers/ProductsController");

const internals = {};
exports = module.exports = internals;

internals.ProductRoutes = function (app) {
  app.get("/products", GetProducts);
  app.get("/products/:code", GetProductsByCode);
};
