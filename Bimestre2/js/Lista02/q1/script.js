function informaMes() {
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    let mes = prompt("Digite o mês em extenso (ex: Setembro)");

    mes = meses.indexOf(mes);

    if (mes == 11 || mes == 1 || mes == 0) {
        var estacao = "VERÃO";
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = `No mês de <span class="mes">${meses[mes]}</span>, estamos na estação <span class="estacao">${estacao}</span>.`;
    }
    else if (mes >= 2 && mes <= 4) {
        var estacao = "OUTONO";
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = `No mês de <span class="mes">${meses[mes]}</span>, estamos na estação <span class="estacao">${estacao}</span>.`;
    }
    else if (mes >= 5 && mes <= 7) {
        var estacao = "INVERNO";
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = `No mês de <span class="mes">${meses[mes]}</span>, estamos na estação <span class="estacao">${estacao}</span>.`;
    }
    else if (mes >= 8 && mes <= 10) {
        var estacao = "PRIMAVERA";
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = `No mês de <span class="mes">${meses[mes]}</span>, estamos na estação <span class="estacao">${estacao}</span>.`;
    }
}