/*
1. How do we assign a value to a variable? A. With the assignment operator
2. How do we change the value of a variable? A. =
3. How do we assign an existing variable to a new variable? set new variable to equal to existing
4. Remind me, what are declare, assign, and define? declare a variable so program can allocate memory for it, assign update value of previously defined, define assigning value to the point a declaration is at
5. What is pseudocoding and why should you do it? to think through your code before writing it out
6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it? 80/20
*/

//B. Strings
let firstVariable = "Hello World";
firstVariable = 5;
let secondVariable = firstVariable;
secondVariable = "Hi World";
console.log(firstVariable);

let yourName = "Ryan Kozin";
console.log("Hello, my name is " + yourName);

//C. Booleans
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kevin";

console.log(a < b);
console.log(c > d);
console.log("Name" === "Name");
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log((false && false && false && false && false) || true);
console.log(false === false);
console.log(e === "Kevin");
console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == "48");

//D. The Farm
let animal = "cow";
if (animal === "cow") {
  console.log("moooooooooooooooo");
} else {
  console.log("Hey! You're not a cow!");
}

//E. Driver's Ed
let age = 16;
if (age >= 16) {
  console.log("Here are the keys!");
} else {
  console.log("Sorry, you're too young.");
}

//II. Loops
//A.
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

for (let i = 10; i <= 400; i++) {
  console.log(i);
}
console.log("============================");
for (let i = 12; i <= 400; i += 3) {
  console.log(i);
}
console.log("============================");
//b.
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i + " <--- is an even number");
  } else {
    console.log(i);
  }
}

//c.

for (let i = 0; i <= 100; i++) {
  if (i % 5 === 0) {
    console.log("I found a " + i + ". High five!");
  }
  if (i % 3 === 0) {
    console.log("I found a " + i + ". Three is a crowd!");
  }
}

//d.
let bank_account = 0;
for (let i = 1; i <= 10; i++) {
  bank_account += i;
}
console.log(bank_account);

bank_account = 0;
for (let i = 1; i <= 100; i++) {
  bank_account += i * 2;
}
console.log(bank_account);

//III. Arrays & Control flow

//A.
//1. elements in an array
//2. guaranteed to be in order
//3. You could model student grades with an array

//b.
const quotes = ["Quote 1", "Quote 2", "Quote 3"];

//c.
const randomThings = [1, 10, "Hello", true];
//1.
console.log(randomThings[0]);
//2.
console.log(randomThings[2]);

//D.
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

ourClass[4] = "Octocat";
ourClass.push("Cloud City");
console.log(ourClass);

//e.

const myArray = [5, 10, 500, 20];
myArray.push("Aegon");
myArray.push("Mystring");
myArray.shift();
myArray.unshift("Bob Marley");
myArray.pop();
console.log(myArray);
myArray.reverse();
console.log(myArray);

//f.

let myVariable = 5;
if (myVariable < 100) {
  console.log("little number");
} else {
  console.log("big number");
}

//g

if (myVariable < 5) {
  console.log("little number");
} else if (myVariable > 10) {
  console.log("big number");
} else {
  console.log("monkey");
}

//H

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps",
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],
  [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs",
  ],
  [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans",
  ],
];

//1.
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

//2.
kristynsCloset.splice(6, 0, "raybans");
console.log(kristynsCloset);

//3.
kristynsCloset[5] = "stained knit hat";
console.log(kristynsCloset);

//4.
console.log("Thom is wearing a " + thomsCloset[0][0] + " today!");
console.log("Thom is wearing " + thomsCloset[1][0] + " today!");
console.log("Thom is wearing " + thomsCloset[2][2] + " today!");

console.log(
  "Thom is killing it with his " +
    thomsCloset[0][1] +
    ", " +
    thomsCloset[1][1] +
    ", and his " +
    thomsCloset[2][2] +
    " today!"
);
thomsCloset[1][2] = "Footie Pajamas";
console.log(thomsCloset);

//IV. Functions

//a
function printGreeting(name) {
  return "Hello there, " + name + "!";
}

console.log(printGreeting("Slimer"));

//b
function printCool(name) {
  return name + " is cool!";
}
console.log(printCool("Captain Reynolds"));

