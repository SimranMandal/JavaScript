let num1 = 10;

let num2 = num1;
console.log(num2);

let student = {
    rollNo : 39, 
    Branch  : `AI`,
    Name : `Simran Mandal`
};

let stu = student;
console.log(stu);

num1 = 77;
delete student.Branch;

console.log(num2);
console.log(stu);