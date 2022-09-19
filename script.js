function instrucao(qual) {
    document.querySelector("#mensagem").innerHTML = qual;

}

function jogo(fase) {
    console.log(fase);
    console.log(numero);
    console.log(cont);
    if (fase === 1) {
        instrucao("Você deve adivinhar o número que vou pensar!")
    }
    else if (fase === 2) {
        instrucao("Estou pensando em um número de 1 a 50!")
        numero = Math.floor(Math.random() * 51)
    }
    else if (fase === 3) {
        instrucao("Digite o número que eu pensei. Será que você consegue acertar?");
        document.querySelector("#entrada").setAttribute("style", "display:block");
    }    
        else {
            var tentativa = document.querySelector("#entrada").value;
            cont = cont+1
           
   
    if (tentativa == 0 ) {
        instrucao("Fala sério. O número que pensei está entre 1 e 50");
    }
   else if (tentativa == numero) {
        instrucao("Parabéns! Você acertou na " + cont + "ª tentativa.");
    }
    else if (tentativa < numero) {
        instrucao("Você errou. Chute mais ALTO");
    }
    else if (tentativa > numero) {
        instrucao("Você errou. Chute mais BAIXO.");
    }
}
}


var fase = 0;
var numero;
var cont = 0;
document.querySelector('button').onclick = function () {
    fase = fase + 1;
    jogo(fase);
}