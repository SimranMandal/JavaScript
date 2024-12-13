let arr1 = [1, 2, 3];
let arr2 = [...arr1];
let arr3 = [...arr2, 3, 4]

console.log(arr1);
console.log(arr2);
console.log(arr3);

let obj = {
    a : 12,
    b : 20
};

let obj2 = {
    ...obj, c : 22
};
console.log (obj2)

//Function
function add(a, b, c){
    return a+b+c;
}
const number = [1, 2, 3]
console.log(add(...number))