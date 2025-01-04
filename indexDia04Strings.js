/* //1. Crie uma variável com o nome completo de uma pessoa e exiba apenas o primeiro nome.

let nomeCompleto = "Renã Eliakim Oliveira Silva";
let primeiroNome =  nomeCompleto.slice(0,4);
alert(primeiroNome);


 */


/* //2. Verifique se uma string contém a palavra "Java" e exiba uma mensagem personalizada.


let palavraQualquer = prompt("Digite uma palavra aleatoria: ")
let extracao = alert(palavraQualquer.includes("java") ? "Astring contém 'java' " : "Essa string não possue 'java' "); 
//includes usado para verificar se contem a string especifica no texto - NÃO CONFUNDIR COM 'SLICE'
// 'ternario' - operador ternario

 */

/* //3. Converta uma frase para letras maiúsculas e remova os espaços em branco nas extremidades.

let frase = prompt("Digite uma frase:" )
while(!isNaN(frase.trim()) || frase.trim()==="" ){
    frase = prompt("Por favor, digite uma frase.")
}


let maiuscula = frase.toUpperCase();
alert(maiuscula)




 */


/* //4. Substitua a palavra "erro" por "correção" na string `"Houve um erro no sistema."`.

let frase = "Houve um erro no sistema."
let novaFrase = frase.replace("um erro", "uma correção")

alert(novaFrase)

 */



//5. Divida a frase `"Eu amo JavaScript"` em palavras separadas e exiba cada uma.




/* 

//6. Valide se um URL começa com `https://` e termina com `.com`.

let url = prompt("Digite uma url");
while(!isNaN(url.trim()) || (!url.trim()) ){ // impede que insira uma string vazia e tambem números 
    alert("Por favor, digite uma url valida")
    url = prompt("Digite uma url:")
}

if (url.startsWith("https://") && url.endsWith(".com") )
    alert(` ${url} é valida`);
else{
    alert("url invalida")
}
// essa foi foda
// 
//    */


