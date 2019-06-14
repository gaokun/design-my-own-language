const operators = [
  '=',
  '==',
  '>',
  '<',
  '+',
  '-',
  '*',
  '/',
  '%',
];

const Token = require('./token');

class OperatorToken extends Token {
  constructor(lineNo, value) {
    super(lineNo, value);
    this.isOperator = true;
  }
}

module.exports = OperatorToken;

