const btnIdioma = document.querySelector("#btn-idioma");
let textoBotao;

let textoChute;

let textoValidacaoTextoInvalido;

let textoValidacaoValorForaDeLimites;

let textoValorCerto;

let contador = 0;

let textoValorMaior;

let textoValorMenor;

let idioma = "pt-Br";

if(contador === 0) {
    trocaIdioma()
}

btnIdioma.addEventListener("click", trocaIdioma)

function trocaIdioma(){
    if(btnIdioma.innerHTML == "EN-US" && contador !== 0) {
        
        idioma = "en-US";

        recognition.lang = idioma;

        document.querySelector("body  h1").innerHTML = "Guess the secret number";

        console.log(idioma);

        document.querySelector(".titulo-3-principal").innerHTML = `The secret number is between <span id="menor-valor">${menorValor}</span> e <span id="maior-valor">${maiorValor}</span>`;

        textoBotao = '<button id="jogar-novamente" class="btn-jogar">Play Again</button>'

        textoChute = "<div>You guessed</div>";

        textoValidacaoTextoInvalido = "<div>Invalid Option</div>";

        textoValidacaoValorForaDeLimites = `<div>Invalid option the number may be between ${menorValor} and ${maiorValor}</div>`;

        textoValorCerto = `<h2>You got it!</h2>
        <h3>The secret number is ${numeroSecreto}</h3>`;

        textoValorMaior = `<div>The secret number is greater <i class="fa-solid fa-up-long"></i></div>`;

        textoValorMenor = `<div>The secret number is lower <i class="fa-solid fa-down-long"></i></div>`;

        btnIdioma.innerHTML = "PT-BR";  
        
    }
    else {
        idioma = "pt-Br";

        if(contador !== 0){
            recognition.lang = idioma
        }
    
        document.querySelector("body > h1").innerHTML = "Acerte o número secreto" 

        document.querySelector(".titulo-3-principal").innerHTML = `O número secreto está entre <span id="menor-valor">${menorValor}</span> e<span id="maior-valor">${maiorValor}</span>`;

        textoBotao = '<button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>'

        textoChute = "Você disse";

        textoValidacaoTextoInvalido = "<div>Valor inválido</div>";

        textoValidacaoValorForaDeLimites = `<div>Valor inválido o número deve estar entre ${menorValor} e ${maiorValor}</div>`;

        textoValorCerto = `<h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>`;

        textoValorMaior = `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`;

        textoValorMenor = `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`;

        btnIdioma.innerHTML = "EN-US";
        
    }

    

    contador++;
}