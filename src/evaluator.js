const Env = require('./environment');

function Evaluate(astLeaf) {
  return astLeaf.token.value;
}

module.exports = Evaluate;
