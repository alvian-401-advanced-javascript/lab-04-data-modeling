// const Products = require('../products/products.js');

// describe('products Model', () => {

//   let products;

//   beforeEach(() => {
//     products = new Products();
//   })

//   // How might we repeat this to check on types?
//   it('sanitize() returns undefined with missing requirements', () => {
//     const schema = products.schema;
//     var testRecord = {};
//     for (var field in schema) {
//       if (schema[field].required) {
//         testRecord[field] = null;
//       }
//     }
//     expect(products.sanitize(testRecord)).toBeUndefined();
//   });

//   it('can post() a new category', () => {
//     let obj = { name: 'Test Category' };
//     return products.create(obj)
//       .then(record => {
//         Object.keys(obj).forEach(key => {
//           expect(record[key]).toEqual(obj[key]);
//         });
//       })
//       .catch(e => console.error('ERR', e));
//   });

//   it('can get() a category', () => {
//     let obj = { name: 'Test Category' };
//     return products.create(obj)
//       .then(record => {
//         return products.get(record._id)
//           .then(category => {
//             Object.keys(obj).forEach(key => {
//               expect(category[0][key]).toEqual(obj[key]);
//             });
//           });
//       });
//   });

//   it('can delete() a category', () => {
 
//     let obj = { name: 'Test Category' };
//     let createdObj = products.create(obj);
//     let deletedObj = products.delete(createdObj);
//     console.log(deletedObj);
//     expect(deletedObj).toEqual(deletedObj);
//   });

//   it('can update() a category', () => {
//     let obj = { price: 55 };
//     return products.create(obj)
//       .then(record => {
//     let updated = {...record, name: 'Update Test'};
//     let updatedId = updated.id;
//     products.update(updated.id, updated);

//     expect(updatedId).toEqual(record.id);
//     expect(updated.name).toEqual('Update Test');
//       });
//   });

// });