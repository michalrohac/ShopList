"use strict";
const ListMainAbl = require("../../abl/list-main-abl.js");

class ListMainController {

  viewShared(ucEnv) {
    return ListMainAbl.viewShared(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  showShared(ucEnv) {
    return ListMainAbl.showShared(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  updateList(ucEnv) {
    return ListMainAbl.updateList(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  deleteList(ucEnv) {
    return ListMainAbl.deleteList(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  showList(ucEnv) {
    return ListMainAbl.showList(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  createList(ucEnv) {
    return ListMainAbl.createList(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }
  init(ucEnv) {
    return ListMainAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }

  load(ucEnv) {
    return ListMainAbl.load(ucEnv.getUri(), ucEnv.getSession());
  }

  loadBasicData(ucEnv) {
    return ListMainAbl.loadBasicData(ucEnv.getUri(), ucEnv.getSession());
  }

  create(ucEnv) {
    return ListMainAbl.loadBasicData(ucEnv.getUri(), ucEnv.getSession());
  }
  read() {}
  update() {}
  delete() {}
}

module.exports = new ListMainController();
