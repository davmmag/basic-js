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
function transform(arr) {
  if(!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!')
  if(arr.length == 0) return [];
  let res = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr.includes('--discard-next')) {
      if(arr.indexOf('--discard-next') == i) continue
      if((arr.indexOf('--discard-next')+ 1) == i) continue;
      res.push(arr[i]);
    }
    if(arr.includes('--discard-prev')) {
      if(arr.indexOf('--discard-prev') == i) continue
      if((arr.indexOf('--discard-prev') - 1) == i) continue;
      res.push(arr[i]);
    }
    if(arr.includes('--double-next')) {
      if(arr.indexOf('--double-next') == i) continue
      if((arr.indexOf('--double-next') + 1) == i) res.push(arr[i])
      res.push(arr[i]);
    }
    if(arr.includes('--double-prev')) {
      if(arr.indexOf('--double-prev') == i) continue
      if((arr.indexOf('--double-prev') - 1) == i) res.push(arr[i])
      res.push(arr[i]);
    }
  }

  return res;
}

// console.log(transform([1, 2, 3, '--double-prev', 4, 5]) ) // => [1, 2, 3, 4, 4, 5]

module.exports = {
  transform
};
