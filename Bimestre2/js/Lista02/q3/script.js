function contarPares() {

    let pares = [];

    for (let i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            pares += i;
            if (i < 10) {
                pares += "👉";
            } else {
                pares += "🏁";
            }
        }
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `${pares}`;
}