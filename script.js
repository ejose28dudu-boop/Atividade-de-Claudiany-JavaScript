console.log("Olá mundo!");
alert("Seja bem-vindo!");

const valorTotal = prompt("Digite o valor total da conta consumida da mesa:");
const quantidadePessoas = prompt ("Digite a quantidade de pessoas que dividirão a conta:");
const valorPorPessoa = valorTotal / quantidadePessoas;
alert(`---Reumo da conta---\n valorPessoa R$ ${valorTotal}\n Divisão por pessoas (3 pessoas): R$ ${valorPorPessoa}`); 
