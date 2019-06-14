const Lexer = require('./src/lexer');
const Exception = require('./src/exception');
const NumberToken = require('./src/number_token');
const StringToken = require('./src/string_token');
const IdToken = require('./src/id_token');
const EOLToken = require('./src/eol_token');
const sourceText = require('./src/source');


const lexer = new Lexer(sourceText);
lexer.parse();

const Bright = "\x1b[1m";
const FgYellow = "\x1b[33m";
const FgCyan = "\x1b[36m";

for (let token of lexer.tokenList) {
  if (token instanceof StringToken) {
    console.log(FgYellow, 'string token', token.value);
  } else if (token instanceof NumberToken) {
    console.log(FgYellow,'number token', token.value);
  } else if (token instanceof IdToken) {
    console.log(FgYellow,'identifier token', token.value);
  } else if (token instanceof EOLToken) {
    console.log(FgCyan,'end-line token');
  } else {
    console.log(FgCyan,'unknown token', token.value);
  }
}
console.log(Bright, 'end');
