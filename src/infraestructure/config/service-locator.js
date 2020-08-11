"use strict";
const constants = require("./constants");
const environment = require("./environment");

exports = module.exports = function (req, res, next) {
  if (environment.database.dialect === constants.SUPPORTED_DATABASE.IN_FILE) {
    const ProductRepositoryInFile = require("../repositories/ProductsRepositoryInFile");
    const productRepositoryInFile = new ProductRepositoryInFile();
    req.serviceLocator = {
      productRepository: productRepositoryInFile,
    };
  } else {
    throw new Error("Add database support");
  }

  next();
};
