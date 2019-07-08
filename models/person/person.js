'use strict';

const DataModel = require('../file.js');

class Person extends DataModel {
  constructor() {
    super();
    this.schema = {
      id: { required: true },
      name: { type:String, required: true },
      gender: { type:String, required: true }
    };
  }
}

module.exports = Person;