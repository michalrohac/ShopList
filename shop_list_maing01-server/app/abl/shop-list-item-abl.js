"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/shop-list-item-error.js");

const WARNINGS = {

};

class ShopListItemAbl {

  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("shopListItem");
  }

  async shopListItem(awid, dtoIn) {
    
  }

}

module.exports = new ShopListItemAbl();
