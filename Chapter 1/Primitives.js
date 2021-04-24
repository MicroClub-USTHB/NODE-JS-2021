// Arithmetic operations
var x = 5 + 6; // addition
var y = 7 - 3; // minus
var z = 4 * 4; // multiplication
var a = 7 / 2; // division
var b = 4 ** 2; // power
var d = b % 2; // Modulus
a++; // Increment
b--; // Decrement

console.log(x, y, z, a, b, d);

// String manipulation
var name = "Youcef";
var name2 = "Anis";
var text = "Hello new user : " + name;
var message = `From ${name2} : ${text}`; //Templete litteral

console.log(text);
console.log(message);

// Logical operations
var c = x >= y, // ( x > y )
  d = y <= z, // ( y < z )
  e = z == x,
  f = 5 == "5", //loosly equality comparesion // doesnt verfiy type
  g = 5 === "5", // verfiy type before comparing
  h = 5 !== "5",
  i = name == text,
  j = !g,
  k = c && e,
  l = c || e;

console.log(c, d, e, f, g, h, i, j, k, l);
