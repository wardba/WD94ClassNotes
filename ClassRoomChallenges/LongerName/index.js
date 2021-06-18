/* BRONZE

Write two variables. One will store your name and another will store a 
friend's name. Find out what property you can use to check 
how long the names are. Console log how many letters are in each name.

*/

let myName = "Beacher Ward";
console.log(myName.length);

let friendName = "Tony Stark";
console.log(friendName.length);

/* SILVER

Expand on what you have already done and write a conditional to see 
who has the longer name. Using string interpolation console log who's name is longer. 
Example Result: My name is longer than Adam's.

*/

const myNameLength = myName.length;
const friendNameLength = friendName.length;

if (myNameLength > friendNameLength) {
  console.log(`${myName}'s name is longer than ${friendName}'s`);
} else if (myNameLength < friendNameLength) {
  console.log(`${friendName}'s name is longer than ${myName}'s`);
} else {
  console.log(`${friendName}'s and ${myName} are the same length`);
}

/* GOLD

In the console log include how many letters difference there are between the names.
Example Result: Adam's name is shorter than mine by 4 letters.
There is also one additional case that should be handled that 
has not been mentioned so far. See if you can add that to your conditional!

*/

if (myNameLength > friendNameLength) {
  console.log(
    `${myName}'s name is longer than ${friendName}'s by ${
      myNameLength - friendNameLength
    } letters`
  );
} else if (myNameLength < friendNameLength) {
  console.log(
    `${friendName}'s name is longer than ${myName}'s by ${
      friendNameLength - myNameLength
    } letter`
  );
} else {
  console.log(
    `${friendName}'s and ${myName} are the same length with ${myNameLength} characters`
  );
}
