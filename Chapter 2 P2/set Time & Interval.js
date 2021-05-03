// run some Instruction after a set of time
setTimeout(() => {
  console.log("5 seconds passed");
}, 5000);

// run some Instruction every a set of time
setInterval(() => {
  console.log("2 seconds passed again");
}, 2000);

//Stop Interval
var interval = setInterval(specialFunction, 2000);
clearInterval(interval);

// how Queue handles Events loop
console.log("Start");
setTimeout(() => {
  console.log("0 seconds passed");
}, 0);
console.log("End");
