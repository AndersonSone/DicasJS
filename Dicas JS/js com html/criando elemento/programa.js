const paragrafo = document.createElement("p");

const texto = document.createTextNode("Testando");

paragrafo.appendChild(texto);

console.log(paragrafo);

const body = document.body;

body.innerHTML += paragrafo.innerHTML;