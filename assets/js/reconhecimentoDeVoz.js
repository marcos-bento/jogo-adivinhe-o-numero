// #####################################################
// Reconhecimento de voz
// #####################################################

const seuNumero = document.querySelector(".box");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "pt-Br";

recognition.start();

recognition.addEventListener('result', onSpeak)

function onSpeak(event){
    const resultado = event.results[0][0].transcript;
    validaResultado(resultado)
}

recognition.addEventListener('end', () => recognition.start());
