const Token = require('./token');

class StringToken extends Token {
  constructor(lineNo, value) {
    super(lineNo, value);
    this.isString = true;
  }
}

module.exports = StringToken;
