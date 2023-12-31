"use strict";
const ShopListItemAbl = require("../../abl/shop-list-item-abl.js");

class ShopListItemController {

  delete(ucEnv) {
    return ShopListItemAbl.delete(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  update(ucEnv) {
    return ShopListItemAbl.update(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }
  shopListItem(ucEnv) {
    return ShopListItemAbl.shopListItem(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }
  add(ucEnv) {
    return "neco vratime...";
  }
}

module.exports = new ShopListItemController();
