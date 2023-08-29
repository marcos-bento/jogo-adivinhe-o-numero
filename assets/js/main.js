const elementoMaiorValor = document.getElementById("maior-valor");
const maiorValor = 100;
const dica = document.getElementById("dica");
const numeroSecreto = geraNumeroAleatorio();
const seta = document.querySelector(".dica-icone");

elementoMaiorValor.innerHTML = maiorValor;

function geraNumeroAleatorio() {
    return (Math.random() * maiorValor + 1).toFixed(0);
}

console.log(numeroSecreto);
