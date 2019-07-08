'use strict';

const uuid = require('uuid/v4');
const database = require('../models/data/people.json');
const fs = require('fs');
// const schema = require('./categories/categories.js');

const testFile = '../models/data/people.json';
const testEntry = {
    "id": 2,
    "name": "Monique",
    "gender": "female"
  }

class Model {

    constructor() {
        this.database = database;
    }

    get(file, id) {
        fs.readFile(file, (err,data) => {
            if (err) { console.error(); }
            const json = JSON.parse(data);
            return json.filter((record) => record.id === id)
        })
}


    create(file, entry) {
        fs.readFile(file, (err,data) => {
            if (err) { console.error(); }
                const jsonEntry = JSON.parse(data);
                entry.id = jsonEntry.length + 1;
                jsonEntry.push(entry);

                fs.writeFile(file, JSON.stringify(jsonEntry), (err, data) => {
                    if (err) { console.error }
                    // console.log(jsonEntry);
                })
        })
     
    }

    // update(id, entry) {
    //     let record = this.sanitize(entry);
    //     if (record.id) { this.database = this.database.map((item) => (item.id === id) ? record : item); }
    //     return Promise.resolve(record);
    // }

    delete(file, id) {
        fs.readFile(file, (err,data) => {
            if (err) { console.error(); }
            const json = JSON.parse(data);

                let newData = json.filter((record) => record.id !== id)

                fs.writeFile(file, JSON.stringify(newData), (err, data) => {
                    if (err) { console.error }
                    console.log(newData);
                })
        })
    }

    sanitize(entry) {

        let valid = true;
        let record = {};

        Object.keys(this.schema).forEach(field => {
            if (this.schema[field].required) {
                if (entry[field]) {
                    record[field] = entry[field];
                } else {
                    valid = false;
                }
            }
            else {
                record[field] = entry[field];
            }
        });

        return valid ? record : undefined;
    }

}

module.exports = Model;