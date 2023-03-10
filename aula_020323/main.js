// Mostre a seguinte figura com utilização de laços: *

// Estruturas de repetição servem para repetir ações
// ate a condição ser cumprida


// for(let i = 0; i < 5; i++){
//     console.log("*")
// }

// Escreva um programa que use um laço for para imprimir na tela os números de 10 a 1 (em ordem decrescente).
for(let i = 10; i >= 1; i--){
    console.log(i);
}
// Escreva uma função que receba um número e retorne seu dobro.

function numeroDobrado(numero){
    return numero * 2;
}

// Escreva uma função que receba um número e retorne seu quadrado.

function numeroQuadrado(numero){
    return numero * numero;
}

// Escreva uma função que receba nome, idade, endereço e retorne uma
// mensagem no formato: "Olá, eu sou X, tenho X ano(s) e moro em X". Faça
// uso da interpolação de strings.

// function mensagem(nome,idade,endereco){
//     console.log(`Olá, eu sou ${nome}, tenho  ${}`)
// }