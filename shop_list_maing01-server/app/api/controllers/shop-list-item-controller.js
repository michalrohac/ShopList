"use strict";
const ShopListItemAbl = require("../../abl/shop-list-item-abl.js");

class ShopListItemController {
  shopListItem(ucEnv) {
    return ShopListItemAbl.shopListItem(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }
  add(ucEnv) {
    return "neco vratime...";
  }
}

module.exports = new ShopListItemController();
