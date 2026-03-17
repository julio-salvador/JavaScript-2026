const readline = require('readline-sync');

let listaFinal = "";
let contador = 0;
let continuar = "s";

console.log("Cadastro de Convidados.");

while (continuar === "s"){
    contador++;

    let nome  = readline.question(`Digite o nome do convidado ${contador}:`);
    let idade = readline.question(`Digite a idade do convidado ${nome}`);

    listaFinal += `${contador}. Nome: ${nome} Idade: ${idade}`;

    continuar = readline.question("Deseja cadastrar mais al")
}