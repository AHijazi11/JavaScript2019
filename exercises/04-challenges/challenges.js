/**
 * Check if a string (first argument, str) ends with the given target string (second argument, target).
 *  @param  {string}
 *  @return {string}
 *
 *  @example confirmEnding("Bastian", "n") true
 *  @example confirmEnding("Connor", "n")  false
 *
 */

var confirmEnding = (A,B) => {
  let stringarray = A.split('')
  let C = '';
  if(stringarray[stringarray.length-1]==B){C = true;}
  else{C = false;}
  return C;
};

/**
 *  Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
 *  @param  {string}
 *  @return {string}
 *
 *  @example repeatStringNumTimes("*", 3)
 *  @example repeatStringNumTimes("abc", 3) should return "abcabcabc"
 *  @example repeatStringNumTimes("abc", -2) should return ""
 */

var repeatStringNumTimes = (str,B) => {
  var string = "";
  if(B>0){
    for(let i=0; i<B; i++){string = string.concat(str);}
  }
  console.log(string);
  return string;
}

/**
 *  Find the Longest Word in a String
 *  @param {string}
 *  @return {string}
 *
 *  @example findLongestWordLength("Google do a barrel roll")  should return 6
 *  @example findLongestWordLength("May the force be with you") should return 5
 *
 */


var findLongestWordLength = (str) => {
  let strsplitbyspace = str.split(' ');
  let wordlength = [];
  for(item of strsplitbyspace){
  wordlength.push(item.length);} 
  return Math.max(...wordlength);
     }

module.exports = {
  findLongestWordLength,
  confirmEnding,
  repeatStringNumTimes
};
