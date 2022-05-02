const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 

 *
 */

function createDreamTeam(members) {
  if(!Array.isArray(members)) return false;
  return members.filter(item => (typeof item === 'string'))
                .map(item => item.trim()[0].toUpperCase())
                .sort()
                .join('');
}

// console.log(createDreamTeam([
//         ['David Abram'],
//         ['Robin Attfield'],
//         'Thomas Berry',
//         ['Paul R.Ehrlich'],
//         'donna Haraway',
//         ' BrIaN_gOodWiN  ',
//         {
//           0: 'Serenella Iovino'
//         },
//         'Erazim Kohak',
//         '  val_plumwood',
// ]), 'BDETV');

module.exports = {
  createDreamTeam
};
// console.log(createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']))//'ADMM'
// console.log(createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]))//'LOO'
// console.log(createDreamTeam([
//         '   William Alston ',
//         ' Paul Benacerraf',
//         '  Ross Cameron',
//         '       Gilles Deleuze',
//         '  Arda Denkel ',
//         '  Michael Devitt',
//         '  Kit Fine',
//         ' Nelson Goodman',
//         'David Kolb',
//         '   Saul Kripke',
//         '  Trenton Merricks',
//         '  Jay Rosenberg',
// ]));