var numeroA = prompt("Digite um número");
var numeroB = prompt("Agora digite outro número");
var operacao = prompt("Por fim, digite o símbolo da operação");

var numA = parseInt(numeroA);
var numB = parseInt(numeroB);

switch (operacao) {
    case "+":
        document.writeln(`A soma de ${numA} + ${numB} é igual à ${numA + numB}`);
        break;
    case "-":
        document.writeln(`A subtração de ${numA} - ${numB} é igual à ${numA - numB}`);
        break;
    case "*":
        document.writeln(`O produto de ${numA} * ${numB} é igual à ${numA * numB}`);
        break;
    case "/":
        document.writeln(`A divisão de ${numA} / ${numB} é igual à ${numA / numB}`);
        break;
    default:
        alert("Símbolo inválido.");
        break;
}
