// Spreading arrays on another
var list = [10, 20, 5],
  global_list1 = [5, 46, ...list],
  global_list2 = [...list, 50, 65],
  global_list3 = [5, 46, ...list, 50, 65];
console.log(global_list1, global_list2, global_list3);

// Spread the arguments in function
function max(a, b, c) {
  console.log(c);
  if (a > b && a > c) return a;
  else if (b > a && b > c) return b;
  else return c;
}
console.log(max(...list), max(...global_list1));

// extending objects
var person = { firstName: "Youcef", lastName: "Madadi", age: 23 },
  P1Note = { exams: [16, 12, 14, 10] },
  person2 = { firstName: "Abdelhak", ...person, ...P1Note, age: 24 };
console.log(person2);

//collecting arguments as an array
function sum(...elements) {
  var s = 0;
  for (var val of elements) s += val;
  return s;
}
console.log(sum(10, 20, 30), sum(10, 30));

//spreading array on objects
const arr = [20, 60, 84, 32];
const elm = { a=20, ...arr };
console.log(elm);
