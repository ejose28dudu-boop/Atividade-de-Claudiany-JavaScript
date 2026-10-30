
console.log("Calculadora de idade");
alert("Seja bem-vindo!");

const anoAtual = Number(prompt("Digite o ano atual:"));
const anoNascimento = Number(prompt("Digite o seu ano de nascimento:"));

const idade = anoAtual - anoNascimento;

alert(`--- Resumo ---
Ano atual: ${anoAtual}
Ano de nascimento: ${anoNascimento}
Sua idade aproximada é: ${idade} anos.`);
