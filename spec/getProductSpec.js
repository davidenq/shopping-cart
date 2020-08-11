"use strict";
const { Server } = require("../src/infraestructure/webserver/server");
const request = require("request");
new Server();

const endpoint = "http://localhost:3000/products";

describe("Products", function () {
  it("should return 200 response code", function (done) {
    request.get(endpoint, function (error, response) {
      expect(response.statusCode).toEqual(200);
      done();
    });
  });

  it("should return all products", function (done) {
    const products = require("../src/data/products.json");
    const countProducts = products.length;

    request.get(endpoint, function (error, response) {
      const result = JSON.parse(response.body);
      expect(result.length).toEqual(countProducts);
      done();
    });
  });
  it("should return product by code", function (done) {
    const products = require("../src/data/products.json");
    const randomProductCode =
      products[Math.floor(Math.random() * 9) - 1].productCode;
    request.get(endpoint + "/" + randomProductCode, function (error, response) {
      const result = JSON.parse(response.body);
      //console.log(result.productCode);
      expect(result.productCode).toEqual(randomProductCode);
      done();
    });
  });
});
