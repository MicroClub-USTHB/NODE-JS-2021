var Trainer = "Youcef",
  Assistant = "Abdelhak",
  CoAssistant = "Salim";

var Bounadem = "Youcef";

if (Bounadem === Trainer) {
  console.log("You can Teach, go on");
} else if (Bounadem === Assistant) {
  console.log("Well he gotta take care of the trainer");
} else if (CoAssistant === Bounadem) {
  console.log("You can just sell della3");
} else {
  console.log("You are a trainee");
}

switch (Bounadem) {
  case Trainer:
    console.log("You can Teach go on");
    break;
  case Assistant:
    console.log("Well he gotta take care of the trainer");
    break;
  case CoAssistant:
    console.log("You can just sell della3");
    break;
  default:
    console.log("You are a trainee");
    break;
}

// loop 1
var Trainee = 1;
while (Trainee < 30) {
  console.log(`Trainee number ${Trainee}`);
  Trainee++;
}
Trainee = 1;
// loop 2
do {
  Trainee++;
  console.log(`Trainee number ${Trainee}`);
} while (Trainee < 30);

// loop 3
for (var i = 0; i < Trainee; i++) {
  console.log(`Trainee number ${i}`);
}
// loop 4
for (var i = Trainee; i > 0; i--) {
  console.log(`Trainee number ${i}`);
}
