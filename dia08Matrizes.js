/* //1. Crie uma matriz 3x3 e preencha-a com números sequenciais de 1 a 9.

let listaNumeros = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];


 */

/* 
//2. Escreva uma função que receba uma matriz e retorne a soma de todos os seus elementos.

let listaNumeros = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

let soma = 0; // soma iniciada em 0
for (let i = 0; i < listaNumeros.length; i++){  // listaNumeros.length retorna o número de linhas (3 no exemplo).
    for (let j = 0; j < listaNumeros[i].length; j++){ // Para cada linha (array interno), o j percorre os índices de seus elementos. listaNumeros[i].length retorna o número de colunas (3 no exemplo).
        soma += listaNumeros[i][j]; /// listaNumeros[i][j] acessa o número na posição da linha i e coluna j.

    }
}

console.log(`A soma total: ${soma}`)

// o script soma os numeros de cada subarray e soma o total
// 1+2+3=6.
// 6+4+5+6=21
// 21+7+8+9=45 */




/* 
//3. Crie um tabuleiro de xadrez 8x8, preenchendo-o com "⬜" e "⬛".

const tabuleiro = [] // cria um array vazio que posteriomente recebera um outro array

for (let i = 0; i < 8; i++){ // linhas do tabuleiro 0 a 7 (total de linhas 8)
    const linha = [];
    for (let j = 0; j < 8 ; j++){//Representa as colunas (células) de cada linha.


        // a condicional determina a cor, se for par será branco e se for ímpar preto
        if ((i+j) %2 ===0){
            linha.push("⬜")
        }else{
            linha.push("⬛");
        }
    
    }

    //Dois loops constroem o tabuleiro linha por linha e célula por célula.



    tabuleiro.push(linha); // Após preencher uma linha inteira, ela é adicionada ao tabuleiro.
}

for ( const linha of tabuleiro){
    console.log(linha.join("")); // join transforma o array em string 
}
 */

/* 
//4. Verifique quantos números em uma matriz são pares.

let numeros = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

function exibeNumerosPares ( numeros){
    let contador = 0;
    for (let i = 0; i < numeros.length; i++){
        for(let j = 0; j < numeros[i].length; j++){
            if (numeros [i] [j] % 2 === 0){ // operador % (módulo) para verificar se o número é divisível por 2
                contador++;
            }
        }

    }
    return contador
}

console.log (`A quantidade de números pares: ${exibeNumerosPares(numeros)}`); // chama a função e passa o argumento


 */











//5. Substitua todos os valores maiores que 10 em uma matriz por `0`.




//6. Implemente uma função que multiplique todos os elementos de uma matriz por um valor fornecido.


