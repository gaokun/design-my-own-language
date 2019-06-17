const ASTree = require('./astree');
const ASTLeaf = require('./ast_leaf');
const NumberToken = require('./number_token');
const StringToken = require('./string_token');
const IdToken = require('./id_token');
const EOLToken = require('./eol_token');
const {comparePriority} = require('./operator_util');

class Parser {
  constructor() {
  }
  parse(tokens) {
    this.asTree = new ASTree();
    let astLeaf;
    let isSetValueStatement = false;
    let parentLeaf = new ASTLeaf(); // 待挂父节点
    this.asTree.append(parentLeaf);
    for (let token of tokens) {
      if (token.isEOLToken) {
        parentLeaf = new ASTLeaf();
        this.asTree.append(parentLeaf);
        astLeaf = null;
      } else if (token.isIdentifier) {
        if (!parentLeaf.left) {
          parentLeaf.left = new ASTLeaf(token);
        } else if (!parentLeaf.right) {
          parentLeaf.right = new ASTLeaf(token);
        } else if (!astLeaf) {
          astLeaf = new ASTLeaf();
          astLeaf.left = new ASTLeaf(token);
        } else if (astLeaf.operator) { // 不可能是=
          astLeaf.right = new ASTLeaf(token);
          parentLeaf.right = astLeaf;
          astLeaf = null;
        } else {
          astLeaf.right = new ASTLeaf(token);
        }
      } else if (token.isOperator) {
        if (!parentLeaf.operator) {
          // set '='
          parentLeaf.operator = token.value;
        } else {
          // + - * / % 多项式
          if (!astLeaf) {
            // 第一项
            const oldRightLeaf = parentLeaf.right;
            parentLeaf.right = astLeaf = new ASTLeaf();
            astLeaf.operator = token.value;
            astLeaf.left = oldRightLeaf;
          } else {
            // 其余项
            const tmpLeaf = new ASTLeaf();
            tmpLeaf.operator = token.value;
            if (comparePriority(token.value, parentLeaf.right.operator) > 0) {
              tmpLeaf.left = astLeaf.right;
              astLeaf.right = tmpLeaf;
              astLeaf = tmpLeaf;
            } else {
              tmpLeaf.left = parentLeaf.right;
              parentLeaf.right = tmpLeaf;
              astLeaf = tmpLeaf;
            }
          }
        }
      } else if (token.isNumber) {
        if (!parentLeaf.right) {
          parentLeaf.right = new ASTLeaf(token);
        } else {
          astLeaf.right = new ASTLeaf(token);
        }
      }
    }
    this.asTree.children.pop();
  }
  getASTree() {
    return this.asTree;
  }
}

module.exports = Parser;

