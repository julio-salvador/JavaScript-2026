let compras = ["picanha","cerveja","farofa","carvão","pão"];

console.log("O primeiro item da lista é " + compras[0]);
console.log("O último item da lista é " + compras[4]);

compras[2] = "linguiça";
console.log(compras[2]);
compras.push("tubaina");
compras.push("limão");
console.log(compras);
compras.pop();
