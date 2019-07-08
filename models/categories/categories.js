'use strict';

const DataModel = require('../memory.js');

class Categories extends DataModel {
  constructor() {
    super();
    this.schema = {
      id: { required: true },
      name: { type:String, required: true },
    };
  }
}

module.exports = Categories;