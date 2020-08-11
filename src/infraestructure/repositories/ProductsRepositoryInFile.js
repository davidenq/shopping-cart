"use strict";
const ProductRepository = require("../../domain/ProductsRepository");
const dataProducts = require("../../data/products.json");

class ProductRepositoryInFile extends ProductRepository {
  constructor() {
    super();
    this.data = {};
  }

  get() {
    return dataProducts;
  }

  getByCode(code) {
    const product = dataProducts.find(
      (product) => product.productCode === code
    );
    return product;
  }
}

module.exports = ProductRepositoryInFile;
