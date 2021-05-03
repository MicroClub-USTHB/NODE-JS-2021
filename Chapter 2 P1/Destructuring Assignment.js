// Array destructuring
const color = [200, 54, 96];
const [r, g, b] = color;
console.log(r, g, b);

// Assignment separate from declaration
var a, b;
[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

// Default values
var a, b;
[a = 5, b = 7] = [1];
console.log(a); // 1
console.log(b); // 7

// Ignoring some returned values
const [a, , b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // 3

// Swapping variables
var a = 1,
  b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

const arr = [1, 2, 3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1,3,2]


// Assigning the rest of an array to a variable
const [a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]

// Object destructuring
const user = {
  id: 42,
  is_verified: true,
};
const { id, is_verified } = user;
console.log(id, is_verified);

// Assigning to new variable names
const { userId: id, is_verified: v } = { userId: 42, is_verified: true };
console.log(id, v);

// default value
const { a = 5, b = 6 } = { a: 1 };
console.log(a, b);

// Unpacking fields from objects passed as a function parameter
function shoutOutFor({ first, last }) {
  console.log(
    `We would like for ${first} ${last} to come to pick up his/her package`
  );
}
var person = { first: "Youcef", last: "Madadi", age: 23 };
shoutOutFor(person);

// Assigning the rest of an object to a variable
const { age, ...names } = person;
console.log(names, age);
