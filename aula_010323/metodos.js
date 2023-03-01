// Métodos = ação de um objeto

let pet = {
  // Atributos
  nome: "Fred",
  idade: 5,
  peso: 3.5,
  // Métodos = funções
  dormir() {
    console.log("Estou dormindo. zzzzzzzzzzzzzZZZ");
  },
  comer(comida) {
    console.log(`Estou comendo ${comida}`);
  },
  brincar() {
    console.log("Brincando!");
  },
};

// . lista as propriedades e métodos de um objeto
// pet.dormir(); // Invocação da função/método
// pet.comer("Peixe");
// pet.comer("Batata");

// Tip: crie no objeto pet o método brincar e coloque uma mensagem
// do console.log
// pet.brincar();

let pessoa = {
  // Atributos
  nome: "João",
  idade: 25,
  nacionalidade: "brasileiro",
  // Métodos
  dizerOi() {
    // this = representa o objeto dono do método
    console.log(`Oi, meu nome é ${this.nome}`);
  },
};

pessoa.dizerOi();

// Tip: Melhore o método de dizerOi
// Adicione a mensagem neste formato:
// "Oi, meu nome é João, tenho 25 anos e sou brasileiro";

// Exercício I: Crie um objeto que representa uma conta bancária.
// Propriedades: codigo, saldo, cpf do titular e nome do titular
// Métodos:
// - saque(valor): retirar o valor ao saldo
// - deposito(valor): adicionar o valor do saldo

let conta = {
    codigo: "1054632" ,
    saldo : 500,
    cpf :   "555.444.333-22",
    nome :   "Jamilson P",
    saque(valor){
        this.saldo -= valor;
    },
    deposito(valor){
        this.saldo += valor;
    }
}

conta.saque(200);
console.log(conta.saldo);

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
