/* 1-Declare uma variável para armazenar o preço de um produto e outra para o desconto. Calcule o preço final e mostre no console.

let produto= parseFloat(prompt("Digite o preço do produto:"));
// tratamento para que seja inserido apenas numeros 
while (isNaN(produto) || produto < 0) {
    produto = parseFloat(prompt(" Por favor, digite apenas numero e que seja maior que zero "))
}

let desconto= parseFloat(prompt("Digite o desconto (em %) do produto:"));
// tratamento para que seja inserido apenas numeros 
while (isNaN(desconto) || desconto < 0) {
    produto = parseFloat(prompt(" Por favor, digite apenas numero e que seja maior que zero "))
}
// parseFloat - possibilita inserir numero com ponto

let precoFinal = produto - (produto * (desconto / 100 ));

alert ( "O preço final do produto é: R$ " + precoFinal.toFixed(2)  )
// toFixed - permite exibir as casas decimais  */


/* 2-Crie um array com três de suas comidas favoritas e exiba a segunda comida na lista.

let coomidasFavoritas = [ "carne", "feijao", "arroz"]
console.log(coomidasFavoritas[2]) */


/* //3-Crie um objeto que represente um livro, com propriedades como titulo, autor e ano. Mostre no console o título e o autor.
const livro = {
    titulo: "Entendendo Algoritmos",
    autor: "Renã Eliakim",
    ano: "1993"

}

console.log(livro["titulo"]); 
//ou 
console.log (livro.titulo)
//ou misturando as chaves
console.log(`${livro.titulo}, escrito por ${livro.autor}, publicado em ${livro.ano}.`);
 */



/* //4-Declare uma variável estaLogado com o valor false. Depois, mude o valor para true e imprima a mensagem: "Status de login: [valor da variável]".

let estaLogado = false
estaLogado = true

console.log(`Status do login: ${estaLogado}`);

 */


//5-Crie uma variável constante chamada PI com o valor 3.14. Use-a para calcular a área de um círculo com raio 5 e mostre o resultado.
/* 
const pi = 3.14;

const circunferencia = parseFloat(prompt("Digite a circunferência:")); 

const raio = circunferencia / (2 * pi); 

const area = pi * Math.pow(raio, 2); 

//Math.pow eleva ao quadrado

alert(`A área do círculo é ${area.toFixed(2)} unidades quadradas.`); 

 */
