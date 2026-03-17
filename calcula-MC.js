function calculoIMC(peso, altura){
    let imc = peso / (altura ** 2);

    console.log("Seu IMC é," + imc);

    if (imc < 18.5){
        console.log("Classificação: abaixo do peso");
    }
    else if (imc >= 18.5 && imc <= 24.9){
        console.log("Classificação: sobrepeso");
    }
    else {
        console.log("Classificação: obesidade");
    }
}
calculoIMC(100, 1.76)
