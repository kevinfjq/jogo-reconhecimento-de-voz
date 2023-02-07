function verificaSeOChutePossuiUmValorValido(chute) {
    const btnJogarNovamente = '<button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>'
    const numero = Number(chute);

    if(chute.toUpperCase() == "GAME OVER") {
        document.body.innerHTML = `
        <h2>Game Over</h2>
        ${btnJogarNovamente}`
        return
   } 

    if(chuteForInvalido(numero)) {
        elementoChute.innerHTML += "<div>Valor inválido</div>";
        return
    }

    if(numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido o número deve estar entre ${menorValor} e ${maiorValor}</div>`;
        return
    }



    if(numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        
        ${btnJogarNovamente}`
    } else if(numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
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