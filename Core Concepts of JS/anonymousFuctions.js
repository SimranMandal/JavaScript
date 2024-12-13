function greeting(){
    console.log(`Hello!!!`)
}

console.log(`Before`)
setTimeout(greeting, 3000)
console.log(`After`)

console.log(`Before`)
setTimeout(function(){
    console.log(`I am anonymous`)
}, 2000)
console.log(`After`)

const multiply = function(a, b){
    return a*b;
}

console.log(multiply(12, 4));