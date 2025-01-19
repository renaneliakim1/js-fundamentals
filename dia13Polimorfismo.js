/* //1. Crie uma classe `Funcionario` com um método `calcularSalario`. Implemente subclasses como `Desenvolvedor` e `Gerente` que sobrescrevem esse método.




class Funcionario {
    constructor(nome, salarioBase) {
      this.nome = nome;
      this.salarioBase = salarioBase;
    }
  
    // Método que será sobrescrito pelas subclasses
    calcularSalario() {
      return this.salarioBase;
    }
  }
  
  class Desenvolvedor extends Funcionario {
    constructor(nome, salarioBase, bonus) {
      super(nome, salarioBase);
      this.bonus = bonus; // Atributo específico do desenvolvedor
    }
  
    // Sobrescreve o método calcularSalario para incluir bônus
    calcularSalario() {
      return this.salarioBase + this.bonus;
    }
  }
  
  class Gerente extends Funcionario {
    constructor(nome, salarioBase, bonus, participacaoLucros) {
      super(nome, salarioBase);
      this.bonus = bonus; // Atributo específico do gerente
      this.participacaoLucros = participacaoLucros; // Participação nos lucros
    }
  
    // Sobrescreve o método calcularSalario para incluir bônus e participação nos lucros
    calcularSalario() {
      return this.salarioBase + this.bonus + this.participacaoLucros;
    }
  }
  
  
  const dev = new Desenvolvedor('Renã', 7500, 1000);
  console.log(`${dev.nome} - Salário: R$ ${dev.calcularSalario()}`);
  
  const gerente = new Gerente('Ana', 6000, 1300, 1000);
  console.log(`${gerente.nome} - Salário: R$ ${gerente.calcularSalario()}`);

  
 */




//2. Implemente uma classe `Transporte` e subclasses como `Carro`, `Avião` e `Barco`, cada uma com seu método `mover`.



// Classe base Transporte
class Transporte {
    constructor(tipo) {
      this.tipo = tipo;
    }
  
    mover() {
      console.log(`${this.tipo} está se movendo.`);
    }
  }
  
  class Carro extends Transporte {
    constructor(marca, modelo) {
      super('Carro');
      this.marca = marca;
      this.modelo = modelo;
    }
  
    // Sobrescreve o método mover para o Carro
    mover() {
      console.log(`${this.marca} ${this.modelo} está dirigindo na estrada.`);
    }
  }
  
  class Avião extends Transporte {
    constructor(marca, modelo) {
      super('Avião');
      this.marca = marca;
      this.modelo = modelo;
    }
  
    // Sobrescreve o método mover para o Avião
    mover() {
      console.log(`${this.marca} ${this.modelo} está voando no céu.`);
    }
  }
  
  // Subclasse Barco
  class Barco extends Transporte {
    constructor(marca, modelo) {
      super('Barco');
      this.marca = marca;
      this.modelo = modelo;
    }
  
    // Sobrescreve o método mover para o Barco
    mover() {
      console.log(`${this.marca} ${this.modelo} está navegando no mar.`);
    }
  }
  
  
  const carro = new Carro('Toyota', 'Corolla');
  carro.mover(); 
  
  const aviao = new Avião('Boeing', '747');
  aviao.mover(); 
  
  const barco = new Barco('Yamaha', '242X');
  barco.mover(); 
  




/* 
//3. Crie uma superclasse `Documento` com um método `exibirConteudo`, e subclasses como `PDF` e `Word` que personalizem esse método.



class Documento {
  constructor(titulo, conteudo) {
      this.titulo = titulo;
      this.conteudo = conteudo;
  }

  exibirConteudo() {
      return `Exibindo o conteúdo do documento: \n${this.conteudo}`;
  }
}

class PDF extends Documento {
  exibirConteudo() {
      return `*** PDF: ${this.titulo} ***\n${this.conteudo}\nFormato otimizado para leitura.`;
  }
}

class Word extends Documento {
  exibirConteudo() {
      return `--- Word Document: ${this.titulo} ---\n${this.conteudo}\nEditável no Microsoft Word ou similares.`;
  }
}

const documentoPDF = new PDF("Relatório Anual", "Conteúdo do relatório em PDF.");
console.log(documentoPDF.exibirConteudo());

const documentoWord = new Word("Plano de Projeto", "Conteúdo do documento Word.");
console.log(documentoWord.exibirConteudo());

 */




/* 
//4. Implemente um sistema de animais com uma superclasse `Animal` e métodos específicos em subclasses como `Passaro` e `Peixe`.

// Definindo a superclasse Documento
class Documento {
  constructor(titulo, conteudo) {
      this.titulo = titulo;
      this.conteudo = conteudo;
  }

  exibirConteudo() {
      return `Exibindo o conteúdo do documento: \n${this.conteudo}`;
  }
}

// Subclasse PDF que estende Documento
class PDF extends Documento {
  exibirConteudo() {
      return `*** PDF: ${this.titulo} ***\n${this.conteudo}\nFormato otimizado para leitura.`;
  }
}

// Subclasse Word que estende Documento
class Word extends Documento {
  exibirConteudo() {
      return `--- Word Document: ${this.titulo} ---\n${this.conteudo}\nEditável no Microsoft Word ou similares.`;
  }
}

// Exemplos de uso
const documentoPDF = new PDF("Relatório Anual", "Conteúdo do relatório em PDF.");
console.log(documentoPDF.exibirConteudo());

const documentoWord = new Word("Plano de Projeto", "Conteúdo do documento Word.");
console.log(documentoWord.exibirConteudo());



 */


/* 


//5. Use o polimorfismo para criar uma lista de diferentes formas geométricas (`Quadrado`, `Círculo`, etc.) e calcule suas áreas.



class Forma {
  calcularArea() {
      throw new Error("O método calcularArea() deve ser implementado pela subclasse.");
  }
}

class Quadrado extends Forma {
  constructor(lado) {
      super();
      this.lado = lado;
  }

  calcularArea() {
      return this.lado * this.lado;
  }
}

class Circulo extends Forma {
  constructor(raio) {
      super();
      this.raio = raio;
  }

  calcularArea() {
      return Math.PI * this.raio * this.raio;
  }
}

class Retangulo extends Forma {
  constructor(base, altura) {
      super();
      this.base = base;
      this.altura = altura;
  }

  calcularArea() {
      return this.base * this.altura;
  }
}

const formas = [
  new Quadrado(4),
  new Circulo(3),
  new Retangulo(5, 2)
];

formas.forEach(forma => {
  console.log(`Área: ${forma.calcularArea().toFixed(2)}`);
});
 */