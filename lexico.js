function lexer(input) {
  const invalidChars = ['j', 'w', 'k', 'ç', 'h', 'q', ')', '(', '/', '&', '%', '$', '#', '@', '!'];
  const invalidTokens = [];
  const validTokens = [];

  const tokens = input.split(" ").filter(token => token.trim() !== "");

  if (tokens.length > 10) {
    return { validTokens: [], invalidTokens: [{ token: "", invalidChar: "Limite de tokens excedido" }] };
  }

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    let isValidToken = true;
    let invalidChar = '';

    for (let j = 0; j < token.length; j++) {
      const char = token[j];

      if (invalidChars.includes(char)) {
        isValidToken = false;
        invalidChar += char;
      } else if (j !== token.length - 1 && !isNaN(parseInt(char))) {
        isValidToken = false;
        invalidChar += char;
      }
    }

    // Verifica se a palavra contém um digrafo de consoantes
    if (hasConsonantDigraph(token)) {
      isValidToken = false;
      invalidChar = token;
    }

    // Verifica se a palavra começa com 'z' ou 'x'
    if (token.startsWith('z') || token.startsWith('x')) {
      isValidToken = false;
      invalidChar = token;
      console.log("Palavras iniciadas com 'z' e 'x' são sempre palavras reservadas pelo sistema.");
    }

    if (isValidToken) {
      validTokens.push(token);
    } else {
      invalidTokens.push({ token, invalidChar });
    }
  }

  return { validTokens, invalidTokens };
}

function hasConsonantDigraph(token) {
  const digraphs = ['ch', 'sh', 'ph', 'th', 'rr', 'ss', 'lh', 'nh', 'qu', 'sç', 'xc', 'xs'];
  for (let i = 0; i < digraphs.length; i++) {
    if (token.includes(digraphs[i])) {
      return true;
    }
  }
  return false;
}

const input = "exemphhmkkhlo ama1do amigo ninho ca2sa zebra shampoo jato vaticano1";
const result = lexer(input);

console.log("Tokens válidos:", result.validTokens);
console.log("Tokens inválidos e caracteres inválidos:", result.invalidTokens);