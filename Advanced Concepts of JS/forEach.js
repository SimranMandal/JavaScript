let arr1 = [12, 34, 56, 67, 89]

arr1.forEach(function(array, idx){
    console.log(array, idx);
})

let arr = [1, 2, 3, null, `Hi`, {Name : `Simran`}];

arr.forEach(function(array, i){
    console.log(array, i);
})