//show/return shared lists for specific user
"use strict";
class ViewSharedList {
  viewShared(ucEnv) {
    const dtoOut = {
      text: "Shared list view!",
      uuAppErrorMap: {},
    };

    return dtoOut;
  }
}

module.exports = new ViewSharedList();
