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



/* 
//4 - Use um while para simular um contador de 10 a 0 e exiba "Lançamento!" quando atingir 0.


let contador = 10;
let mensagem = "Lançamento";

while (contador >= 0 ) {
    if (contador === 0 ){
    console.log(`${mensagem}`);
    }else{
    console.log(contador)
    };   
    contador--;
}
*/



/* 
//5 --Escreva um loop que calcula o fatorial de um número (ex: 5! = 5*4*3*2*1).


let numero = 5;
let fatorial = 1; //  iniciadocom 1, pois qualquer número multiplicado por 1 continua o mesmo
for(let i = numero; i > 0; i--){ 
    fatorial *=i;// a  cada iteração, multiplica fatorial pelo valor atual de i.
}


console.log (`O fatorial de ${numero} é ${fatorial}`);


/* Para numero = 5, o loop realiza:

iteração 1: fatorial=1×5=5fatorial = 1 
iteração 2: fatorial=5×4=20fatorial = 5 
iteração 3: fatorial=20×3=60fatorial = 20 
iteração 4: fatorial=60×2=120fatorial = 60 
iteração 5: fatorial=120×1=120fatorial = 120 
 */