function calculaFatorial() {
    let numero = document.getElementById("numero").value;

    numero = parseInt(numero);

    if (numero < 1 || numero == "" || (numero == null)) {
        alert("Número inválido!");
        return 1;
    }

    let aux = numero;
    let total = numero;
    let calculo = "";

    calculo += numero;
    while (--aux > 0) {
        calculo += " x " + aux;
        total *= aux;
    }
    calculo += " = " + total;

    let titulo = document.getElementById("titulo");
    titulo.innerHTML = `Calculando ${numero}!`;

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `${calculo}`;
    
}