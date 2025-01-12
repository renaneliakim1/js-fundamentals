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

/* //3. Crie uma função que some todos os números de um array usando recursão.

function somaNumeros(numeros){
   if( numeros.length === 0 ) return 0; // caso base para encerrar a recursão caso a função chame ela mesma de for indefinidamente e sobrecarregue as pilhas de chamadas
    return numeros[0] + somaNumeros(numeros.slice(1)); // se a função não estiver vazia ela pega o indice 0 do array e cria um novo array exceto com o primeiro elemento
}   


let numeros= [
    4,0,2,6,8,1,3,7,5
]


console.log(somaNumeros(numeros));

 */
/* 
(NÃO REMOVER COMENTARIO)
passo a passo do funcionamento - (gpt) - o array fica menor e acumulando
somaNumeros([0, 2, 6, 8, 1, 3, 7, 5])
= 0 + somaNumeros([2, 6, 8, 1, 3, 7, 5])

somaNumeros([2, 6, 8, 1, 3, 7, 5])
= 2 + somaNumeros([6, 8, 1, 3, 7, 5])

somaNumeros([6, 8, 1, 3, 7, 5])
= 6 + somaNumeros([8, 1, 3, 7, 5])

somaNumeros([8, 1, 3, 7, 5])
= 8 + somaNumeros([1, 3, 7, 5])

somaNumeros([1, 3, 7, 5])
= 1 + somaNumeros([3, 7, 5])

somaNumeros([3, 7, 5])
= 3 + somaNumeros([7, 5])

somaNumeros([7, 5])
= 7 + somaNumeros([5])

somaNumeros([5])
= 5 + somaNumeros([])

somaNumeros([])
Retorna 0 (caso base).

(NÃO REMOVER COMENTARIO)
// retonrmando valores acumulados
somaNumeros([]) retorna 0.
somaNumeros([5]) retorna 5 + 0 = 5.
somaNumeros([7, 5]) retorna 7 + 5 = 12.
somaNumeros([3, 7, 5]) retorna 3 + 12 = 15.
somaNumeros([1, 3, 7, 5]) retorna 1 + 15 = 16.
somaNumeros([8, 1, 3, 7, 5]) retorna 8 + 16 = 24.
somaNumeros([6, 8, 1, 3, 7, 5]) retorna 6 + 24 = 30.
somaNumeros([2, 6, 8, 1, 3, 7, 5]) retorna 2 + 30 = 32.
somaNumeros([0, 2, 6, 8, 1, 3, 7, 5]) retorna 0 + 32 = 32.
somaNumeros([4, 0, 2, 6, 8, 1, 3, 7, 5]) retorna 4 + 32 = 36 */

















/* 
//4. Escreva uma função para verificar se uma palavra é um palíndromo usando recursão.

// palíndromo é uma palavra, frase, número ou sequência de caracteres que pode ser lida da mesma forma de trás para frente e de frente para trás, ignorando espaços, pontuações e diferenças entre letras maiúsculas e minúsculas.


function verificarPalindromo(palavra){
    palavra = palavra.toLowerCase().replace(/[^a-z0-9]/g,''); // toLowerCase - converte para minusculas   //replace -remove caracteres especias 

    function ehPalindromo(palavraLimpa){
    //caso base: se a palavra tem 0 ou 1 letra, é palíndromo e retorna true
    if(palavraLimpa.length<=1) return true;
// verifica se a primeira e a última letra são iguais e retorna false
    if(palavraLimpa[0] !== palavraLimpa[palavraLimpa.length - 1]) return false;
    return ehPalindromo(palavraLimpa.slice(1,-1)); // chamada recursiva removendo a primeira e ultima palavra


   }

   return ehPalindromo(palavra)

}

let texto = prompt(" Digite para verfiquar se é palindromo: ")
    while(isNaN(texto) === false || texto.trim()=== ""){
        alert("Digite uma palavra valida");
        texto = prompt("Digite para verfiquar se é palindromo:")
    }

if(verificarPalindromo(texto)){
    alert (`A palavra ${texto} é palíndromo`)
} else {
    alert(`A palavra ${texto} não é palíndromo`)
}



 */








/* 
//5. Implemente uma função que calcule o n-ésimo termo da sequência de Fibonacci.

function sequenciaDaFibo(numero){
    if(numero === 0 ) return 0;
    if(numero === 1) return 1;

    return sequenciaDaFibo( numero- 1 ) + sequenciaDaFibo( numero - 2);

}

console.log (sequenciaDaFibo(10));


 */

/* 
//6. Crie uma função que liste todos os arquivos de um diretório usando recursão.

function listaArquivosDiretorio(diretorio){
    for(let item of diretorio){
        if(Array.isArray(item)){
            listaArquivosDiretorio(item);
        } else {
            console.log(item);
        }
    }   
}


let arquivos = [
    "index.html",
    "dia01Variaveis.js",
    "dia02Condicionais.js",
    "dia03Booleanos.js",
    "dia04Strings.js",
    "dia05Loops.js",
    "dia06Arrays.js",
    "dia07Functions.js",
    "dia08Matrizes.js",
    "dia09Recursao.js"

]

listaArquivosDiretorio(arquivos); */