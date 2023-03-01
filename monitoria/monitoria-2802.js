// let frutas = ["banana","maça","uva","pera","manga"];

    
/**
  Crie três variáveis: a, b e c. 
  
  Estas variáveis armazenam números. 
  
  Exiba qual destes números é o maior.
 **/

//   const a = 10, b = 77, c = 52;
  
//   let maiorNumero = 0;

//     if(a > b && a > c){
//         maiorNumero = a;
//     }else if(b > a && b>c){
//         maiorNumero = b;
//     }else{
//         maiorNumero = c;
//     }
//     console.log(maiorNumero);

/*
Crie três variáveis que representam os três lados de um triângulo.

Aplica a seguinte regra para definir se o triângulo é possível: Se a soma de dois
lados é maior que o terceiro lado.

*/ 

// let a = 5, b = 5, c = 25;

// if(a + b > c){
//     console.log(`A soma dos lados é ${a + b} -> opcao 1`);
// }else if(b + c > a){
//     console.log(`A soma dos lados é ${c + b} -> opcao 2`);
// }else if(a + c > b){
//     console.log(`A soma dos lados é ${a + c} -> opcao 3`);
// }else{
//     console.log("Triangulo impossível")
// }

/*
    Use um laço for para imprimir na tela a tabuada do 7 (de 1 a 10).
 */
    // let numero = 7;

    // for(let i = 0; i < 10 ; i++){
    //     console.log(numero * (i + 1));
    // }
    
    // let tabuada = [7,14,21,28,35,42,49,56,63,70];

    // for(let numero of tabuada){
    //     console.log(numero);
    // }

    // function minhaFuncao(){
    //     console.log("Hello World >:D");
    // } 
    // minhaFuncao();

    // const minhaFuncao = () => {
    //     console.log("Hello World");
    // };
    // minhaFuncao();

    // let tabuada = [7,14,21,28,35,42,49,56,63,70];
    // let numerosPares = [];
    // forEach percorre uma array e executa algo em cada um dos elementos

   // tabuada.forEach((numero) => {return console.log(numero)});

    // map transforma os elementos, ou seja, efetua operacoes em cima dos elementos e cria uma array nova
    // para salvar a array nova, é necessario criar uma variavel 

    // tabuada.map((elemento)=>{
    //     if(elemento % 2 === 0){
    //         numerosPares.push(elemento);
    //     }
    // })

    // console.log(numerosPares);

    let tabuada = [7,14,21,28,35,42,49,56,63,70];
    let numerosPares = [];

    // Diferente do map, o filter nao faz transformações nos elementos, apenas checa o valor booleano, true or false
   
    numerosPares = tabuada.filter((elemento)=>{
        if(elemento % 2 === 0){
            return true;
        }else{
            return false;
        }
    })
    
    // console.log(numerosPares);

// Exercício II: Crie um objeto que representa um produto.
// Propriedades: nome, descricao, quantidade, precoOriginal, desconto (em reais).
// Métodos:
// - calcularPrecoDesconto(): retorna o valor aplicado ao desconto
// - apresentacao(): mostra as informações das propriedades
// - comprar(total): reduz a quantidade em relação ao total

    const produto = {
        nome : "Bicicleta",
        descricao: "uma boa bicicleta",
        quantidade: 8,
        precoOriginal: 600,
        desconto: 60,
        calcularPrecoDesconto(preco, desconto){
                return preco - desconto;
        },
        apresentacao(){
            console.log(`Temos ${this.nome}s, é ${this.descricao} e custa ${this.precoOriginal} no cartao de credito ou ${this.calcularPrecoDesconto(this.precoOriginal, this.desconto)} se for no debito. No momento temos: ${this.quantidade} ${this.nome}s`)
        },
        comprar(total){
                this.quantidade-= total;
        }
    }

produto.apresentacao();
