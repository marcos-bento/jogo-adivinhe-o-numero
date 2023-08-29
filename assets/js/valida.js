const elementoVoceDisse = document.querySelector(".voce_disse");

function validaResultado(chute){
    const numero = +chute;
    seuNumero.textContent = `${chute}`;
    if (Number.isNaN(numero)){
        seuNumero.textContent += " - Inválido";
    }
    if (chute > numeroSecreto) {
        dica.innerHTML = "menor";
        seta.classList.add("inverte-icone");
    } else {
        dica.innerHTML = "maior" ;
        seta.classList.remove("inverte-icone")
    }
    if (chute == numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto} 
        `;
    }
}
