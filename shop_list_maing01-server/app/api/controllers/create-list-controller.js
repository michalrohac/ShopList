//show/return lists for specific user
"use strict";
class CreateList {
  creatingList(ucEnv) {
    const dtoOut = {
      text: "New list creation!",
      uuAppErrorMap: {},
    };

    return dtoOut;
  }
}

module.exports = new CreateList();
