### 1. Write a JavaScript program that compare two objects to determine if the first one contains equivalent property values to the second one.

```js
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
```

### 2. Write a JavaScript function to filter false, null, 0 and blank values from an array

```js
var list = [58, "", "#f4a4d7", true, null, false, 0];
list = list.filter((elm) => elm);
console.log(list);
```

### 3. Write a JavaScript function to find the common elements from two arrays

```js
var list1 = [1, 2, 4, 3],
    list2 = [100, 2, 1, 4, 10];

function common(arr1, arr2) {
    return arr1.filter((elm) => arr2.includes(elm));
}
console.log(common(list1, list2));
```
