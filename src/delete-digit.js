const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
const getMax = (arr) => {
  let max = arr[0];
  for (let num of arr) {
    if (max < num) { max = num; }
  }
  return max;
}

const deleteDigit = (n) => {
  const digits = [];
  let arrOfN = Array.from(String(n));
  for (let i = 0; i < arrOfN.length; i++) {
    let digit = [];
    for (let k = 0; k < arrOfN.length; k++) {
      if (i !== k) { digit.push(arrOfN[k]); }
    }
    digits.push(+digit.join(''));
  }
  return getMax(digits);
}



module.exports = {
  deleteDigit
};
