// creating a promise
const myTicket = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("how can we serve you Sir ?");
  }, 300);
});
console.log(myTicket);

// Handling promise
const nextInteraction = myTicket.then((response) => {
  console.log(response);
});

// chaining then
nextInteraction.then(() => {
  console.log("I would like to transfer some money 🎟 !");
});

// Rejecting a promise
var tickets = 10;
const myTicket1 = new Promise((resolve, reject) => {
  if (tickets > 0) {
    setTimeout(() => {
      resolve("how can we serve you Sir ?");
    }, 300);
  } else reject("No more Tickets");
});

// Catching A rejection
const myTicket2 = myTicket1
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
// Final handling of a promise
myTicket2.finally(() => {
  console.log("We are going out of the bank");
});
