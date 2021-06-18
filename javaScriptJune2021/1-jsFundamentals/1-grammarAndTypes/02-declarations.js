/*
VARIABLES

1-grammarAndTypes
    02-declarations.js
*/

//what is a variable
var a = 1;
var b = 2;
console.log(a + b);

//notes on naming variables
//1) first a variable must begin with a letter, underscore, or dolloar sign
//2) numbers may follow the above characters, but may not come first
//3) Javascript is case sensitive -- 'hello' and 'Hello' are different variables

/*
DECLARATIONS, INITIALIZATIONS, AND ASSIGNMENT
*/

/*
Declarations refer to when we 'declare' a variable

Initializations refer to when a variable is assigned a value

Assignment refers to giving a variable a value. This can be after initialization.
*/

var x;
console.log("Declaration 1:", x); //undefined

x = 10;
console.log("Initialization 1:", x); //10

x = 33;
console.log("Assignment 1:", x); //33

var y;
console.log(y);

y = "hello";
console.log(y);

y = "you are my friend";
console.log(y);

/*
Var, Let, and Const:

Var = "old" keyword for variables; variables are like an empty bucket; case sensitive
Let = "new" keyword for variables (introduces with ES6)
const = also "new", declares unchangeable variables
*/

let tonight = "great";
const elevenFifty = "amazing";
console.log(tonight, elevenFifty);

tonight = "lovely";
console.log(tonight, elevenFifty);

//elevenFifty = "super!";

