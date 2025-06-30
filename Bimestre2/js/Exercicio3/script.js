function sortear() {
    let numero = document.getElementById("numero").value

    numero = parseInt(numero)

    if (numero < 1 || numero > 20) {
        alert("Erro! Digite um número dentro do intervalo correto (1~20)")
        return 1
    }

    let numeroSorteados = ""
    let acertou = false

    for (let i = 0; i < 5; i++) {

        let numeroSorteado = Math.floor(Math.random() * 20) + 1

        numeroSorteados += numeroSorteado + " ";

        if (numero == numeroSorteado) {
            acertou = true
        }

    }

    let resultado = document.getElementById("resultado")
    if (acertou) {
        resultado.innerHTML = "VOCÊ ACERTOU"
    } else {
        resultado.innerHTML = "VOCÊ ERROU"
    }

    let digitado = document.getElementById("digitado")
    digitado.innerHTML = `Número Digitado: ${numero}`

    let sorteados = document.getElementById("sorteados")
    sorteados.innerHTML = `Números Sorteados: ${numeroSorteados}`
    
}