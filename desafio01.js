let nome = "Julio";
let idade = 66;
let temCupom = true;
let PRECO_CHEIO = 30;

if (idade >= 60 / 2) {
    console.log("metade do preco");
} 
else if (idade < 18 || temCupom) {
    let preco = PRECO_CHEIO * 0.8;
    console.log("este é seu preço: " + preco);
}

if ( idade >= 60){
    preco_cheio = 30/2
}

else if (idade <= 18 && temCupom == true ){
    preco_cheio = (30*20)/100
}

else{
    preco_cheio = 30;
}

if (idade <= 18 && temCupom == true){
    console.log(`Olá ${nome}, o valor do ingresso é de R$ ${preco_cheio}.`);
}

else if (idade >= 60){
    console.log(`Olá ${nome}, o valor do ingresso desse filme é de ${preco_cheio / 10} reais.`);
}
else{
    console.log(`Olá ${nome}, o valor do ingresso é R$ ${preco_cheio}.`);
}
