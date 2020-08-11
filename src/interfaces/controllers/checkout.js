"use strict";
const products = require("../data/products.json");

exports.GetProductsByCode = function (req, res) {
  const result = products.find((x) => x.code === req.params.code);
  res.json(result);
};

exports.GetProducts = function (req, res) {
  const result = products.map((x) => x.productCode);
  res.json(result);
};
