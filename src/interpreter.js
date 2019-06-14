const Evaluate = require('./evaluator');
const Env = require('./environment');
const env = new Env();

function Interpreter (asTree) {
  for (let astLeaf of asTree.children) {
    if (astLeaf.operator === '=') {
      env.set(astLeaf.left.token.value, Evaluate(astLeaf.right));
    } else {
      console.log(Evaluate(astLeaf));
    }
  }
}

module.exports = Interpreter;
