// Declaring a function
function Max(a, b) {
  if (a > b) return a;
  else return b;
}

// Declaring a function in a variable
var a = prompt("enter a"),
  b = prompt("enter b");
console.log(Max(a, b));

// Declaring a function in a variable
var maxf = function (a, b) {
  if (a > b) return a;
  else return b;
};

// name of a function
console.log(Max.name, maxf.name);

// Sending function as a parameter
function call(Caller, a, b) {
  return Caller(a, b);
}

// not setting any arguments and getting away with it
function Max() {
  var max = -Infinity;
  for (var i = 0; i < arguments.length; i++) {
    max = Math.max(max, arguments[i]);
  }
  return max;
}
