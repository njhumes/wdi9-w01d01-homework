/*  1.   Concatenation - 2 strings added together to equal a value
        Interpolation - put variables in between our strings
    2.  DRY - stands for Don't Repeat Yourself. As in don't write the same code twice
    3.  Declaring a variable is the first time the variable is used in the program
        therefore, we need to use const or let to define it.
        We could assing a value to an existing variable if it has already been declared
    4.  We use const when we know that the variable won't ever change. We use let to define any variable that could change later on
    5.  The parent directory is the folder that contains or hosts the files/directories within itself
    6.  Type in 'help' into the terminal
    7.  Tab completion finished what you have begun to type in the terminal, assuming you are in the right directory and have spelled it correctly.
        It helps prevent any typos and makes the process more efficient

*/
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a != b);
console.log(c >= d);
console.log('Name' === 'Name');
console.log(a + b == c);
console.log(a + a < d);
console.log(e === 'Kevin');
console.log(48 == '48');

let letters = "A"; //define letters variable
let i = 0; //defining i variable to start with 0

while (i < 20) { //as long as i is less than 20, the loop will continue to run
    letters += "A"; //letters = letters + 'A'
    i++; //i will increase by 1, until it is greater than 20
}

console.log(letters); // will log AA 20 times

// both loops essentially have the same functionality. For loops are better suited when we need to run a condition until a certain limit is reached. 
// While loops could benefit more when the condition limits or number of times to run a function is already set and determined

for (let i = 0; i < 1000; i++) {
    console.log(i);    
};
// the first part of the control statement sets the variable and declares its value
// the second part of hte control statesment is the test to which the code below will run when this statement is true
// the third part of the control statement tells the loop what to do with the variable when the code runs successfully 

for (let i = 999; i > 0; i--) {
    console.log(i);
};

for (let  i = 1; i <=10; i++){
    console.log(`The value of i is ${i} of 10`);
}