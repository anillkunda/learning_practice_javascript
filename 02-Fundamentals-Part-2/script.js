'use strict';

// -------** Functions

// --- Function is simply a piece of code that we can reuse over and over again in our code.

// 01. Function Declaration - Function that can be used before it's declared (Hoisting)
function calcAge(birthyear) {
  return 2024 - birthyear;
}

const showAge = calcAge(2002);
console.log(showAge);

// 02. Function Expression - Essentially a function value store in a variable
const calcAge2 = function (birthyear) {
  return 2024 - birthyear;
};

const showAge2 = calcAge2(2003);
console.log(showAge2);

// 03. Arrow Function - Great for a quick one-line function. has no this keyword.
const calcAge3 = (birthyear) => 2024 - birthyear;
const showAge3 = calcAge(2004);
console.log(showAge3);

// ----- Create a Fruit Processor Function()

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);

  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}
fruitProcessor(5, 0); // calling / running / invoking function

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

console.log(fruitProcessor(5, 0));

// Parameter : It's a variable in a function definition. it's a placeholder for value that will be provided when the function is called.

// Argument : It's the actual value that is passed to the function when calling it. These value are assigned to the function's parameters.

// Return : The return statement stops the execution of a function and return a value.
// The return statements makes the function reusable you can use the some function in multiple places.

// ----- Function Calling Other Function
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor2(apple, orange) {
  const applePieces = cutFruitPieces(apple);
  const orangePieces = cutFruitPieces(orange);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
  return juice;
}

console.log(fruitProcessor2(2, 4));

// ----- Exercise - Arrow Function
const calcAge4 = (birthYear) => 2024 - birthYear;

const yearsUntilRetirement = (birthYear, firstName) => {
  // const age = 2024 - birthYear;
  const age = calcAge4(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1990, 'Anil'));
console.log(yearsUntilRetirement(1991, 'Manoj'));

// ----- ** Exercise - 1

const clacAverage = (a, b, c) => (a + b + c) / 3;
console.log(clacAverage(3, 4, 5));

let scoreDolphins = clacAverage(44, 23, 71);
let scoreKoalas = clacAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Dolphins win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
};

checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// ------- ** Arrays

// --- Arrays in javascript are data structures used to store multiple values in single variable.

const friends = ['Manoj', 'Gagan', 'Mallesh'];
console.log(friends);

const years = new Array(2000, 2001, 2002);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

const firstName = 'Anil';
// const anil = [firstName, "Kunda", 2024 - 2002, "Developer", friends];
// console.log(anil);

// Exercise
const calcAge5 = function (birthYear) {
  return 2025 - birthYear;
};
const years2 = [1992, 1998, 2002, 2004];

const age1 = calcAge5(years[0]);
const age2 = calcAge5(years[1]);
const age3 = calcAge5(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge5(years[0]),
  calcAge5(years[1]),
  calcAge5(years[years.length - 1]),
];
console.log(ages);

// ----- Basic Arrays Operations (Methods)

const friends2 = ['Manoj', 'Gagan', 'Mallesh'];

// Add Elements
const newLength = friends.push('Vishnu');
console.log(friends);
console.log(newLength);

friends.unshift('Anil');
console.log(friends);

// Remove elements
friends.pop();
const popped = friends.pop();
console.log(popped);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Gagan'));
console.log(friends.indexOf('Mallesh'));
console.log(friends.includes('Gagan'));
console.log(friends.includes('Pradeep'));

// ----- ** Exercise - 2

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);

// ------- ** Objects

// --- Objects in JavaScript are data structures that store collections of key-value pairs.

const manoj = {
  firstName: 'Manoj',
  lastName: 'Gowda',
  age: 2024 - 2003,
  job: 'Developer',
  friends: ['Anil', 'Gagan', 'Mallesh'],
};

console.log(manoj);

// Dot Notation .
console.log(manoj.firstName);
console.log(manoj.lastName);
console.log(manoj.age);

