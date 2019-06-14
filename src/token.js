class Token {
  constructor(lineNo, value) {
    this.value = value;
    this.isNumber = false;
    this.isString = false;
    this.isIdentifier = false;
    this.isOperator = false;
  }
}

module.exports = Token;
