const Evaluate = require('./evaluator');
const Env = require('./environment');

function Interpreter (asTree) {
  for (let astLeaf of asTree.children) {
    if (astLeaf.operator === '=') {
      Env.set(astLeaf.left.token.value, Evaluate(astLeaf.right));
    } else {
      console.log(Evaluate(astLeaf.left));
    }
  }
}

module.exports = Interpreter;
