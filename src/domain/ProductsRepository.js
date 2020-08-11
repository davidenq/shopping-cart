"use strict";
module.exports = class {
  get() {
    throw new Error("ER_METHOD_NOT_IMPLEMENTED");
  }
  getByCode() {
    throw new Error("ER_METHOD_NOT_IMPLEMENTED");
  }
};
