"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class ShopListItemMongo extends UuObjectDao {

  async createSchema(){
  }

}

module.exports = ShopListItemMongo;
