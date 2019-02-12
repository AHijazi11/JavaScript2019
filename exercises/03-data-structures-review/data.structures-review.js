/**
 *  Upper case the first letter in each array element
 * @param  { array }
 * @return {array}
 * @example
 * upperCaseEachElementInArray(['javascript','html','css']) // ['Javascript','Html','Css']
 * upperCaseEachElementInArray(['brad','tom']) // ['Brad','Tom']
 * 
 *
 */

function upperCaseEachElementInArray(array) {
  for(var i=0; i<array.length; i++){
  var arraysplit = array[i].split('');
  arraysplit[0]=arraysplit[0].toUpperCase();
  var A = arraysplit.join('');
  array[i] = A;
  }
  return array;
  }
  /*** Dont forget to return an array with all elements being upper-cased */


/**
 *  Use the Spread Operator to add an additional name (middle name) to an object
 *
 * @param  {Object} names an object representing a person, where each key is a type of name
 * e.g. {firstName:'Tom',lastName:'Jerry'}
 * @param {string} middleName
 * @return {Object} a clone of the names object with a middle name added to it
 * @example
 * addMiddleNameToObject({firstName:'Tom',lastName:'Jerry'},'Harris')
 * // {firstName:'Tom',middleName:'Harris', lastName:'Jerry'}
 */

function addMiddleNameToObject(names, middleName) {
  var FullName = {...names,middleName: middleName};
  return FullName;
}

/**
 * Use split method to return an array on white space
 * @param  { string }
 * @return { array }
 * @example
 * stringToArrayConverter("I went home.");
 * // ["I", "went", "home."]
 */

function stringToArrayConverter(str) {
  var array = str.split(' ');
  return array;
}

/**
 *
 * @param  { string }
 * @return { array }
 * @example
 */

/**
 * Tally the number of occurrences of each programming language in an array of languages.
 * @param {array} languages
 * @return {Object} an object where each key represents a language and its value is
 * the number of occurrences.
 * @example
 * dynamicObject(["Javascript","Javascript","HTML","HTML", "CSS","CSS","PHP"])
 * { "Javascript":2, "HTML":2, "CSS":2, "PHP":1 }
 */

function dynamicObject(array) {
  var set = new Set(array); //lines 73 -> 76 added so object keys are automatically defined
  var array1=[...set];
  var obj = {};
  for(var i=0; i<array1.length; i++){Object.assign(obj,{[array1[i]]:0});}
  for(z of array){
    obj[z] = obj[z] +1;}
    return obj;
}

module.exports = {
  upperCaseEachElementInArray,
  addMiddleNameToObject,
  stringToArrayConverter,
  dynamicObject
};
