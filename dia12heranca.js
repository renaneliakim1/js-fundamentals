// A **herança** é um mecanismo que permite que uma classe (subclasse) receba atributos e métodos de outra classe (superclasse).
//A superclasse contém os atributos e métodos básicos que podem ser herdados por outras classes.
//Use a palavra-chave super para chamar o construtor da superclasse.
//Use a palavra-chave extends para criar uma subclasse que herda de uma superclasse.



/* 
//1. Crie uma classe `Veiculo` e duas subclasses: `Carro` e `Moto`. Adicione métodos específicos para cada subclasse.

class Veiculo {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  exibirInformacoes() {
    console.log(
      `Marca: ${this.marca}, modelo: ${this.modelo}, ano: ${this.ano}`
    );
  }
}

class Carro extends Veiculo {
  constructor(marca, modelo, ano, portas) {
    super(marca, modelo, ano);
    this.portas = portas;
  }

  abrirPorta() {
    console.log(`Abrindo porta do carro ${this.modelo}`);
  }

  exibirInformacoes() {
    super.exibirInformacoes();
    console.log(`Portas: ${this.portas}`);
  }
}

class Moto extends Veiculo {
  constructor(marca, modelo, ano, tipoGuidao) {
    super(marca, modelo, ano);
    this.tipoGuidao = tipoGuidao;
  }

  empinar() {
    console.log(`Empinando a moto${this.modelo}.`);
  }

  exibirInformacoes() {
    super.exibirInformacoes();
    console.log(`Tipo de guidão: ${this.tipoGuidao} `);
  }
}



const carro1 = new Carro ("Toyota", "RAV-4", 2019, 4 );
carro1.exibirInformacoes();
carro1.abrirPorta();

const moto1 = new Moto ("Honda","CB1000",2022,"alto");
moto1.exibirInformacoes();
moto1.empinar();
 */



/* 
//2. Implemente uma classe `Funcionario` e uma subclasse `Gerente` que adicione um atributo `setor`.

class Funcionario {
    constructor(nome){
        this.nome = nome;

    }

    exibirInformacoes (){
        console.log(`Nome: ${this.nome}`)
    }
}

class Gerente extends Funcionario{
    constructor(nome, setor){
        super(nome);
        this.setor = setor;
    }

    exibirInformacoes() {
        super.exibirInformacoes();
        console.log(`Setor: ${this.setor}`);
    }

}




const gerente1 = new Gerente("Renã", "Gerência" );
gerente1.exibirInformacoes();
console.log(`Nome: ${gerente1.nome}, setor${gerente1.setor}`);



 */





/* 



//3. Crie uma superclasse `Forma` com um método para calcular área, e subclasses como `Quadrado` e `Círculo` que sobrescrevam esse método.


// Superclasse Forma
class Forma {
    constructor(nome) {
        this.nome = nome;
    }

    // Método para calcular a área (não implementado na superclasse)
    calcularArea() {
        throw new Error("O método calcularArea() deve ser implementado na subclasse.");
    }

    exibirInformacoes() {
        console.log(`Forma: ${this.nome}`);
    }
}

// Subclasse Quadrado
class Quadrado extends Forma {
    constructor(lado) {
        super("Quadrado");
        this.lado = lado;
    }

    // Sobrescrevendo o método calcularArea
    calcularArea() {



        return this.lado ** 2;
    }

    exibirInformacoes() {
        super.exibirInformacoes();
        console.log(`Lado: ${this.lado}, Área: ${this.calcularArea()}`);
    }
}

// Subclasse Círculo
class Círculo extends Forma {

    constructor(raio) {
        super("Círculo");
        this.raio = raio;
    }

    // Sobrescrevendo o método calcularArea
    calcularArea() {
        return Math.PI * this.raio ** 2;
    }

    exibirInformacoes() {
        super.exibirInformacoes();
        console.log(`Raio: ${this.raio}, Área: ${this.calcularArea().toFixed(2)}`);
    }
}

const quadrado = new Quadrado(4);
quadrado.exibirInformacoes();

console.log("----"); // separação visual 

const circulo = new Círculo(3);
circulo.exibirInformacoes();







 */











