/* //1. Escreva uma função recursiva que conte de `n` até 0.

function contaAteZero (n){
    if(n == 0){
        console.log("Fim")
        return
    }
    console.log(n)
    contaAteZero(n-1);


}

contaAteZero(10); */



/* //2. Implemente uma função que calcule o fatorial de um número.

function calcularFatorial (n){
    if(n === 0 || n === 1 ) return 1;
    let resultado = BigInt(1) ; // BigInt usado para numeros grandes 

    for (let i= 2 ; i <=n; i++ ){
        resultado *= BigInt (i); // BigInt usado para numeros grandes 
    }
    return resultado;

}

console.log(calcularFatorial(500));
console.log(calcularFatorial(1)); */

//3. Crie uma função que some todos os números de um array usando recursão.





//4. Escreva uma função para verificar se uma palavra é um palíndromo usando recursão.





//5. Implemente uma função que calcule o n-ésimo termo da sequência de Fibonacci.






//6. Crie uma função que liste todos os arquivos de um diretório usando recursão.