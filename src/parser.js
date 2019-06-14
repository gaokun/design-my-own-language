const ASTree = require('./astree');
const ASTLeaf = require('./ast_leaf');
const NumberToken = require('./number_token');
const StringToken = require('./string_token');
const IdToken = require('./id_token');
const EOLToken = require('./eol_token');

class Parser {
  constructor() {
  }
  parse(tokens) {
    this.asTree = new ASTree();
    let astLeaf;
    let preToken;
    let isSetValueStatement = false;
    let mountASTLeaf; // 待挂子叶
    for (let token of tokens) {
      if (token.isEOLToken) {
        this.asTree.append(astLeaf);
        isSetValueStatement = false;
        preToken = null;
        astLeaf = null;
      } else if (token.isIdentifier) {
        if (!astLeaf) {
          astLeaf = new ASTLeaf();
          astLeaf.left = new ASTLeaf(token);
        } else if (astLeaf.operator) {
          astLeaf.right = new ASTLeaf(token);
        } else {
          astLeaf.left = new ASTLeaf(token);
        }
      } else if (token.isOperator) {
        astLeaf.operator = token.value;
        if (token.value === '=') {
          isSetValueStatement = true;
        }
      } else if (token.isNumber) {
        astLeaf.right = new ASTLeaf(token);
      }
      preToken = token;
    }
  }
  getASTree() {
    return this.asTree;
  }
}

module.exports = Parser;

