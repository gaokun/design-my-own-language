const TokenFactory = require('./token_factory');
const EOLToken = require('./eol_token');

class Lexer {
  constructor(source) {
    this.source = source;
    this.tokenList = [];
    this.prepare();
  }
  prepare() {
    const lines = this.source.split('\n');
    this.lines = [];
    lines.forEach((line) => {
      const newLine = line.trim();
      if (newLine) {
        this.lines.push(newLine);
      }
    });
    // console.log(this.lines);
  }
  parse() {
    for (let lineNo in this.lines) {
      const line = this.lines[lineNo];
      // 在处理字符串
      let inString = false;
      // 在处理token
      let inToken = false;
      let text = '';
      for (const char of line) {
        switch(char) {
          case ' ':
            if (inString) {
              text += char;
            } else if (inToken) {
              // end token
              inToken = false;
              this.tokenList.push(TokenFactory(lineNo, text, false));
              text = '';
            }
            break;
          case '\'':
            if (inString) {
              // string end
              inString = false;
              this.tokenList.push(TokenFactory(lineNo, text, true));
              text = '';
            } else {
              // string begin
              inString = true;
            }
            break;
          default:
            inToken = true;
            text += char;
        }
      }
      if (text) {
        if (inString) {
          console.error(lineNo, 'string not closed', text);
          throw new Error(lineNo + ': string not closed');
        }
        this.tokenList.push(TokenFactory(lineNo, text, false));
        text = '';
      }
      this.tokenList.push(new EOLToken(lineNo));
    }
  }
}

module.exports = Lexer;
