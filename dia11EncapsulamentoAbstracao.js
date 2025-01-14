//  **Encapsulamento:** Controla como os dados de um objeto são acessados e modificados, protegendo sua integridade.
// Encapsulamento é como um cofre: você pode interagir com ele através de um painel de senha, mas não tem acesso direto ao seu conteúdo   

//  **Abstração:** Esconde detalhes desnecessários do funcionamento interno e expõe apenas o que é essencial para o uso.

/* 
//1. Crie uma classe `ContaBancaria` que tenha saldo privado e métodos para depositar, sacar e consultar o saldo.

class ContaBancaria{
    #saldo

    constructor (saldoInicial){
        this.#saldo = saldoInicial;

    }

    depositar(valor){
        this.#saldo+= valor;
        console.log(`Você depósitou R$ ${valor}, seu saldo atualizado é R$ ${this.#saldo}`);

    }

    sacar(valor){
        if(valor > this.#saldo){
            console.log("Saldo insuficiente!");
        }else{
            this.#saldo -= valor;
            console.log(`Saque de R$ ${valor} realizado com sucesso! Seu saldo atual é ${this.#saldo}`);

        }

    }


    consultarSaldo(){
        console.log(`Saldo atual: R$ ${this.#saldo}`)
    }
}

const conta = new ContaBancaria(1000);
conta.sacar (150);
conta.consultarSaldo();
conta.depositar(490) */

/* 
//2. Implemente uma classe `Usuario` que armazena uma senha privada e permite alterar a senha com validação.


class Usuario{
    #senha

    constructor(senhaInicial){
        this.#senha = senhaInicial;
    }

    alterarSenha(senhaAtual, novaSenha){
        if(senhaAtual === this.#senha){ // Verifica se a senhaAtual fornecida pelo usuário corresponde à senha armazenada na propriedade privada #senha.
            console.log("Senha alterada com sucesso!")
        }else {
            console.log("Senha atual incorreta!");
        }
    }
}

const usuario = new Usuario("654321"); //variável usuario armazena o objeto criado

usuario.alterarSenha("654321", "abcdef");
usuario.alterarSenha("abcdef","ghijlm"); // Chama o método alterarSenha com a senha correta "abcdef" (alterada anteriormente) e a nova senha "ghijlm"

 */





/* //3. Crie uma classe `ControleRemoto` com métodos para ligar e desligar a TV, escondendo o estado interno.

class ControleRemoto{

    #estado;

    constructor(){
        this.#estado = false; //  TV desligada
    }

    ligarControle(){
        if(!this.#estado){
        this.#estado = true;    
        console.log("TV ligada!")
        }else{
            console.log("TV já está ligada!")

        }
    }

    desligarControle(){
        if(this.#estado){
            this.#estado    =false;
            console.log("A TV está ligada!")

        }
        console.log("TV já está desligada!")

    }
}

const onOffControleRemoto = new ControleRemoto();
onOffControleRemoto.ligarControle();
onOffControleRemoto.ligarControle();
onOffControleRemoto.desligarControle();
onOffControleRemoto.desligarControle();



 */






//4. Escreva uma classe `Cofre` que armazena valores privados e só permite acesso com uma senha correta.











//5. Implemente um sistema de carrinho de compras com itens privados e métodos para adicionar, remover e listar os itens.