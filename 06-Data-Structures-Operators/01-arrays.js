'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// ----- ** Destructuring Arrays
const [first, second] = restaurant.categories;
console.log(first, second);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// ----- Switching variables
[main, secondary] = [secondary, main];
console.log(main, secondary);

// ----- Receive 2 return values from a function
console.log(restaurant.order(1, 0));

const [starter, mainMenu] = restaurant.order(1, 0);
console.log(starter, mainMenu);

// ----- Nested destructuring
const nested = [2, 4, [5, 6]];

const [a, , b] = nested;
console.log(a, b);

const [c, , [d, e]] = nested;
console.log(c, d, e);

// ----- Default values
const [i = 1, j = 1, k = 1] = [2, 4];
console.log(i, j, k);

const [x, y, z] = [2, 4];
console.log(x, y, z);
