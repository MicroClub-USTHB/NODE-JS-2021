// Declaring an object
var person = {
  first_name: "Youcef",
  "last name": "Madadi",
  age: 23,
};

// Accessing data in objects
console.log(person.first_name, person["last name"], person["age"]);

// Getting Keys in an object
for (var key in person) {
  console.log(key);
}

// Getting Keys of an object
Object.getOwnPropertyNames(person);
Object.keys(person);

// puting functions in objects (methods)
var person1 = {
  first_name: "Youcef",
  "last name": "Madadi",
  age: 23,
  ToDo: function (Do) {
    return `I'm Going to do : ${Do}`;
  },
};

// this key word to access other members
var person2 = {
  first_name: "Youcef",
  "last name": "Madadi",
  age: 23,
  intreduce: function () {
    console.log(
      `I'm ${this.first_name} ${this["last name"]} and i'm ${this.age} years old`
    );
  },
  shoutOut: () => {
    console.log(this);
  },
};

// Genrate Objects (classes first form)
function Person(first_name, last_name, age) {
  this.first_name = first_name;
  this.last_name = last_name;
  this.age = age;
  this.fullName = function () {
    return this.first_name + " " + this.last_name;
  };
}

var p1 = new Person("Youcef", "Madadi", 23);
var p2 = new Person("Abdelhak", "Ihadjadan", 22);

console.log(p1, p2);
