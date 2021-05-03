// callback
function Sum(arr, func) {
  var sum = 0;
  for (let i = 0; i < arr.length; i++) sum += func(arr[i], i, arr);
  return sum;
}
function fact(n) {
  return n < 2 ? 1 : fact(n - 1) * n;
}
var res = Sum([5, 4, 3, 5], fact);
console.log(res);

// direct callback
Sum([10, 60, -50, -2], function (elm) {
  return elm < 0 ? -elm : elm;
});

// direct callback
Sum([10, 60, -50, -2], (elm) => (elm < 0 ? -elm : elm));

// methods that uses callbacks
// changing array content
[10, 84, -35, 21, -12].map(function (elm, i, arr) {
  return elm * i;
});
// looping over array
[10, 84, -35, 21, -12].forEach(function (elm, i, arr) {
  console.log(elm, i, arr);
});
// sum using reduce
[10, 84, -35, 21, -12].reduce(function (acc, elm, i, arr) {
  return acc + Math.abs(elm);
}, 0);
// filter an array
[10, 84, -35, 21, -12].filter(function (elm, i, arr) {
  return elm < 0;
});
// confirm array using every
[10, 84, -35, 21, -12].every(function (elm, i, arr) {
  return elm > 0;
});
// confirm part of array using some
[10, 84, -35, 21, -12].some(function (elm, i, arr) {
  return elm > 0;
});
// Sorting an array
[10, 84, -35, 21, -12].sort(function (a, b) {
  if (a < b) return -1;
  // a is less than b by some ordering criterion
  else if (a == b) return 0;
  // a must be equal to b
  else return 1; // a is greater than b by the ordering criterion
});

//chain methods
[10, 84, -35, 21, -12]
  .map(function (elm, i, arr) {
    return elm * i;
  })
  .reduce(function (acc, elm, i, arr) {
    return acc + Math.abs(elm);
  }, 0);
