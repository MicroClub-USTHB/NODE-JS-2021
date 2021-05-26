class Bottle {
  bottomRadius;
  height;
  capRaduis;
  capacity;
  filledPercentage = 0;

  constructor(bottomRadius, height, capRaduis, capacity) {
    this.bottomRadius = bottomRadius;
    this.height = height;
    this.capRaduis = capRaduis;
    this.capacity = capacity;
  }
}

var b = new Bottle(2.5, 12, 1, 1.5); // kbira
var b2 = new Bottle(1.5, 8, 1, 0.5); // sghira

class Person {
  firstName;
  lastName;
  age;
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  fullName() {
    return this.firstName + " " + this.lastName;
  }
}
var p = new Person("Youcef", "Madadi", 23);
var p2 = new Person("Salim", "Aissi", 21);

class Animal {
  _name;
  numberOfLegs;
  sound;
  foodType;
  #gender;
  constructor(name, nbLegs, sound, gender, foodType = "Unknown") {
    this._name = name;
    this.numberOfLegs = nbLegs;
    this.sound = sound;
    this.foodType = foodType;
    this.#gender = gender;
  }
  makeSound() {
    console.log(`${this._name} : ${this.sound}`);
  }
}
class Carnivore extends Animal {
  constructor(name, nbLegs, sound, gender) {
    super(name, nbLegs, sound, gender, "Meat");
  }
}
class Cat extends Carnivore {
  whiskersColor;
  constructor(name, gender, whiskersColor = "black") {
    super(name, 4, "Meow!!", gender);
    this.whiskersColor = whiskersColor;
  }
  JustUsing() {
    console.log(this._name);
  }
}
class Dog extends Carnivore {
  race;
  constructor(name, gender, race) {
    super(name, 4, "Bark!!", gender);
    this.race = race;
  }
}

var animal1 = new Cat("Ginger", "male", "brown");
console.log(animal1);
