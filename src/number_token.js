const Token = require('./token');

class NumberToken extends Token {
  constructor(lineNo, value) {
    super(lineNo, value);
    this.isNumber = true;
  }
}

module.exports = NumberToken;
