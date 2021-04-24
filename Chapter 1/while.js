var Trainer = "Youcef",
  Assistant = "Abdelhak",
  CoAssistant = "Salim";

var Bounadem = "Youcef";

while (Bounadem !== CoAssistant) {
  console.log(Bounadem);
  if (Bounadem === Trainer) {
    Bounadem = Assistant;
  } else if (Bounadem === Assistant) {
    Bounadem = CoAssistant;
  }
}
