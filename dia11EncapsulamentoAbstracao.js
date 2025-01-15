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

/* 
//4. Escreva uma classe `Cofre` que armazena valores privados e só permite acesso com uma senha correta.


class Cofre {
    #valores;
    #senha;

    constructor (senhaInicial){
        if (typeof senhaInicial !== 'string' || senhaInicial.length ===0 ){
            throw new Error (`A senha inicial não pode ser uma string vazia   `);

        }
        this.#senha=senhaInicial;
        this.#valores= [];

    }


    alterarSenha(senhaAtual, novaSenha){
        if(this.#senha === senhaAtual){
            if(typeof novaSenha !== 'string' || novaSenha.length ===0 ){
                throw new Error ('A nova senha não pode ser uma string vazia ')
            }
            this.#senha = novaSenha;
            return 'Senha Alterada com sucesso!'
        }
        throw new Error ('Senha atual incorreta.');
    }

    adicionarValor(senha, valor){
        if (this.#senha  === senha){
            this.#valores.push(valor);
            return 'Valor adicionado com sucesso!'
        }
        throw new Error('Senha atual incorreta.');

    }


    visualizarValores(senha){
        if(this.#senha === senha){
            return [... this.#valores];
        }
        throw new Error('Senha incorreta.')
    }


}


try {
    const meuCofre = new Cofre('minhaSenha123');
    console.log(meuCofre.adicionarValor('minhaSenha123', 'JS vanilla')); 
    console.log(meuCofre.visualizarValores('minhaSenha123'));
    console.log(meuCofre.alterarSenha('minhaSenha123', 'novaSenha456')); 
    console.log(meuCofre.visualizarValores('novaSenha456')); 
} catch (erro) {
    console.error(erro.message);
}



 */

/* 

//5. Implemente um sistema de carrinho de compras com itens privados e métodos para adicionar, remover e listar os itens.


class CarrinhoDeCompras {
    #itens; 
    constructor() {
        this.#itens = []; // Inicialmente o carrinho está vazio
    }

    adicionarItem(nome, quantidade, preco) {
        if (typeof nome !== 'string' || nome.length === 0) {
            throw new Error('O nome do item deve ser uma string não vazia.');
        }
        if (typeof quantidade !== 'number' || quantidade <= 0) {
            throw new Error('A quantidade deve ser um número maior que zero.');
        }
        if (typeof preco !== 'number' || preco <= 0) {
            throw new Error('O preço deve ser um número maior que zero.');
        }




        const itemExistente = this.#itens.find(item => item.nome === nome);

        if (itemExistente) {
            itemExistente.quantidade += quantidade; // Atualiza a quantidade
        } else {
            this.#itens.push({ nome, quantidade, preco }); // Adiciona um novo item
        }
        return 'Item adicionado ao carrinho com sucesso!';
    }

    removerItem(nome) {
        const index = this.#itens.findIndex(item => item.nome === nome);

        if (index === -1) {
            throw new Error('Item não encontrado no carrinho.');
        }

        this.#itens.splice(index, 1); // Remove o item pelo índice
        return 'Item removido do carrinho com sucesso!';
    }

    listarItens() {
        if (this.#itens.length === 0) {
            return 'O carrinho está vazio.';
        }

        return this.#itens.map(item => 
            `Item: ${item.nome}, Quantidade: ${item.quantidade}, Preço: R$${item.preco.toFixed(2)}`
        ).join('\n');
    }

    calcularTotal() {
        return this.#itens.reduce((total, item) => total + item.quantidade * item.preco, 0).toFixed(2);
    }
}

try {
    const carrinho = new CarrinhoDeCompras();

    console.log(carrinho.adicionarItem('Notebook', 1, 3500.00)); 
    console.log(carrinho.adicionarItem('Mouse', 2, 150.00));      
    console.log(carrinho.adicionarItem('Teclado', 1, 250.00));    

    console.log('\nItens no carrinho:');
    console.log(carrinho.listarItens()); 

    console.log('\nValor total do carrinho:');
    console.log(`R$${carrinho.calcularTotal()}`); 

    console.log(carrinho.removerItem('Mouse')); 
    console.log('\nItens no carrinho após remoção:');
    console.log(carrinho.listarItens()); 
} catch (erro) {
    console.error(erro.message);
}
 */