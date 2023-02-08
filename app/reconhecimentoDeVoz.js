const elementoChute = document.querySelector("#chute");;

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = idioma;

recognition.start();

recognition.addEventListener("result", onSpeak);

function onSpeak(evento) {
    let chute = evento.results[0][0].transcript;
    exibeChuteNaTela(chute);
    verificaSeOChutePossuiUmValorValido(chute);
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `<div>${textoChute}</div>
    <span class="box">${chute}</span>`;
}

recognition.addEventListener("end", () => recognition.start());








