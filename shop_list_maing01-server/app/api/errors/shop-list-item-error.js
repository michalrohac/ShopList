"use strict";

const ListMainUseCaseError = require("./list-main-use-case-error.js");
const SHOP_LIST_ITEM_ERROR_PREFIX = `${ListMainUseCaseError.ERROR_PREFIX}shopListItem/`;

const ShopListItem = {
  UC_CODE: `${SHOP_LIST_ITEM_ERROR_PREFIX}shopListItem/`,
  
};

module.exports = {
  ShopListItem
};
