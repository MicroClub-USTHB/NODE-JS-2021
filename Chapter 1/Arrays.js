var table = [5, 7, 8, 98, 58, 354, "a text"];
console.log(table[0]);
console.log(table[1]);
console.log(table[2]);

table[3] = "Another value";

var i = 0;
while (table[i] !== undefined) {
  console.log(table[i]);
  i++;
}
