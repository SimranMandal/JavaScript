function sum(...number){
    return number.reduce((a, c) => a+c, 0);
}
console.log(sum(1, 2, 3, 4, 5));

const [first, second, ...rest] = [1, 2, 3, 4, 5]
console.log(rest);

const {a, b, ...rest1} = {a : 12, b : 13, c : 14, d : 15}
console.log(rest1)