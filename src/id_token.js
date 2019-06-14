const Token = require('./token');

class IdToken extends Token {
  constructor(lineNo, value) {
    super(lineNo, value);
    this.isIdentifier = true;
  }
}

module.exports = IdToken;
