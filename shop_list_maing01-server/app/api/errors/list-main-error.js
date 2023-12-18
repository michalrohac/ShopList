"use strict";
const ListMainUseCaseError = require("./list-main-use-case-error.js");

const Init = {
  UC_CODE: `${ListMainUseCaseError.ERROR_PREFIX}init/`,

  InvalidDtoIn: class extends ListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Init.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  SchemaDaoCreateSchemaFailed: class extends ListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.status = 500;
      this.code = `${Init.UC_CODE}schemaDaoCreateSchemaFailed`;
      this.message = "Create schema by Dao createSchema failed.";
    }
  },

  SetProfileFailed: class extends ListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Init.UC_CODE}sys/setProfileFailed`;
      this.message = "Set profile failed.";
    }
  },

  CreateAwscFailed: class extends ListMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Init.UC_CODE}createAwscFailed`;
      this.message = "Create uuAwsc failed.";
    }
  },
};

const CreateList = {
  UC_CODE: `${LIST_MAIN_ERROR_PREFIX}createList/`,
  
};

const ShowList = {
  UC_CODE: `${LIST_MAIN_ERROR_PREFIX}showList/`,
  
};

const DeleteList = {
  UC_CODE: `${LIST_MAIN_ERROR_PREFIX}deleteList/`,
  
};

const UpdateList = {
  UC_CODE: `${LIST_MAIN_ERROR_PREFIX}updateList/`,
  
};

const ShowShared = {
  UC_CODE: `${LIST_MAIN_ERROR_PREFIX}showShared/`,
  
};

const ViewShared = {
  UC_CODE: `${LIST_MAIN_ERROR_PREFIX}viewShared/`,
  
};

module.exports = {
  ViewShared,
  ShowShared,
  UpdateList,
  DeleteList,
  ShowList,
  CreateList,
  Init,
};
