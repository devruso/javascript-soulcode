function media(nota1,nota2,nota3){
    console.log(`a media é: ${((nota1+nota2+nota3)/3).toFixed(2)}`)
}

function calcIMC (peso,altura){
    return peso / (altura*altura);
}

console.log(calcIMC(56.6,1.70))

function count(num){
    for(let i = 0; i<num; i++){
        console.log(i+1);
    }
}

function fullName(nome1,nome2){
    return `Seu nome completo é ${nome1 +" " + nome2}`;
}
console.log(fullName('Jamilson', 'Pestana'))