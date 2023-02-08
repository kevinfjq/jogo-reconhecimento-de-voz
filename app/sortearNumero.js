const menorValor = 50;
const maiorValor = 1000;
const numeroSecreto = gerarNumeroAleatorio()    
    
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * (maiorValor - menorValor) + menorValor);
}

console.log(numeroSecreto);

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;