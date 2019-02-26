/**
 * Check to see if two provided strings are anagrams.
 *
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Ignore special characters and spaces; do not
 * count them.
 *
 * @example
 *   anagrams('rail safety', 'fairy tales') // true
 *   anagrams('RAIL! SAFETY', 'fairy tales') // true
 *   anagrams('Hi there', 'Bye there') // false
 *
 * @param {string} string1 first string to compare
 * @param {string} string2 second string to compare
 * @returns {boolean} whether or not the strings are anagrams
 */
//First solution
function anagrams(str1,str2) {
  let arr1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('');
  let arr2 = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('');
  let obj1 = {};
  let obj2 = {};
  for(var i=0; i<arr1.length; i++){Object.assign(obj1,{[arr1[i]]:0});}
  for(z of arr1){
    obj1[z] = obj1[z] +1;}
  for(var i=0; i<arr2.length; i++){Object.assign(obj2,{[arr2[i]]:0});}
  for(z of arr2){
    obj2[z] = obj2[z] +1;}
for(item in obj1){if(obj1[item] == obj2[item]){var final = true;}
else{var final = false; break;}}
return final;
}

//Second solution without using objects:

function anagrams(str1,str2) {
    let arr1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('').sort().join();
    let arr2 = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('').sort().join();
    return arr1 === arr2 ? 'True' : 'False';
  }