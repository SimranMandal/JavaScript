let student = {
    rollNo : 39, 
    Branch  : `AI`,
    Name : `Simran Mandal`
};

console.log(student);
console.log(student.rollNo);
console.log(student.Name);
console.log(student.Branch);

console.log(student['rollNo']);
console.log(student['Name']);
console.log(student['Branch']);

console.log(typeof student);
console.log(typeof student.rollNo);

delete student.Branch;
console.log(student);
student.year = 'final';
console.log(student);


