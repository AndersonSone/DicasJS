var x = 10;
var y = 5;
var soma = (num1, num2) => num1 + num2;
console.log(soma(x, y)); // 15

var frase = 'Estou vendo como criar arrow functions!';
var fraseToArray = (frase) => frase.split(' ');
console.log(fraseToArray(frase)); // (6) ["Estou", "vendo", "como", "criar", "arrow", "functions!"]

var semParam= () => console.log('Teste arrow function');
semParam();

var roupas = [
    {produto: 'Camisa', preco: 25, cor: 'Amarelo'},
    {produto: 'Calça', preco: 80, cor: 'Azul'},
    {produto: 'Jaqueta', preco: 100, cor: 'Preto'},
    {produto: 'Camiseta', preco: 15, cor: 'Rosa'},
    {produto: 'Calção', preco: 20, cor: 'Azul'},
];
///supor esses produtos

var roupasAzuis = roupas.map((roupa) => {
    return roupa.cor === 'Azul';
});
//só volta oq for azul
console.log(roupasAzuis);

var precoAlto = roupas.filter((roupa) => {
    return roupa.preco > 25;
})
console.log(precoAlto);
