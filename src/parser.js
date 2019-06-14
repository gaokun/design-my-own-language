const sourceText = require('./source');

class Parser {
  constructor(source) {
  }
  parse() {
  }
  _findTokenBySymbol(symbol) {
    let ret;
    for (let token of this.tokenList) {
      if (token.symbol === symbol) {
        ret = token;
        break;
      }
    }
    return ret;
  }
}

const parser = new Parser(sourceText);
parser.parse();
