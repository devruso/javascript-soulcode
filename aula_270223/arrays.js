// exercicios

/* 

// Exercício I: Crie um array com 10 números.
// Percorra e calcule a soma de todos os números.
*/

function exerc1(){
    
    let soma = 0;

    const arr = [6,5,4,3,76,5,32,28,9,32];

    for(let numero of arr){
        soma += numero;
    }

    return soma;
}
// console.log(exerc1());

// Exercício II: 
// Crie um array com 5 notas.
// Percorra e calcule a média das notas.

function exerc2(){

    let notas = [7.0,5.0,8.6,10.0,2];

    let media = 0;
    let soma  = 0;

    for(let nota of notas){
        soma += nota;
    }

    media = soma / 5 ;

    return media;
}

// Exercício III: Crie um array com 7 números.
// Percorra e indique qual o maior número deles.

function exerc3(){

    let numeros =  [222,212,234,566,77,12,611];
    let maiorNumero = numeros[0];

    for(let numero of numeros){

        if(numero > maiorNumero){
            maiorNumero = numero;
        }

    }
    return maiorNumero;
}
console.log(exerc3())

// Exercício IV: Crie um array de frutas.
// Percorra e mostre o tamanho do nome de cada fruta.

function exerc4(){

    let frutas = ['banana', 'uva', 'coco', 'abacate', 'manga', 'jaca','mamao'];

    for(let fruta of frutas){
        console.log(`O numero de letras de ${fruta} é ${fruta.length}\n`);
    }

}

// console.log(exerc4());

function exerc5(){
    let arr = [], finalArr=[], finalNumber = 0;

    for(let i = 0; i<5; i++){

        arr.push(Math.floor(Math.random() * 100));
    }

    // for(element of arr){
    //     if(element % 2 == 0){
    //         finalArr.push(element);
    //         finalNumber+=element;
    //     }
    // }
    arr.forEach(x =>{
        if(x % 2 == 0){
            finalArr.push(x);
            finalNumber+=x;
        }

    })

    return finalNumber;
}

function exerc6(nome){
    if(nome.endsWith('mp3') || nome.endsWith('wav')){
        return true;
    }else{
        return false;
    }
}
console.log(exerc6())

function exerc7(){
    let cpf = "056.985.990-23";
    return cpf[12] + cpf[13];

}