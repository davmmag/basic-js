const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

function getSeason(date) {
  if(!date) return 'Unable to determine the time of year!';
  if (( Object.getOwnPropertyNames(date).length !== 0) || (date instanceof Date == false)){
    throw new Error('Invalid date!');
  }
  const seasons = ['spring', 'summer', 'autumn', 'winter'];
  if(date.getMonth() > 1 && date.getMonth() < 5 ) return seasons[0];
  if(date.getMonth() > 4 && date.getMonth() < 8 ) return seasons[1];
  if(date.getMonth() > 7 && date.getMonth() < 11 ) return seasons[2];
  return seasons[3];
}

module.exports = {
  getSeason
};

console.log(new Date().getFullYear());

// const [
//   winter,
//   spring,
//   summer,
//   autumn,
// ] = [
//                     new Date(2019, 11, 22, 23, 45, 11, 500),
//                     new Date(2018, 4, 17, 11, 27, 4, 321),
//                     new Date(2017, 6, 11, 23, 45, 11, 500),
//                     new Date(1994, 8, 26, 3, 0, 11, 500),
// ];

// console.log(getSeason(winter));
// console.log(getSeason(spring));
// console.log(getSeason(summer));
// console.log(getSeason(autumn));