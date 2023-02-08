function verificaSeOChutePossuiUmValorValido(chute) {
    const btnJogarNovamente = textoBotao
    const numero = Number(chute);

    if(chute.toUpperCase() == "GAME OVER") {
        document.body.innerHTML = `
        <h2>Game Over</h2>
        ${btnJogarNovamente}`
        return
   } 

    if(chuteForInvalido(numero)) {
        elementoChute.innerHTML += textoValidacaoTextoInvalido;
        return
    }

    if(numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += textoValidacaoValorForaDeLimites;
        return
    }



    if(numero === numeroSecreto) {
        document.body.innerHTML = `
        ${textoValorCerto}
        
        ${btnJogarNovamente}`
    } else if(numero > numeroSecreto) {
        elementoChute.innerHTML += textoValorMenor;
    } else {
        elementoChute.innerHTML += textoValorMaior;
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener("click", evento => {
    if(evento.target.id == "jogar-novamente") {
        window.location.reload();
    }
})