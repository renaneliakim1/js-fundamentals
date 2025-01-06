// Escolha do loop certo:

// Use `for` quando souber o número exato de iterações.
// Use `while` quando depender de uma condição variável.
// Use `do...while` para garantir uma execução inicial.

/* // 1 - Use um loop for para imprimir os números de 1 a 10 no console.


for ( let i = 1; i < 11; i++ ){
    // primeiro definir variavel "i", // depois a condição i>11, por ultimo incrementa o valor de i em 1 após cada iteração.

console.log (` ${i} `);

} */

// 2 -Crie uma lista de nomes e use um for para exibir cada nome.

/* 
let nomes = ["Renã", "Luã", "Francisca"];
for (let i = 0; i < nomes.length; i++) {
  // inicia em 0 "Renã" // length retorna o tamanha do array
  console.log(nomes[i]);
}

*/



/* 
//3 - Escreva um código que verifica se um número em um array é maior que 10. Pare de verificar assim que encontrar o primeiro.

let numeros = [1,3,4,9,15,10,48,40,5,11,2,100];

for ( let i = 0; i<numeros.length; i++ ){
    if (numeros[i] > 10){
        console.log(`O número maior que 10 na lista,( ${numeros[i]}) foi encontrado na posição ${i}`)
        break;
    } 

}

 */