
let nomeHeroi = "Lando Norris";
let pontosXP = 900;

if (pontosXP < 100){
    console.log(`Olá ${nomeHeroi},você possui ${pontosXP} de experiência.Você é iniciante. `);
}

else if (pontosXP < 500){
    console.log(`Olá ${nomeHeroi},você possui ${pontosXP} de experiência.Você é guerreiro. `);
}
else if (pontosXP < 1000){
    console.log(`Olá ${nomeHeroi},você possui ${pontosXP} de experiência.Você é mestre. `);
}

else{
    console.log(`Olá ${nomeHeroi},você possui ${pontosXP} de experiência.Você é lenda viva. `);
}


   
   