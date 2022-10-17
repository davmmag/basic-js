const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
const encodeLine = (str) => {
  const resStr = [];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) { count++; }
    else {
      if (count === 0) { resStr.push(str[i]); }
      else {
        count++;
        resStr.push(count, str[i]);
        count = 0;
      }
    }
  }
  return resStr.join('');
}

module.exports = {
  encodeLine
};
