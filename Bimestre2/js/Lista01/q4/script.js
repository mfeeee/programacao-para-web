let numero = prompt("Digite um número");

numero = parseInt(numero)

for (let i = 0; i < 20; i++) {
    numero++;
    if (numero % 2 == 0) {
        document.writeln(numero);
    }
}