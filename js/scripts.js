// usando strict mode
"use strict";

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

// seleciona botão que permite alterar formatação da senha
const btnPassGen = document.querySelector("#btn-generate");

// seleciona container que esta hide
const showUp = document.querySelector("#generate-options");

// seleciona quantos carecteres a senha ira ter
const lengthInput = document.querySelector("#length");

// seleciona se a senha terá letras
const letterInput = document.querySelector("#letter");

// seleciona se a senha terá números
const numberInput = document.querySelector("#number");

// seleciona se a senha terá símbolos
const symbolInput = document.querySelector("#symbol");

// seleciona botão copy
const copyBtn = document.querySelector("#copy-password");

// limite nde 30 caracteres
const limite30 = document.querySelector("#warning");

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
const genPassword = (
  getLetterLowercase,
  getLetterUpercase,
  getSymbol,
  getNumber
) => {
  // zera a senha, define o tamanho e as funçoes a serem utilizadas
  let password = "";

  // recebe o tamanho de senha escolhido pelo usuário. O símbolo + força a entender o length como número e não string
  let passwordLength = +lengthInput.value;

  // inicializa o array de funçoes vazio
  const funcGenerator = [];

  // adiciona ao array de funções os tipos selecionados pelo usuário
  if (letterInput.checked) {
    funcGenerator.push(getLetterLowercase, getLetterUpercase);
  }

  if (numberInput.checked) {
    funcGenerator.push(getNumber);
  }

  if (symbolInput.checked) {
    funcGenerator.push(getSymbol);
  }

  // console.log(passwordLength, funcGenerator.length);
  // se o usuário não marcou nada só retorno
  if (passwordLength === 0 || funcGenerator.length === 0) {
    return;
  }



  // limita o tamanho da password a 30 caracteres
  if (passwordLength > 30) {
    passwordLength = 30;
    limite30.innerText= "Máximo de 30 caracteres"
  }

  // começa a gerar a senha alternando entre as funções que são 5 e limitadas a 10 caracteres
  for (let i = 0; i < passwordLength; i = i + funcGenerator.length) {
    // percorre o array, executando as funções de forma aleatória
    // console.log("dentro do loop ${i}");
    funcGenerator.forEach(() => {
      const randomValue =
        funcGenerator[Math.floor(Math.random() * funcGenerator.length)]();
      password += randomValue;
      // console.log(password);
    });
  }

  // retira os dois carecteres adicionais pra ficar em 10
  password = password.slice(0, passwordLength);
  // console.log(password);

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
btnPassGen.addEventListener("click", () => {
  genPassword(getLetterLowercase, getLetterUpercase, getSymbol, getNumber);
});

// ao pressionar o botão de selecionar a formação da senha abre o container de opções
passwordBtn.addEventListener("click", () => {
  showUp.classList.toggle("hide");
});
