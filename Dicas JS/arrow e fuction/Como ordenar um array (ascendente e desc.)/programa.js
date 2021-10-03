let numbers = [5,32,1,838,34,2,5,9,8,2,98,42,64];

let numbersAsc = numbers.sort(function(a, b) {
    return a - b;
});

console.log(numbersAsc); // [1, 2, 2, 5, 5, 8, 9, 32, 34, 42, 64, 98, 838]




let number = [5,32,1,838,34,2,5,9,8,2,98,42,64];

let numbersDesc = numbers.sort(function(a, b) {
    return b - a;
});

console.log(numbersDesc); // [838, 98, 64, 42, 34, 32, 9, 8, 5, 5, 2, 2, 1]

