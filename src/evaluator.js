const Env = require('./environment');

function Evaluate(astLeaf) {
  if (!astLeaf) {
    return;
  }
  const left = Evaluate(astLeaf.left);
  const right = Evaluate(astLeaf.right);
  if (astLeaf.left && astLeaf.right) {
    let ret;
    switch(astLeaf.operator) {
      case '+':
        // console.log('+', left, right);
        ret = left + right;
        break;
      case '-':
        ret = left - right;
        break;
      case '*':
        // console.log('*', left, right);
        ret = left * right;
        break;
      case '/':
        // console.log('/', left, right);
        ret = left / right;
        break;
      case '%':
        ret = left % right;
        break;
      case '>':
        ret = left > right;
        break;
      case '<':
        ret = left < right;
        break;
      default:
        break;
    }
    return ret;
  } else if (astLeaf.left) {
    return Evaluate(astLeaf.left);
  } else if (astLeaf.right) {
    return Evaluate(astLeaf.right);
  } else if (astLeaf.token.isIdentifier) {
    return Env.get(astLeaf.token.value);
  } else {
    return astLeaf.token.value;
  }
}

module.exports = Evaluate;
