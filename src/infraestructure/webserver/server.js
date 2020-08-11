"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const { ProductRoutes } = require("../../interfaces/routes/products");
//const { CheckoutRoutes } = require("../../interfaces/routes/checkout");
const enviroments = require("../config/environment");
const ServiceLocator = require("../config/service-locator");

const internals = {};
exports = module.exports = internals;

internals.Server = function () {
  const app = express();
  app.use(ServiceLocator);
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );

  ProductRoutes(app);
  //CheckoutRoutes(app);

  // /health endpoint is used to test the status applications. Some cloud services use it in order to test
  // the status of the application
  app.get("/health", async (req, res) => await res.send("ok"));
  const server = app.listen(enviroments.port, () => {
    console.log(`Server is listening on ${enviroments.port}`);
  });
  server.on("close", function () {
    console.log("close");
  });
  return server;
};
