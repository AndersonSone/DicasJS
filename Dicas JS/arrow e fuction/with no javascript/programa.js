let pessoa = {
    nome: 'Matheus',
  idade: 29,
  profissao: 'Programador'
}

with(pessoa) {
    console.log("O nome dele é " + nome + " e tem " + idade + " anos e é " + profissao);
}