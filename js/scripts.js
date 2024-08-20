"use stricti";

//
//
//
// Seleção de elementos
//
//
//

// seleciona o botão de ajuda de senha
const passwordBtn = document.querySelector("#btn-password-gen");

// seleciona a div de senha gerada
const passwordElement = document.querySelector("#generated-password");

//
//
//
// Funções
//
//
//

// Letras, números e símbolos

// a função String.formcharcode tem a tabela ascii do teclado, o matth
// floor arredonda pra inteiro, são 26 letras no teclado e o número 97 e o início das letras minúsculas
const getLetterLowercase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

// a função String.formcharcode tem a tabela ascii do teclado, o matth
// floor arredonda pra inteiro, são 26 letras no teclado e o número 97 e o início das letras maísculas
const getLetterUpercase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

// os sïmbolos estão espalhados na tabela ascii, logo é mais facil criar um string e usar o
// ïndice do string pra selecionar o símbolo, o math floor arredonda e o math randon com o length do string gera o índice
const getSymbol = () => {
  const symbols = "(){}[]=<>/,.!@#$%&*+-*/";
  return symbols[Math.floor(Math.random() * symbols.length)];
};

// a função String.formcharcode tem a tabela ascii do teclado, o matth
// floor arredonda pra inteiro, são 10 números no teclado e o número 48 e o início os símbolos sem espaço e branco
const getNumber = () => {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

// o math randon gera numeros e o multiplo de 10 são a quantidade de números,
//    o math floor arredonda e o toString convert para string
const getNumberAnotherWay = () => {
  return Math.floor(Math.random() * 10).toString();
};


// cria a senha, executando as funções de forma aleatória e selecionando somente 10 caracteres
// 
const genPassword = (getLetterLowercase,
getLetterUpercase,
getSymbol,
getNumber,
getNumberAnotherWay) => {
    // zera a senha, define o tamanho e as funçoes a serem utilizadas
    let password = "";
    const passwordLength = 10;
    const funcGenerator = [getLetterLowercase,
        getLetterUpercase,
        getSymbol,
        getNumber];
        // pra ficar 4 e dar problema de tamanho da senha 12 ao invés de 10
        // getNumberAnotherWay];

        // começa a gerar a senha alternando entre as funções que são 5 e limitadas a 10 caracteres
        for(i=0; i < passwordLength; i = i + funcGenerator.length) {
            // percorre o array, executando as funções de forma aleatória
            funcGenerator.forEach(() => {
                const randomValue = funcGenerator[Math.floor(Math.random() * funcGenerator.length)]();
                password += randomValue;
            })
        }

        // retira os dois carecteres adicionais pra ficar em 10
        password = password.slice(0, passwordLength);
        
        // tiro o display none da div pra mostrar a senha e coloca no h4 a senha gerada
        passwordElement.style.display = "block";
        passwordElement.querySelector("h4").innerText = password;

};



//
//
//
// eventos
//
//
//

// pressionar o botão de click here
passwordBtn.addEventListener("click", () => {
  genPassword(
    getLetterLowercase,
    getLetterUpercase,
    getSymbol,
    getNumber,
    getNumberAnotherWay
  );
});
