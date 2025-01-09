/* //1. Crie uma função que calcule o dobro de um número.

 let numero= prompt("Digite um número: ");
while(isNaN(parseFloat(numero)) || numero.trim() === ""){
    alert("Digite um número valido.")
    numero = prompt("Digite um número: ");
}

numero = parseFloat(numero);

function numeroDobro ( numero ){
    return numero * 2;
}


alert(`O dobro de ${numero} é ${numeroDobro(numero)}.`);

*/

/* 

//2. Escreva uma função que receba um nome e retorne uma mensagem de boas-vindas.


let nome = prompt("Digite seu nome: ")
while((!isNaN(nome)) || nome.trim()===""){
    alert("Digite um nome valido: ")
    nome = prompt("Digite seu nome: ")
}


function saudacao(saudacao){
    return `Bem vindo ${nome}` 
}

alert(saudacao(nome));

 */
/* 
//3. Crie uma função que receba dois números e retorne o maior deles.

let n1 = prompt("Digite o primeiro número: ");
let n2 = prompt("Digite o segundo número: ");

while(isNaN(parseFloat(n1)) || isNaN(parseFloat(n2)) || n1.trim() === "" || n2.trim() === "" ){
    //isNaN so aceita um  argumento por vez 

    alert("Digite um número vaalido: ")
    n1 = prompt("Digite o primeiro número: ");
    n2 = prompt("Digite o segundo número: ");
}


n1 = parseFloat(n1);
n2 = parseFloat(n2);


function maiorNumero(n1, n2){
    if (n1 > n2){
        return n1;
    }else{
        return n2;
    }
}

const maior = maiorNumero(n1,n2); // criei a variavel para armaazenar o resultado da function
alert(`O maior número é ${maior}`);


 */
/* 
//4. Implemente uma função que calcule a média de três números.

let n1 = prompt("Digite o primeiro número: ");
let n2 = prompt("Digite o segundo número: ");
let n3 = prompt("Digite o terceiro número: ");

while (
  isNaN(parseFloat(n1)) ||
  isNaN(parseFloat(n2)) ||
  isNaN(parseFloat(n3)) ||
  n1.trim() === "" ||
  n2.trim() === "" ||
  n3.trim() === ""
) {
  alert("Digite um número valido:");
  n1 = prompt("Digite o primeiro número: ");
  n2 = prompt("Digite o segundo número:  ");
  n3 = prompt("Digite o terceiro número:         ");
}
// fomatado para melhor clareza 





n1 = parseFloat(n1);
n2 = parseFloat(n2);
n3 = parseFloat(n3);

function media(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}

const resultado = media(n1, n2, n3);

alert(`A media do números informados é ${resultado.toFixed(2)}.`); //  limitar a média a 2 casas decimais */


/* 
//5. Crie uma função que receba um array de números e retorne a soma deles.


function somarArray (numeros){
    let soma = 0 ;
    for (let numero of numeros){ //  laço "for...of" para percorrer o array e acumular a soma dos números.
        soma+= numero;
    }
    return soma;
}


let lista = prompt("Digite os números separados por virgula ex.: 1, 2, 3.")

let numeros = lista
    .split (",") // divide os numeros ou string por vigulas
    .map((num) => parseFloat(num.trim())); // trecho converter cada parte em um número, removendo espaços desnecessários

if(numeros.some((num) => isNaN (num))){ ///verifica se algum existe algum número não válido.
    alert(" Por favor, insira apenas números");

} else {
    const resultado = somarArray(numeros);
    alert (`A soma dos numeros é ${resultado}`);
}

 */





/* 
//6. Escreva uma função que receba uma string e retorne o número de caracteres dessa string.

let string = prompt("Digite alguma coisa: ")

function numeroString ( string){
    return  string.length   
}

let tamanho = numeroString(string);
alert(`A string "${string}" tem ${tamanho}.`); */