
class ASTLeaf {
  constructor(token) {
    this.operator = null;
    this.left = null;
    this.right = null;
    this.token = token;
  }

}

module.exports = ASTLeaf;
