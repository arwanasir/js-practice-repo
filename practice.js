/*js : a scripting language
node.js: is a javascript runtime environment(a server-side environment)

commands:
1. pwd : used to print the working directory
2. cd : change directory 
3. touch : create a file
4. mkdir : create a directory
5. clear :  clear the console from previous commands
6. ls: shows list of files and directories in the working directory.
7.node file.js: to run a js code in  file.js

- statements: a single instruction for the computer to run
- semi-colon is optional at the end of each statement but conventional to use .
// - used to comment.

- variables: are containers. they're case-sensitive just like in python.
- two variable naming conventions (camelCase and snake_case)

variable types:
let : same as var but has a block scope .
var:declare a variable in global scope
const: its value doesn't change .

data types:
same as other programming except for null and undefined. plus Number(float + intiger).

operators:
same as other languages
+ :if used btwn different data types , it combines them and doesnt cause an error unlike python.

comparison operator:
AND : &&
OR: ||
NOT: !
>=,<=,!==
*/
//examples:
console.log(19 % 3);
console.log(10 == 3);
console.log(10 !== "10");
console.log(2 < "10");
console.log("5" > 2);
console.log((false && true) || false);


//typeof: used to check data type.

//example
let x = 5;
console.log(typeof x) 
console.log(typeof "Nathan") 

//Arrays: object data type that can hold different values . its contents are indexed.
//example on array
let birds = ['Owl', 'Eagle', 'Parrot', 'Falcon'];
birds[2] = 'Vulture';

console.log(birds);

/*
array methods:
push(): to add item at the end
pop():the oppsite of push()
unshift(): to add item at index 0
indexOf(): return the index of an item
length: same as len()(in python)

conditional:
same as other languages (if ..... else ) except for else if (its elif in python).
there is (switch/case) too.
*/
//example on if/else
let balance = 7000;

if (balance > 5000) {
  console.log(" you're rich. spend more!");
} else if (balance > 3000) {
  console.log("You only have enough money for a staycation");
} else {
  console.log(" Save money!");
}
console.log("The end!");

//example on switch/case
let age = 15;
switch (age) {
  case 10:
    console.log("Age is 10");
    break;
  case 20:
    console.log("Age is 20");
    break;
  default:
    console.log("Age is neither 10 or 20");
}

/*
break: stops the switch statement.
use switch when its cumbersome to write with if/else

control flows:
same as other language except for the syntax (for/while)
for loop: used when the number of iteration in known.
while: iterates as long as the condition is true.

functions:
its a block of code .
parameter: the input when defining the function.
argument: the input you pass when calling the function
default parameter: assigned when the function is defined
return: returns a value when the function is called later on.
rest parameter : accepts any number of data (...)
*/
//example (function):
function greetings(name) {
  console.log(`Hello, ${name}!`);
}
greetings("John");
 
/*arrow function:
 to write js function in a shorter way
 */
 
 //example:
 const greetings = (name) => { console.log(`Hello, ${name}!`);
};
greetings("John")

//steps to convert a function into an arrow function
function plusTwo(num) {
  return num + 2;
}

// step 1: replace function with let / const
const plusTwo(num) {
  return num + 2;
}
// step 2: add = after the function name
const plusTwo = (num) {
  return num + 2;
}

// step 3: add => after the round brackets
const plusTwo = (num) => {
  return num + 2;
}

/*
object:
is a js special data type that allows to store more than one values(like an array).
*/