
/* Quando o constructor é necessário?
Inicialização de Propriedades: O constructor é usado para definir valores iniciais de propriedades na instância da classe.
Sem ele, a classe não sabe quais valores associar às propriedades. */


/* Por que o constructor foi usado?
Para inicializar automaticamente as propriedades nome, telefone, e email no momento da criação da instância.

Quando não usar o constructor?

Quando a classe não precisa de propriedades específicas.
Quando você não precisa inicializar valores ao criar a instância. */

//this se refere a instancia especifica da classe










/* //1. Crie uma classe chamada `Livro` com atributos `titulo`, `autor` e `ano`. Adicione um método para exibir os detalhes do livro.

class Livro {
    constructor( titulo, autor, ano){
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }

    detalhes(){
        console.log(`O livro ${this.titulo} foi escrito por ${this.autor} em ${this.ano}`)
    }
}

const detalhesLivro = new Livro("Estrutura de Dados e Algoritmos com JS","Loiane Groner","2019")

detalhesLivro.detalhes(); */




/* //2. Implemente uma classe `ContaBancaria` com os métodos `depositar` e `sacar`.


// declaração de classe
class ContaBancaria { 
  constructor(){
  this.saldo = 0 // conta inica em 0
  }

  depositar (valor){  
    if (valor > 0 ){
      this.saldo += valor; // add valor a conta
      console.log(` Depósito de R$ ${valor} realizado. Saldo atualizado: R$ ${this.saldo}  `)

    }else{
      console.log(`O valor do depósito deve ser positivo. `);
    }
  }


  sacar (valor){
    if (valor > 0  && valor <=this.saldo){ // Verifica se o valor é maior que 0 e menor ou igual ao saldo atual da conta
      this.saldo-= valor;
      console.log(` Saque de R$ ${valor} realizado. Saldo atualizazdo: R$ ${this.saldo}`);
    } else if (valor > this.saldo){
      console.log(" Saldo insuficiente para realizar o saque.");
    } else{
      console.log("O valor do saque deve ser positivo");
    }
  }


}

const minhaConta = new ContaBancaria();//nova instância da classe ContaBancaria chamada minhaConta. O saldo inicial será 0 devido à definição do construtor.

minhaConta.depositar(1000); //primeiro chama nova instancia e depois a funçao
minhaConta.sacar(200);
minhaConta.sacar(600);
 */

/* //3. Crie uma classe `Pessoa` com um método que exibe "Bem-vindo, [nome]!".

class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  saudar() { // metodo 
    console.log(`Bem-vindo ${this.nome}!`);
  }

}

const pessoa1 = new Pessoa ("Renã"); //Cria uma nova instância da classe Pessoa passando "Renã" como argumento
pessoa1.saudar();

 */









/* 

//4. Implemente uma classe `Calculadora` com métodos para soma, subtração, multiplicação e divisão.


//não é necessário usar o constructor(), porque a classe Calculadora não possui propriedades que precisam ser inicializadas ao criar uma instância.
// O constructor() é utilizado quando você precisa configurar ou inicializar valores específicos assim que a classe é instanciada. Por exemplo:
//Definir propriedades internas como this.saldo ou this.nome.


//A classe contém apenas métodos (funções que realizam operações com os argumentos fornecidos). Não há propriedades internas na classe para armazenar 
// //informações persistentes entre as chamadas dos métodos. 
 

class Calculadora{
  soma(a,b){
    return a+b; 
  }

  subtracacao(a,b){
    return a -b;
  }

  multiplicacao(a,b){
    return a*b;
  }

  divisao(a,b){
    if( b!==0){
      return a/b;
    }else 
    return "Divisão por zero nao permitida" 
  }
}



const Resultado = new Calculadora();  //cria uma instância da classe Calculadora chamada Resultado e  permite acessar seus métodos.

console.log(`Soma: ${Resultado.soma(11,1)}` );
console.log(`Subtração: ${Resultado.subtracacao(11,1)}` );
console.log(`Multiplicação: ${Resultado.multiplicacao(11,2)}` );
console.log(`Divisão: ${Resultado.divisao(10,2)}` );



  */


/* 
//5. Crie uma classe `Agenda` para armazenar e exibir contatos.

class Agenda {
  constructor(nome, telefone,email){ // construtor é necessario para inicializar as propriedade diferente da questão anterior 
    this.nome = nome;
    this.telefone = telefone;
    this.email= email;
  }

  exibirContato(){ 
    return `Nome: ${this.nome}, telefone: ${this.telefone}, Email: ${this.email}`;
  }


}

const Detalhes = new Agenda("Renã", "9891234-5678", "renaneliakim1@gmail.com")

console.log(Detalhes.exibirContato()); */