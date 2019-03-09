const { departmentStores } = require('./recursion-departmentStores-data');
const { tree } = require('./recursion-tree-data');

/**
 * Using recursion, find the object in the node tree that has a given id.
 * You will be looping through the data in *recursion-find-id-data.json*.
 *
 * @param {number} id
 * @returns {Object} the object that the id is in
 *
 * @example
 * findId(567897);
 * // This should return:
 * {
 *    id: 567897,
 *    name: 'Consultants, Reviewers, and National Geographic Exploration',
 *    activityId: 'ZNRAE749BSD0CTGHY888SSSZ',
 *    nodeType: 'activity',
 *    suppressed: false,
 *    hidden: false
 * }
 */
let array = [];
const findId = (data, id) => {
  if (
    Object.prototype.toString.call(data) == "[object Object]" &&
    Object.keys(data).length > 1
  ) {
    return array.push(data);
  } else {
    for (let item of Object.values(data)) {
      findId(item, id);
    }
    for (let obj of array) {
      if (obj.id === id) {
        return obj;
      }
    }
  }
};

// *Another solution below*

// let final;
// function findId(data, id) {
//   for (let i = 0; i < data.length; i++) {
//     if (data[i].id === id) {
//       final = data[i];
//     } else if (
//       data[i].children &&
//       data[i].children.length &&
//       typeof data[i].children === "object"
//     ) {
//       findId(data[i].children, id);
//     }
//   }
//   return final;
// }

/**
 * Using recursion, remove the object from the node tree that has a given id.
 * You will be looping through the data in *recursion-delete-store.json*
 *
 * @param {number} id
 * @returns {Object} the entire data source, except it won't have the
 * object with the matching id
 *
 * @example
 * //deleteStore(567897);
 * // This should return:
 * {
 *   id: 1234567,
 *   store: 'Walmart',
 *   // ...
 * },
 * {
 *   branches: [
 *     // This branch is removed because it has id 567897
 *     {
 *       id: 567890,
 *       store: 'Walmart',
 *       // ...
 *     }
 *   ]
 * }
 */

function deleteStore(stores, id) {
  return stores.reduce((acc, store, idx) => {
    if (store.id === id) {
      stores.splice(idx, 1);
    } else if (
      store.branches &&
      store.branches.length &&
      typeof store.branches === "object"
    ) {
      deleteStore(store.branches, id);
    }
    return stores;
  }, []);
}

module.exports = {
  findId,
  deleteStore
};
