const NumberToken = require('./number_token');
const StringToken = require('./string_token');
const IdToken = require('./id_token');

module.exports = (lineNo, value, isString) => {
  if (isString) {
    return new StringToken(lineNo, value);
  }
  const numberRegex = /\d+/g;
  if (numberRegex.test(value)) {
    return new NumberToken(lineNo, +value);
  }
  return new IdToken(lineNo, value);
};
