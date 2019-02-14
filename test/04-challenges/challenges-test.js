const { expect } = require("chai");

const {
  findLongestWordLength,
  confirmEnding,
  repeatStringNumTimes
} = require("../../exercises/04-challenges/challenges");

describe("Challenges", () => {
  it("it should return length of the longest Word", () => {
    const longestWordLength = findLongestWordLength(
      "May the force be with you"
    );
    expect(longestWordLength).to.equal(5);
  });
  it("it should return a boolean if the second argument given to the function is the last letter of the string", () => {
    const lastLetter = confirmEnding("Bastian", "n");
    expect(lastLetter).to.equal(true);
  });
  it("should repeat the given string for the amount of times based off of the second argument", () => {
    const string = repeatStringNumTimes("abc", 3);
<<<<<<< HEAD
    expect(string).to.equal("abcabcabc");
=======
    expect(string).to.equal("abcabcabc");
>>>>>>> ea5603f9dbc9c9c8a39369ae81e42694f9e00e04
    const empty = repeatStringNumTimes("abc", -2);
    expect(empty).to.equal("");
  });
});
