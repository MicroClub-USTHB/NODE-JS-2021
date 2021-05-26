class Bottle {
  bottomRadius = 2.5;
  height = 12;
  capRaduis = 1;
  neckRaduis = 1.5;
  capacity = 1.5; //Liter
  filledPercentage = 0;
  //methods
  fillBottle(amount) {
    this.filledPercentage += ((amount * 100) / capacity) % 100;
  }
  waterSpill(amount) {
    this.filledPercentage -= ((amount * 100) / capacity) % 100;
  }
}

class Bottle {
  bottomRadius;
  height;
  capRaduis;
  neckRaduis;
  capacity;
  filledPercentage;
  //constructor
  constructor() {
    this.bottomRadius = 2.5;
    this.height = 12;
    this.capRaduis = 1;
    this.neckRaduis = 1.5;
    this.capacity = 1.5;
    this.filledPercentage = 0;
  }
  //the rest of the methods
}
