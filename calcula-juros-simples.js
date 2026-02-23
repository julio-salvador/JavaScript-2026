function calculaJuroSimples(capital, taxa, tempo){
    let juros = capital * (taxa/100) * tempo;
    let montante = capital + taxa;

    return montante;
}

let conta1 = calculaJuroSimples(5000, 4, 6);
console.log("O montante é R$" + conta1);
