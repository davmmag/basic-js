const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
const getControlSequence = (arr) => {
  const controlSequences = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  let res = {};
  let count = 0;
  for (let item of controlSequences) {
    if (arr.includes(item)) {
      res.index = arr.indexOf(item);
      res.name = item;
      count++;
    }
  }
  return res;
}

const transform = (arr) => {
  const result = [];
  if (!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!');
  if (arr.length === 0) return [];
  const { name, index } = getControlSequence(arr);
  if (!name) return arr;
  for (let i = 0; i < arr.length; i++) {
    if (name === '--double-prev') {
      if (arr[i] === name) continue;
      // if (index === 0) continue;
      if (i === index - 1) result.push(arr[i], arr[i]);
      else result.push(arr[i]);
    }
    if (name === '--double-next') {
      if (arr[i] === name) continue;
      // if (index === arr.length - 1) return [];
      if (i === index + 1) result.push(arr[i], arr[i]);
      else result.push(arr[i]);
    }
    if (name === '--discard-prev') {
      if (arr[i] === name) continue;
      // if (index === 0) return [];
      if (i === index - 1) continue;
      else result.push(arr[i]);
    }
    if (name === '--discard-next') {
      if (arr[i] === name) continue;
      // if (index === arr.length - 1) return [];
      if (i === index + 1) continue;
      else result.push(arr[i]);
    }
  }
  return result;
}
console.log(transform([1, 2, 3, '--double-prev', 4, 5]) ) // => [1, 2, 3, 4, 4, 5]

module.exports = {
  transform
};