//c
function calculateCube(num) {
  return num * num * num;
}
console.log(calculateCube(5));

//d.

function isVowel(char) {
  if (
    char.toLowerCase() === "a" ||
    char.toLowerCase() === "e" ||
    char.toLowerCase() === "i" ||
    char.toLowerCase() === "o" ||
    char.toLowerCase() === "u" ||
    char.toLowerCase() === "y"
  ) {
    return true;
  }
  return false;
}

console.log(isVowel("b"));

//e.
function getTwoLengths(string, string2) {
  let lengthArray = [];
  lengthArray.push(string.length);
  lengthArray.push(string2.length);
  return lengthArray;
}

console.log(getTwoLengths("Hankin", "Hippopopalous"));

//f.

function getMultipleLengths(strings) {
  multiLengthArray = [];
  for (let i = 0; i < strings.length; i++) {
    multiLengthArray.push(strings[i].length);
  }
  return multiLengthArray;
}

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

//g.

function maxOfThree(a, b, c) {
  if (a > b) {
    if (a > c) {
      return a;
    }
    return c;
  } else if (b > c) {
    return b;
  } else if (a === b && b === c) {
    return a;
  } else {
    return c;
  }
}

console.log(maxOfThree(25, 20, 16));

//H.

function printLongestWord(strings) {
  let longestWord = "";
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > longestWord.length) {
      longestWord = strings[i];
    }
  }
  return longestWord;
}

console.log(
  printLongestWord([
    "BoJack",
    "Princess",
    "Diane",
    "a",
    "Max",
    "Peanutbutter",
    "big",
    "Todd",
    "Peanutbitter",
  ])
);

//Objects

//a

const user = {
  name: "Dave",
  email: "dave@dave.com",
  age: "25",
  purchased: [],
};

//b

user.email = "davesnewemail@dave.com";
user.age++;
console.log(user);

//c.

user.location = "New York";
console.log(user);

//d.
user.purchased.push("carbohydrates");
user.purchased.push("peace of mind");
user.purchased.push("Merino jodhpurs");

console.log(user.purchased[2]);

//E.
//1.
user.friend = {
  name: "Grace Hopper",
  age: 85,
  location: "California",
  purchased: [],
};
//2.
console.log(user.friend.name);
//3.
console.log(user.friend.location);
//4.
user.friend.age = 55;
//5.
user.friend.purchased.push("The One Ring");
//6.
user.friend.purchased.push("A latte");
//7.
console.log(user.friend.purchased[1]);

//F Loops
console.log("================================================");
for (let i = 0; i < user.purchased.length; i++) {
  console.log(user.purchased[i]);
}
console.log("================================================");

for (let i = 0; i < user.friend.purchased.length; i++) {
  console.log(user.friend.purchased[i]);
}

//G. Functions Operating on Objects

function updateUser() {
  user.age++;
  user.name = user.name.toUpperCase();
}

function oldAndLoud(person) {
  person.age++;
  person.name = person.name.toUpperCase();
}
console.log("================================================================");
console.log(user);
oldAndLoud(user);
console.log(user);

// H.

const cat1 = {
    name: "Jimmy",
    breed: "kitten",
    age: 2,
}

console.log("The cat is a " + cat1.breed + " and is " + cat1.age + " years old.");

//I.

const cat2 = {
    name: "Daniel",
    breed: "kitty cat",
    age: 1,
}

//J.
function combineCats(mama, papa){
    console.log(mama);
    console.log(papa);
}

combineCats(cat1, cat2);

combineCats({ name: "Craig", age: 20, breed: "unknown" }, { name: "Linda", age: 20, breed: "undefined" });

function newCats(obj, obj2){
    const newCat = {}
    newCat.name = obj.name + "" + obj2.name;
    newCat.age = 1;
    newCat.breed = obj.breed + "-" + obj2.breed;
    return newCat;
}

console.log(newCats(cat1, cat2));

//K.
console.log(newCats(newCats(cat1, cat2), newCats(cat1, cat2)));
console.log(newCats(newCats(newCats(cat1, cat2), newCats(cat1, cat2)), newCats(newCats(cat1, cat2), newCats(cat1, cat2))));
