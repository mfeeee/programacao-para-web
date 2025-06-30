const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

const hoje = new Date();
const dia = hoje.getDate();
const mes = meses[hoje.getMonth()];
const ano = hoje.getFullYear();

document.writeln(`${dia} de ${mes} de ${ano}`);