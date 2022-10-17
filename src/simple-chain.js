const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: '',
  getLength() {
    return this.chain.split('~~').length;
  },
  addLink(value) {
    if (this.chain.length === 0) {
      this.chain = `( ${value} )`;
      return this;
    } else {
      this.chain += `~~( ${value} )`;
      return this;
    }
  },
  removeLink(position) {
    let chain = this.chain.split('~~');
    if (chain[position - 1]) {
      chain.splice(position - 1, 1);
      this.chain = chain.join('~~');
      return this;
    } else {
      this.chain = '';
      throw new Error('You can\'t remove incorrect link!');
    }
  },
  reverseChain() {
    let chain = this.chain.split('~~').reverse();
    this.chain = chain.join('~~');
    return this;
  },
  finishChain() {
    let chain = this.chain;
    this.chain = '';
    return chain;
  }
};
module.exports = {
  chainMaker
};
