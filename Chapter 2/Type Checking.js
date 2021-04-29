//Type checking
var person = {
  fullName: "Youcef Madadi",
  age: 23,
  trainer: true,
  assistant: null,
};
console.log(typeof person); // object
console.log(typeof person.fullName); // string
console.log(typeof person.age); // number
console.log(typeof person.trainer); // boolean
console.log(typeof person.assistant); // object
console.log(typeof person.manager); // undefined

// casting types
// number to strings
String(person.age);
person.age + "";
// string to number
Number("200"); // 200
Number("40d"); // NaN
// boolean to string
String(person.trainer);
person.trainer + "";
// string to boolean
"true" == true;
"false" == false;
//number to boolean
Boolean(n); // true if n !== 0
// boolean to number
Number(false); // 0
Number(true); // 1

// checking if it is a number
Number.isNaN("20"); //false
Number.isNaN("youcef"); // true
Number.isInteger(20); // true
Number.isInteger(20.5); // false
Number.isFinite(Infinity); // false
Number.isFinite(50); // true

// checking if it is an array
Array.isArray([5, 578, 65]); // true
