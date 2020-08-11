"use strict";
const internals = {};

exports = module.exports = internals;

internals.GetProducts = function ({ productRepository }) {
  return productRepository.get();
};

internals.GetProductsByCode = function (code, { productRepository }) {
  return productRepository.getByCode(code);
};
