/* BRONZE

Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.
 
*/

let readMe= {
    string: "Beacher", 
    number: 9,
    boolean: false,
    object: {
        random: "car"
    }
}

console.log(typeof readMe.string)

/* SILVER

Write a conditional that checks the type of one of the values stored in the object 
and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'

*/



if (typeof readMe.string == "string") {
    console.log("Thus is a string");
} else if (typeof readMe.object == "object") {
    console.log("This is an object"); 
} else if (typeof readMe.number == "number"); {
console.log("This is a number");
} else if (typeof readMe.boolean == "boolean"); {
    console.log("This is a boolean");
} else {}
    console.log("What are you?");
}