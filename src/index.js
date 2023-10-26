let nomeHeroi = "Felipão"
let quantidadeXP = 5555
let nivelDoHeroi

if(quantidadeXP <= 1000){
nivelDoHeroi = "Ferro"
} else if (quantidadeXP >= 1001 && quantidadeXP <= 2000){
nivelDoHeroi = "Broze"
} else if (quantidadeXP >= 2001 && quantidadeXP <= 5000){
    nivelDoHeroi = "Prata"
} else if (quantidadeXP >= 5001 && quantidadeXP <= 7000){
    nivelDoHeroi = "Ouro"
} else if (quantidadeXP >= 7001 && quantidadeXP <= 8000){
    nivelDoHeroi = "Platina"
} else if (quantidadeXP >= 8001 && quantidadeXP <= 9000){
    nivelDoHeroi = "Ascendente"
} else if (quantidadeXP >= 10001){
    nivelDoHeroi = "Radiante"
}



console.log("O Herói de nome "  + nomeHeroi + " está no nivel de " + nivelDoHeroi )