"use strict";

const ListMainUseCaseError = require("./list-main-use-case-error.js");
const LIST_MIAN_ERROR_PREFIX = `${ListMainUseCaseError.ERROR_PREFIX}listMian/`;

const DeleteList = {
  UC_CODE: `${LIST_MIAN_ERROR_PREFIX}deleteList/`,
  
};

module.exports = {
  DeleteList
};
