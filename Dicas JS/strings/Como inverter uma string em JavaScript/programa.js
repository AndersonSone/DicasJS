///metodo 1
let teste = "Testando uma string";
let invertida = teste.split("").reverse().join("");
console.log(invertida);

///metodo 2
function inverterString(str) {
    var o = '';
    for (var i = str.length - 1; i >= 0; i--) {
        o += str[i];
    }
    return o;
}

console.log(inverterString("Testando a inversão"));