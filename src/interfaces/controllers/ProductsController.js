"use strict";
const {
  GetProducts,
  GetProductsByCode,
} = require("../../application/use_cases/Products");

exports.GetProducts = function (req, res) {
  const serviceLocator = req.serviceLocator;
  const products = GetProducts(serviceLocator);
  return res.json(products);
};

exports.GetProductsByCode = function (req, res) {
  const serviceLocator = req.serviceLocator;
  const code = req.params.code;
  const products = GetProductsByCode(code, serviceLocator);
  return res.json(products);
};
