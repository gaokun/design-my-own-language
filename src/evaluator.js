const Env = require('./environment');

function Evaluate(astLeaf) {
  if (astLeaf.token.isIdentifier) {
    return Env.get(astLeaf.token.value);
  } else {
    return astLeaf.token.value;
  }
}

module.exports = Evaluate;
