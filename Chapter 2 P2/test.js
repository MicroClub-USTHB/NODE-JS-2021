/*var tickets = 2;
function prom(resolve, reject) {
  setTimeout(function () {
    if (tickets > 0) {
      resolve("How can i help you sir! number " + tickets);
      tickets--;
    } else reject("There is no more tickets");
  }, 5000);
}

var myTicket1 = new Promise(prom);
var myTicket2 = new Promise(prom);
var myTicket3 = new Promise(prom);
myTicket1
  .then((res) => {
    console.log(res);
    const x = 4;
    x = 6;
    return "Youcef";
  })
  .catch((err) => {
    console.error(err);
    return "Abdelhak";
  })
  .then((res) => {
    console.log(res);
  })
  .finally(() => {
    console.log("leaving the bank");
  });
myTicket2.then(console.log).catch(console.error);
myTicket3.then(console.log).catch(console.error);*/

//-------------------------Promis ALL-------------------------------

async function bankTicket(tickets) {
  if (tickets > 0) return "How can i help you sir! number " + tickets;
  else throw new Error("No more tickets left");
}
function errorHandling(error) {
  return "error";
}
var Ticket1 = bankTicket(2).catch(errorHandling);
var Ticket2 = bankTicket(0).catch(errorHandling);
var Ticket3 = bankTicket(1).catch(errorHandling);
Promise.all([Ticket1, Ticket2, Ticket3])
  .then((arr) => {
    for (const elm of arr) console.log(elm);
  })
  .catch(console.error);
