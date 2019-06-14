const Token = require('./token');

class EOLToken extends Token {
  constructor(lineNo) {
    super(lineNo, '\\n');
  }
}

module.exports = EOLToken;
