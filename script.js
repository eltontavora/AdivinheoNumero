function instrucao(qual){
    document.querySelector(#mensagem)innerHTML = qual;

}


funcao jogo(fase){
    if(fase===1){
        instrucao("Você deve adivinhar o número que vou pensar!")
    }
    else if (fase === 2){
        instrucao("Estou pensando em um número de 0 a 50!")
        numero = Math.floor(Math.random()*51)
    }

var fase = 0;
var numero;
document.querySelector('button').onclick = function(){
    fase = fase+1;
    jogo(fase);
}