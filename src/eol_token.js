const Token = require('./token');

class EOLToken extends Token {
  constructor(lineNo) {
    super(lineNo, '\\n');
    this.isEOLToken = true;
  }
}

module.exports = EOLToken;
