
class ASTree {
  constructor() {
    this.children = [];
  }
  append(node) {
    this.children.push(node);
  }
}

module.exports = ASTree;
