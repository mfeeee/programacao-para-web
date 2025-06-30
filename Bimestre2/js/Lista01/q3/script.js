let grau = prompt("Digite um valor em graus (deg)");

grau = parseInt(grau);

let rad = 3.1415 * grau / 180;

document.writeln(`${grau} em radianos equivale à ${rad}`);