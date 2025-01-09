/* //1. Crie um array com suas três cores favoritas e adicione uma nova cor no final.
let cores =[ "azul", "branco", "verde"]

let cor = prompt("Digite uma cor para adicionar a lista: azul, branco e verde" );
    while (!cor || cor.trim() === ""){
    alert("Digite uma cor valida.")  
    cor =prompt("Digite uma cor para adicionar a lista: azul, branco e verde" );
}

cores.push(cor); // adicona uma nova cor diretamente no array, não precisa criar nova variavel

alert( `A cor ${cor} foi adicionada a lista de cores: ${cores}`)



 */


/* 
//2. Use um loop para exibir todos os itens de um array de compras.

let nomes= ["arroz", "carne", "feijão", "macarrão", "leite"];
for ( let i = 0; i <nomes.length; i++){
    console.log(nomes[i]); // imprime o elemento do array no índice atual
}


*/
/* 
//3. Dado um array de números `[10, 20, 30, 40, 50]`, use o método `slice` para extrair os dois últimos números.



let numeros = [10, 20, 30, 40, 50];
let ultimosNumeros=numeros.slice(-2);// usando contagem de indice negativo
//não precisa usar uma nova variavel, bastava usar slice diretamente no console.log
console.log(ultimosNumeros)








 */

/* 

//4. Crie um array de tarefas e remova a primeira tarefa usando `shift`.

let tarefas = [ "varrer casa", "lavar louça", "banhar cachorro"]
let primeiraPalavra = tarefas.shift(); // não aceita indice, pois não aceita entrada
console.log(tarefas)



 */


/* 

//5. Use `splice` para substituir o terceiro item de um array por "Substituído".


let lista = [ "primeiro" , "segundo", "terceiro"];
console.log(lista.splice(2, 1 , "Substituído"));
// splice - o primeiro parâmetro é o índice onde a substituição deve ocorrer, o segundo parâmetro é o número de elementos a ser removido, e os parâmetros seguintes são os elementos a serem adicionados.


console.log(lista); // aqui terceiro ja aparece substituido



 */

/* //6. Transforme um array de palavras em uma frase completa usando `join`.

const palavras = ["Transformar", "um", "array", "de", "palavras", "em", "uma", "frase", "completa"];
const frase = palavras.join(" "); // Une as palavras com um espaço
console.log(frase); //
 */