/* 
//4. Escreva uma classe `Animal` e subclasses como `Cachorro` e `Gato`, cada uma com métodos específicos.


// Classe base Animal
class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    // Método comum para exibir informações básicas
    exibirInformacoes() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade} anos`);
    }

    // Método genérico para som
    emitirSom() {
        console.log(`${this.nome} está emitindo um som.`);
    }
}

// Subclasse Cachorro
class Cachorro extends Animal {
    constructor(nome, idade, raca) {
        super(nome, idade);
        this.raca = raca;
    }

    // Método específico do Cachorro
    abanarRabo() {
        console.log(`${this.nome} está abanando o rabo.`);
    }

    // Sobrescrevendo o método emitirSom
    emitirSom() {
        console.log(`${this.nome} está latindo: Au Au!`);
    }

    exibirInformacoes() {
        super.exibirInformacoes();
        console.log(`Raça: ${this.raca}`);
    }
}

// Subclasse Gato
class Gato extends Animal {
    constructor(nome, idade, cor) {
        super(nome, idade);
        this.cor = cor;
    }

    // Método específico do Gato
    ronronar() {
        console.log(`${this.nome} está ronronando.`);
    }

    // Sobrescrevendo o método emitirSom
    emitirSom() {
        console.log(`${this.nome} está miando: Miau!`);
    }

    exibirInformacoes() {
        super.exibirInformacoes();
        console.log(`Cor: ${this.cor}`);
    }
}

// Testando as classes
const cachorro = new Cachorro("Bob", 13, "Caramelo Black");
cachorro.exibirInformacoes();
cachorro.emitirSom();
cachorro.abanarRabo();

console.log("----");

const gato = new Gato("Mimi", 2, "Cinza");
gato.exibirInformacoes();
gato.emitirSom();
gato.ronronar();

 */







//5. Crie uma classe `Conta` e uma subclasse `ContaPoupanca` que adicione juros ao saldo.


// Classe base Conta
class Conta {
    constructor(titular, saldoInicial = 0) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    // Método para depositar dinheiro
    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$${valor.toFixed(2)} realizado. Saldo atual: R$${this.saldo.toFixed(2)}`);
        } else {
            console.log("O valor do depósito deve ser positivo.");
        }
    }

    // Método para sacar dinheiro
    sacar(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor.toFixed(2)} realizado. Saldo atual: R$${this.saldo.toFixed(2)}`);
        } else {
            console.log("Saldo insuficiente ou valor inválido.");
        }
    }

    // Método para exibir informações da conta
    exibirInformacoes() {
        console.log(`Titular: ${this.titular}, Saldo: R$${this.saldo.toFixed(2)}`);
    }
}

// Subclasse ContaPoupanca
class ContaPoupanca extends Conta {
    constructor(titular, saldoInicial = 0, taxaJurosAnual = 0) {
        super(titular, saldoInicial);
        this.taxaJurosAnual = taxaJurosAnual;
    }

    // Método para aplicar juros ao saldo
    aplicarJuros() {
        const juros = this.saldo * (this.taxaJurosAnual / 100);
        this.saldo += juros;
        console.log(`Juros de R$${juros.toFixed(2)} aplicados. Saldo atual: R$${this.saldo.toFixed(2)}`);
    }

    exibirInformacoes() {
        super.exibirInformacoes();
        console.log(`Taxa de Juros Anual: ${this.taxaJurosAnual}%`);
    }
}

const contaCorrente = new Conta("João", 500);
contaCorrente.exibirInformacoes();
contaCorrente.depositar(200);
contaCorrente.sacar(100);

console.log("----");

const contaPoupanca = new ContaPoupanca("Maria", 1000, 5); // Taxa de juros de 5% ao ano
contaPoupanca.exibirInformacoes();
contaPoupanca.aplicarJuros();
contaPoupanca.depositar(500);
contaPoupanca.sacar(300);
