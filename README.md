# analizador lexico completo com javascript.

invalidChars: Isso é um array que contém uma lista de caracteres inválidos. 
Esses caracteres não são permitidos nos tokens e farão com que os tokens sejam considerados inválidos se eles aparecerem em qualquer token.
const invalidChars = ['j', 'w', 'k', 'ç', 'h', 'q', ')', '(', '/', '&', '%', '$', '#', '@', '!'];

invalidTokens: Isso é um array vazia que será preenchida com os tokens inválidos encontrados durante a análise.
const invalidTokens = [];

validTokens: Isso é uma array vazia que será preenchida com os tokens válidos encontrados durante a análise.
const validTokens = [];

tokens: Aqui, está dividindo a string de entrada (input) em tokens individuais com base nos espaços em branco.
 Usei o método split(" ") para dividir a string em substrings sempre que encontramos um espaço em branco. Em seguida,
 apliquei o método filter para remover quaisquer tokens vazios resultantes do processo de divisão.
 const tokens = input.split(" ").filter(token => token.trim() !== "");

if (tokens.length > 10): Esta condição verifica se o número de tokens encontrados excede 10. Se isso acontecer, significa que o limite máximo de tokens foi excedido.
Nesse caso, o código retorna um objeto com validTokens vazio e invalidTokens contendo um objeto com uma propriedade token vazia e a mensagem "Limite de tokens excedido" na propriedade invalidChar.

Essa parte do código inicializa as variáveis necessárias, divide a string de entrada em tokens e faz uma verificação para garantir que o número de tokens não exceda um limite máximo.
Dependendo dos resultados, os tokens serão classificados como válidos ou inválidos.

for (let i = 0; i < tokens.length; i++) {
  const token = tokens[i];
}

let i = 0: Inicializacao da variável de controle i com o valor 0. Essa variável é usada para acompanhar a posição atual no array tokens.

i < tokens.length: A condição de continuação do loop. Enquanto i for menor que o comprimento da array tokens, o loop continuará sendo executado.

const token = tokens[i]: A cada iteração do loop, o elemento atual do array tokens é atribuído à variável token. Isso permite acessar e trabalhar com o elemento individualmente.

Após essa atribuição, o restante do código dentro do loop é executado, onde ocorrem as verificações de validade do token e a manipulação das variáveis isValidToken e invalidChar, conforme explicado anteriormente.
<
Esse loop percorre todos os tokens presentes no array tokens e executa as verificações necessárias em cada um deles.

# 2 -
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

const char = token[j];: Aqui, estamos atribuindo o caractere atual (na posição j) do token à variável char. Isso nos permite acessar e verificar cada caractere individualmente.

if (invalidChars.includes(char)): Verificamos se o caractere atual está presente na lista invalidChars, que contém os caracteres inválidos. 
Se o caractere estiver presente na lista, significa que ele é inválido.
Se o caractere for inválido, definimos isValidToken como false para indicar que o token inteiro é inválido.
Além disso, concatenamos o caractere inválido (char) à variável invalidChar, que armazena os caracteres inválidos encontrados até o momento.

else if (j !== token.length - 1 && !isNaN(parseInt(char))): Caso contrário, se o caractere não estiver na lista de caracteres inválidos,
verificamos se não é o último caractere do token (j !== token.length - 1) e se não é um número (!isNaN(parseInt(char))).

Se essas condições forem atendidas, significa que o caractere é um dígito numérico no meio do token, o que é considerado inválido.
Novamente, definimos isValidToken como false e concatenamos o caractere inválido à variável invalidChar

# OBS :
Essencialmente, esse trecho de código percorre cada caractere do token e verifica se ele é inválido com base nas condições mencionadas. Se algum caractere for considerado inválido,
isValidToken será definido como false e o caractere inválido será adicionado à variável invalidChar.
Isso nos ajuda a identificar quais caracteres tornam o token inválido.

# 2 - função hasConsonantDigraph
function hasConsonantDigraph(token) {
  const digraphs = ['ch', 'sh', 'ph', 'th', 'rr', 'ss', 'lh', 'nh', 'qu', 'sç', 'xc', 'xs'];
  for (let i = 0; i < digraphs.length; i++) {
    if (token.includes(digraphs[i])) {
      return true;
    }
  }
  return false;
}
Vamos analisar essa função:
Essa função, hasConsonantDigraph, verifica se um token contém algum digrama de consoantes. Vamos ver como ela funciona:

const digraphs: Isso é uma array que contém uma lista de digramas de consoantes. Cada elemento da array representa um digrama, 
que é uma sequência de duas letras.

O loop for: Nesse loop, percorremos todos os elementos do array digraphs.

for (let i = 0; i < digraphs.length; i++): Aqui, estamos inicializando uma variável i com o valor 0. 
O loop será executado enquanto i for menor que o comprimento da array digraphs. 
A cada iteração, incrementamos o valor de i em 1.

if (token.includes(digraphs[i])): Dentro do loop,
verificamos se o token passado como argumento para a função (token) inclui o digrama atual (digraphs[i]).
O método includes verifica se a sequência de caracteres do digrama está presente no token.

Se o digrama fo encontrado no token, significa que o token contém um digrama de consoantes, e a função retorna true.

Se o loop for concluído sem retornar true, isso significa que o token não contém nenhum dos digramas de consoantes do array digraphs. Nesse caso, a função retorna false.

Essa função é usada para verificar se um token possui um digrama de consoantes específico. 
É chamada dentro do loop principal do código para identificar e marcar os tokens que contêm digramas como inválidos.
