function instrucao(qual) {
    document.querySelector("#mensagem").innerHTML = qual;

}

function jogo(fase) {
    console.log(fase);
    console.log(numero);
    if (fase === 1) {
        instrucao("Você deve adivinhar o número que vou pensar!")
    }
    else if (fase === 2) {
        instrucao("Estou pensando em um número de 1 a 50!")
        numero = Math.floor(Math.random() * 51)
    }
    else if (fase === 3) {
        instrucao("Digite o número que eu pensei. Será que você consegue acertar?");
        document.querySelector("#entrada").setAttribute("style", "display:block")
    }    
        else {
            var tentativa = document.querySelector("#entrada").value;
    

    if (tentativa == numero) {
        instrucao("Parabéns! Você acertou.");
    }
    else if (tentativa < numero) {
        instrucao("Você errou. Seu número foi menor do que eu pensei.");
    }
    else if (tentativa > numero) {
        instrucao("Você errou. Seu número foi maior do que eu pensei.");
    }
}
}


var fase = 0;
var numero;
document.querySelector('button').onclick = function () {
    fase = fase + 1;
    jogo(fase);
}

