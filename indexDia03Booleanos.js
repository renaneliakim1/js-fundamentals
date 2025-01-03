/* //1 - Verifique se um número é maior que 10 e menor que 20.

let numero = parseFloat(prompt("Digite um numero: "));

if (numero>10 && numero <20 ){
    alert(`O número ${numero}, é  verdadeiro `)
    } else {
    alert(`O número ${numero}, é  falso `)
} */

/* //2 - Crie um código que verifique se uma pessoa pode votar. Considere idade >= 16.

let idade = Number(prompt("Digite sua idade: "));
while (isNaN(idade) || idade <= 0 ) {
  alert("Digite uma idade valida!");
  idade = Number(prompt("Digite sua idade: "));
}

if (idade >= 16){
    alert("Você pode dirigir!")
}  else {
    alert("Você não pode dirigir")
    }
 */

/* 
//3 - Use && e || para criar um sistema de login onde um usuário pode entrar com email ou nome de usuário, mas precisa fornecer uma senha válida.    
let credenciais = Number(prompt("Digite 1 - credenciais validos e 2 - credenciais invalidos"))
    while (isNaN(credenciais) || (credenciais !==1 && credenciais !==2)){
        alert("Digite uma opção valida")
        credenciais=(Number(prompt("Digite 1 - credenciais validos e 2 - credenciais invalidos")))
    }

switch (credenciais){
    case 1:
        alert("Usuario conectado!")
        break;
    case 2:
        alert("Tente novamente! Usuario não conectado")
    break;
    default: // aoenas por boas praticas
        alert("Opção invalida!")         
}
 */
/* 
//4 4. Implemente um sistema de notas onde:
//- Notas >= 90: "Aprovado com A"
//- Notas >= 70 e < 90: "Aprovado com B"
//- Notas < 70: "Reprovado".

let nota = parseFloat(prompt("Digite uma nota:  "));

while (isNaN(nota) || nota > 100 || nota < 0) {
  alert("Digite uma nota valida de 0 a 100!");
  nota = parseFloat(prompt("Digite uma nota!"));
}


if (nota >= 90 ){
    alert(" Aprovado com 'A'.")
} else if (nota >=70 && nota <90){
    alert("Aprovado com 'B'.")
} else {
    alert ("Reprovado.")
} */

/* 
//5 - Crie uma variável `saldo` e verifique:
//    - Se `saldo > 0`: Mostre "Saldo positivo".
//    - Se `saldo === 0`: Mostre "Sem saldo".
//    - Caso contrário, mostre "Saldo negativo".    


let saldo= parseFloat(prompt("Digite seu saldo "));
while(isNaN(saldo))  {
    alert(" Digite um valor valido")
    saldo = parseFloat(prompt("Digite seu saldo"));
}


if(saldo === 0 ){
    alert("Sua conta não possue saldo");
}else if (saldo > 0 ){
    alert(`Seu saldo de R$ ${saldo.toFixed(2)} é positivo!`);
}else {
    alert(`Seu saldo de R$ ${saldo.toFixed(2)} é negativo`);
}
 
 */




// 6 - Use o operador ! para verificar se uma luz está apagada e ligue-a.


let luzLigada = false // indica luz desligada

if (!luzLigada) { //! inverte o valor da variavel luzLigada
    luzLigada = true
    alert("luz ligada") 


}else{
    alert("luz já esta desligada")
}

