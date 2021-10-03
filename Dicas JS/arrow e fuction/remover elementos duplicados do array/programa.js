let array = [1,2,3,4,4,5,6,7,8,6,5,4,3,2,1];
//set ele  exclui os que estao errado
let newArray = [...new Set(array)];

console.log(newArray); //  [1, 2, 3, 4, 5, 6, 7, 8]


