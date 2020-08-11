"use strict";
const constants = require("./constants");

exports = module.exports = {
  database: {
    dialect:
      process.env.DATABASE_DIALECT || constants.SUPPORTED_DATABASE.IN_FILE,
  },
  port: process.env.PORT || 3000,
};
