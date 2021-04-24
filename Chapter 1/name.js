identity.age = 23;
identity.major = "Computer Vision";
identity.hobbies = ["Gaming", "coding", "doing nothing sometimes"];

//console.log(identity);

//for (var key in identity) console.log(key);

identity.Intrducing = function () {
  console.log(
    `Hi, people usually call me ${this.firstName} ${this.lastName}, i am ${this.age} old, i major in ${this.major}, i got many hobbies such as:`
  );
  //for (var key in this.hobbies) console.log(this.hobbies[key]); // keys = 0 -> length-1
  for (var value of this.hobbies) console.log(value);
};

identity.Intrducing();

identity.grow = function (years) {
  this.age += years;
};
console.log(identity.grow(5));
