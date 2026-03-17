const readline = require('readline-sync');

console.log("Sistema de acesso ao Pob do Jhon");

const nome = readline.question("what's your name?");
const idade = readline.question("How old are you?");

if (idade >=18) {
    console.log(`Hello ${nome}, your entry has been authorized. `);
    const querBeber = readline.keyInYN("Do you want to see the drinks? ");
    if (querBeber){
        console.log("The waiter is at your service.");
    } else{
        console.log("We have juices in this case.");
    }
} else if (idade >= 16){
    console.log(`Hello ${nome}, You need to be accompanied by your guardians..`);
    if 
} else{
    console.log(`I am really sorry ${nome}, For ages 16 and up only....`);
}