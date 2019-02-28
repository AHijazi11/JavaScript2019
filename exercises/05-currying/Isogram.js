/**
 * Determine if a word is an isogram.
 * An isogram (also known as a "nonpattern word") is a word or phrase without a repeating letter.
 * @param string
 */
const isIsogram = string => {
  let Isogram = true;
  let arr = string.toLowerCase().split("");
  let obj = arr.reduce((acc, letter) => {
    acc[letter] ? (acc[letter] = acc[letter] + 1) : (acc[letter] = 1);
    return acc;
  }, {});
  for (let item in obj) {
    if (obj[item] > 1) {
      Isogram = "false";
    }
  }
  return Isogram;
};
