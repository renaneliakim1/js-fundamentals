/*1-  Escreva um código que exiba "Bom dia", "Boa tarde" ou "Boa noite" com base em um valor da variável hora.

let hora = Number(prompt("Digite a hora (em formato 24h): "))

while (isNaN(hora) || hora < 0 || hora > 23){
    alert("Por favor, digite uma hora valida entre 0 e 23");
    hora = Number(prompt("Digite a hora (em formato 24h): "))
}

if (hora < 5) {
    console.log("Boa madrugada!")
}   else if (hora <12 ){
    console.log("Bom dia!")
}   else if (hora <18){   
     console.log("Boa tarde!")
}   else{
    console.log ("Boa noite!")
} */

/* 2 - Use um switch para exibir o nome de um mês com base em um número (1 para Janeiro, 2 para Fevereiro, etc.).

//podeira fazer com array o exercicio pedia com switch

let numeroMes = Number(
  prompt("Digite o numero do  mês que você deseja saber o nome: ")
);
while (isNaN(numeroMes) || numeroMes < 1 || numeroMes > 12) {
  alert("Digite um numero valido de 1 a 12!");
  numeroMes = Number(
    prompt("Digite o numero do  mês que você deseja saber o nome: ")
  );
}

switch (numeroMes) {
  case 1:
    alert("O nome do mês é janeiro");
    break;
  case 2:
    alert("O nome do mês é fevereiro");
    break;
  case 3:
    alert("O nome do mês é março");
    break;
  case 4:
    alert("O nome do mês é abril");
    break;
  case 5:
    alert("O nome do mês é maio");
    break;
  case 6:
    alert("O nome do mês é junho");
    break;
  case 7:
    alert("O nome do mês é julho");
    break;
  case 8:
    alert("O nome do mês é agosto");
    break;
  case 9:
    alert("O nome do mês é setembro");
    break;
  case 10:
    alert("O nome do mês é outubro");
    break;
  case 11:
    alert("O nome do mês é novembro");
    break;
  case 12:
    alert("O nome do mês é dezembro");
    break;
    default:
        alert("Erro! opção invalida! ")
  
}
 */

/* // 3 Crie um programa que verifica se uma pessoa pode dirigir. Use a variável idade e mostre "Pode dirigir" ou "Não pode dirigir".


let idade = Number(prompt("Digite sua idade: "))
    while(isNaN(idade) || idade === 0 ||("Digite sua idade : ").trim() === "" ){
        alert ("Por favor digite uma idade valida (um numero maior que 0).")
        idade = Number(prompt("Digite sua idade: "));
    }

if (idade > 17 && idade < 70 ){
    alert("Pode dirigir");
 }  else {
    alert("Não pode dirigir");
 }   
 */

/* // 4 Use o operador ternário para verificar se uma variável saldo é maior que 0 e exiba "Saldo positivo" ou "Saldo negativo".

let saldo = prompt("Digite o saldo: ");
while (isNaN(parseFloat(saldo)) || saldo.trim() === "") {
  alert("Por favor, digite apenas numeros!");
  saldo = prompt("Digite o saldo: ");
}

saldo = parseFloat(saldo);


let mensagem = saldo < 0 ? "Seu saldo é negativo" : saldo === 0 ? "Seu saldo é 0 ":  "Seu saldo é positivo ";

alert(mensagem);
  */

/*  //5 - Escreva um programa que classifique números em "Positivo", "Negativo" ou "Zero".

let numero = Number(prompt("Digite uma numero: "));
while (isNaN(Number(numero))) {
  alert("Digite um numero!");
  numero = Number(prompt("Digite um número:"));
}

numero = parseFloat(numero);

if (numero < 0) {
  alert("numero negativo");
} else if (numero > 0) {
  alert("numero positivo");
} else {
  alert("numero zero");
}
 */

/* // 6 Crie um sistema de opções para um caixa eletrônico: "1 - Sacar", "2 - Depositar", "3 - Saldo". Use switch para processar a escolha.
let saldo = 10.65;
let deposito = 1000;
let opcao = Number(prompt("Digite '1 - Sacar', '2 - Depositar', '3 - Saldo'"));
while (isNaN(opcao) || opcao < 1 || opcao > 3) {
  alert(
    "Digite um numero conforme as oções '1 - Sacar', '2 - Depositar', '3 - Saldo'"
  );
  opcao = Number(prompt("Digite '1 - Sacar', '2 - Depositar', '3 - Saldo'"));
}

switch (opcao) {
  case 1:
    alert(` Você esta sacando R$ ${saldo}.`);

   

    break;
  case 2:
    alert(` Você esta depositando R$  ${deposito}.`);

    

    break;
  case 3:
    alert(` Seu saldo é R$ ${saldo}.`);

  
    break;
}
 */