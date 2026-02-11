let saldoConta = 500;
let precoIngresso = 900;

console.log("Tentando comprar ingresso...")

if (saldoConta >= precoIngresso){
    let troco = saldoConta - precoIngresso;
    console.log("Compra realizada, manda bala!");
    console.log("Seu troco é R$: " + troco)
} else {
    console.log("Saldo insuficiente. Falta R$: " + (precoIngresso - saldoConta))
}