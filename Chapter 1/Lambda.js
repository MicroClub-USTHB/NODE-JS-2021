// Lambda functions
var anon = function (a, b) {
  return a + b;
};
// we could write the above example as:
var anon = (a, b) => a + b;
// or
var anon = (a, b) => {
  return a + b;
};

var max = (a, b) => (a > b ? a : b),
  fact = (n) => (n > 1 ? n * fact(n - 1) : 1);