// Bracket Notation []
console.log(manoj['firstName']);
console.log(manoj['lastName']);
console.log(manoj['age']);

const namekey = 'Name';
console.log(manoj['first' + namekey]);
console.log(manoj['last' + namekey]);

console.log(
  `${manoj.firstName} has ${manoj.friends.length} friends, and his best friends in called ${manoj.friends[0]}`
);

// ----- Basic Object Methods

const gagan = {
  firstName: 'Gagan',
  lastName: 'Gowda',
  birthYear: 2003,
  job: 'Developer',
  friends: ['Manoj', 'Anil', 'Mallesh'],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2024 - birthYear;
  // },

  // calcAge: function () {
  //   console.log(this);
  //   return 2024 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} -years old ${
      gagan.job
    }, and he has ${this.hasDriversLicense ? 'a' : 'no'} drive's license.`;
  },
};

console.log(gagan.calcAge());

console.log(gagan.age);
console.log(gagan.age);
console.log(gagan.age);

console.log(gagan.getSummary());

// ----- ** Exercise - 3

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
  );
}

// ------- ** Loops

// Loops in JavaScript are control structures used to repeatedly execute a block of code as long as a specified condition is true.

// ----- Iteration - The for loop

// console.log("Lifting weights, repetition 1");
// console.log("Lifting weights, repetition 2");
// console.log("Lifting weights, repetition 3");
// console.log("Lifting weights, repetition 4");
// console.log("Lifting weights, repetition 5");

// for loop keeps running while condition is true.

for (let i = 1; i <= 10; i++) {
  console.log(`Hello ${i}`);
}

for (let rep = 1; rep <= 5; rep++) {
  console.log(`Lifting weights, repetition ${rep}`);
}

// ----- Looping arrays, breaking and continuing.

const anil = [
  'Anil',
  'Kunda',
  2024 - 2002,
  'Developer',
  ['Manoj', 'Gagan', 'Mallesh'],
  true,
];

const types = [];

for (let i = 0; i < anil.length; i++) {
  // Reding from anil array
  console.log(anil[i], typeof anil[i]);

  // Filling types array
  types[i] = typeof anil[i];
  types.push(typeof anil[i]);
}
console.log(types);

// Continue and Break - Only String
for (let i = 0; i < anil.length; i++) {
  if (typeof anil[i] !== 'string') continue;

  console.log(anil[i], typeof anil[i]);
}

// Break with Number
for (let i = 0; i < anil.length; i++) {
  if (typeof anil[i] === 'number') break;

  console.log(anil[i], typeof anil[i]);
}

// Exercise
const yearsArray = [2000, 2002, 2004, 2006];
const agesArray = [];

for (let i = 0; i < yearsArray.length; i++) {
  agesArray.push(2025 - yearsArray[i]);
}
console.log(agesArray);

// ----- Looping Backwards and loops within loops.

const anil2 = [
  'Anil',
  'Kunda',
  2024 - 2002,
  'Developer',
  ['Manoj', 'Gagan', 'Mallesh'],
];

// 0, 1, ...., 4
// 4, 3, ...., 0

for (let i = anil2.length - 1; i >= 0; i--) {
  console.log(i, anil2[i]);
}

// ----- Loops in Loops

for (let exercise = 1; exercise < 3; exercise++) {
  console.log(`--Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weights repetition ${rep}`);
  }
}

// ----- The While Loop

for (let rep = 1; rep <= 5; rep++) {
  console.log(`Lifting weights repetion ${rep}`);
}

let rep = 1;
while (rep <= 7) {
  console.log(`Lifting weights repetion ${rep}`);
  rep++;
}

// Dice
let dice = Math.trunc(Math.random() * 6 + 1);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}

// ----- ** Exercise - 4

const calcTip2 = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips2 = [];
const totals2 = [];

for (let i = 0; i < bills2.length; i++) {
  const tip = calcTip2(bills2[i]);
  tips2.push(tip);
  totals2.push(tip + bills2[i]);
}

console.log(bills2, tips2, totals2);
