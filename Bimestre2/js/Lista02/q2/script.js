function tabuada() {
    let numero = document.getElementById("numero").value;

    numero = parseInt(numero);

    const titulo = document.getElementById("titulo");
    titulo.innerHTML = `<span class="titulo">Tabuada de ${numero}</span>`;

    for (let i = 1; i <= 10; i++) {
        const tab = document.getElementById(`tab${i}`);
        if (tab) {
            tab.innerHTML = `${numero} x ${i} = <span class="resultado">${numero * i}</span>`;
        }
    }
    
}