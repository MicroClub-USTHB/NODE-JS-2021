var list = [58, "", "#f4a4d7", true, null, false, 0];
list = list.filter((elm) => elm);
console.log(list);
//
function compare(obj1, obj2) {
  var ob1to2 = Object.keys(obj1).every((key) => {
    return obj2[key] === obj1[key];
  });
  var ob2to1 = Object.keys(obj2).every((key) => {
    return obj2[key] === obj1[key];
  });
  return ob1to2 && ob2to1;
}

var person1 = {
    name: "Youcef",
    last: "Madadi",
    age: 23,
  },
  person2 = {
    name: "Youcef",
    last: "Madadi",
    age: 24,
  };
console.log(compare(person1, person2));

var list1 = [1, 2, 4, 3],
  list2 = [100, 2, 1, 4, 10];

function common(arr1, arr2) {
  return arr1.filter((elm) => arr2.includes(elm));
}
console.log(common(list1, list2));
