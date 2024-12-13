let arr = [1, 2, 3, null, `Hi`, {Name : `Simran`}];

// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]); 
// console.log(arr[5].Name);
//console.log(arr[6]);

for(let i=0; i<=5; i++){
    console.log(arr[i]);
}

arr.forEach(function(array, i){
    console.log(array, i);
})