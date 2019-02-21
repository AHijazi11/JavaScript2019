/**
 * Build the forEach function yourself
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 * @param {array} arr
 * @param {function} callback
 */
const forEach = (arr, callback) => {
  for(let i=0; i<arr.length; i++){
    callback(arr[i],i,arr);
  }
};

/**
 * Given an array of strings, remove all letters of each value except the first and last character in the strings
 * @param {array} arr
 * @returns {array} new array, where each values is the first and character of each string
 * @example
 *   showFirstAndLast(['colt','matt', 'tim', 'udemy']); // ["ct", "mt", "tm", "uy"]
 *   showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']
 */
const showFirstAndLast = arr => {
  let ans = [];
  function CutString(str){
  let str1 = str.split('');
  let str2 = [str1[0],str1[str1.length-1]];
  let str3 = str2[0].concat(str2[str2.length-1]);
  ans.push(str3)
  }
  arr.forEach(CutString);
  return ans;
};

module.exports = {
  forEach,
  showFirstAndLast
};
