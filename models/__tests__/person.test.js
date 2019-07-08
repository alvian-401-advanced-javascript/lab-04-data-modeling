// const Person = require('../person/person.js');

// describe('Person Model', () => {

//   let person;
//   const testFile = '../models/data/people.json';
//   const testEntry = {
//     "id": 2,
//     "name": "Monique",
//     "gender": "female"
//   }

//   beforeEach(() => {
//     person = new Person();
//   })

//   // How might we repeat this to check on types?
//   it('sanitize() returns undefined with missing requirements', () => {
//     const schema = person.schema;
//     var testRecord = {};
//     for (var field in schema) {
//       if (schema[field].required) {
//         testRecord[field] = null;
//       }
//     }
//     expect(person.sanitize(testRecord)).toBeUndefined();
//   });

//   it('can post() a new category', () => {
//     return person.create(testFile, testEntry)
//       .then(record => {
//         // console.log(record)
//         Object.keys(testEntry).forEach(key => {
//           expect(record[key]).toEqual(testEntry[key]);
//         });
//       })
//       .catch(e => console.error('ERR', e));
//   });

//   it('can get() a category', () => {
//     let obj = { name: 'Test Category' };
//     return person.create(testFile, obj)
//       .then(record => {
//         return person.get(record._id)
//           .then(category => {
//             Object.keys(obj).forEach(key => {
//               expect(category[0][key]).toEqual(obj[key]);
//             });
//           });
//       });
//   });

//   it('can delete() a category', () => {
 
//     let obj = { name: 'Test Category' };
//     return person.create(obj)
//     .then(record => {
//       let deletedObj = person.delete(record);
//       console.log(deletedObj);
//       expect(deletedObj).toEqual(deletedObj);

//     })
  
//   });

//   it('can update() a category', () => {
//     let obj = { name: 'Test Category' };
//     return person.create(obj)
//       .then(record => {
//     let updated = {...record, name: 'Update Test'};
//     let updatedId = updated.id;
//     person.update(updated.id, updated);

//     expect(updatedId).toEqual(record.id);
//     expect(updated.name).toEqual('Update Test');
//       });
//   });

});