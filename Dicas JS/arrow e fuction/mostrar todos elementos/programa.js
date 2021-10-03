var arr = [0,1,2,4,5];

for(var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

var arr = [0,1,2,4,5];

arr.forEach(function(value, key) {
    
  console.log(value);
    
});

//prefiro esse
var arr = [0,1,2,4,5];

arr.map(function(value) {
    
  console.log(value);

});