const { NotImplementedError } = require('../extensions/index.js');


//  * Given matrix where you have to find cats by ears "^^"
//  *
//  * @param {Array<Array>} matrix 
//  * @return {Number} count of cats found
//  *
//  * @example
//  * countCats([
//  *  [0, 1, '^^'],
//  *  [0, '^^', 2],
//  *  ['^^', 1, 2]
//  * ]) => 3`
function countCats(arr) {
  let count = 0;
  const regexp = /^\^\^$/;

  for(let item of arr) {
    for(let elem of item) {
      if(regexp.test(elem)) count++;
    }
  }
  return count;
}

module.exports = {
  countCats
};