/* pop: remove um elemento do fim do array;

shift: remove um elemento do início do array;

slice: remove elementos por índice;      */
let nums = [10,20,30,40,50];

nums.pop();

console.log(nums); // [10, 20, 30, 40]let nums = [10,20,30,40,50];

nums.pop();

console.log(nums); // [10, 20, 30, 40]
/*

let nums = [10,20,30,40,50];

nums.shift();

console.log(nums); // [20,30,40,50]


let pessoas = ['Matheus', 'João', 'Pedro', 'Marcos'];
pessoas.splice(2, 1);
console.log(pessoas); // ['Matheus', 'João', 'Marcos']

*/
//////////////////////////////////////////////////
let vetor =[1,2,1,4,5,1,3,4,1,3,1];
while(vetor.includes(1)){
	vetor.includes(1)
	vetor.splice(vetor.indexOf(1),1);

}
console.log(vetor);