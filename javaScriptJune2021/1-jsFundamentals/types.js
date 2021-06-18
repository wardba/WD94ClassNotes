let phrase = "Hello";
//let myName = "Beacher";

//console.log(phrase + " " + myName);
//interpolation of the above example below -> 
//console.log(`${phrase} ${myName}`);

//Booleans
let on = true;
let off = false;

//Null
//intentional empty variable
let empty = null;

//Undefined
//starts empty but we intend to fill it
//let undef = undefined;
let undef;

//Numbers
let degrees = 90;
let precise = 999999999999999;
console.log(precise);

//Strings
let stringOne = "double quotes";
let stringTwo = 'single quotes';
let stringThree = `backticks`;

let first = 1050 +100;
let second = "1050" + "100";
let third = 1050 + "100";
console.log(first, second, third);

//Objects; store multiple values rather than just one
let frodo = {
    race: "Hoobit",
    rings: 1,
    cloak: true
}

console.log(frodo);

//Arrays; can store multiple values; stores list of values
//let list = ["item1", 2, true]
let list = ["item1", "item2", "item3"]

console.log(typeof list);

/*
DataType literals are fixed values that we as developers insert into the code, not
data that is coming from a third party source.
*/

let myName = "Beacher";
console.log(myName.length)

console.log(myName.toUpperCase())

let home = "My home is in Greenwood";
console.log(home.includes("Greenwood"))

let sent = "This sentence will be split into individual parts";
console.log(sent.split(" "))