class Token {
  constructor(lineNo, value) {
    this.value = value;
    this.isNumber = false;
    this.isString = false;
    this.isIdentifier = false;
  }
}

module.exports = Token;
