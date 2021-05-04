// Async function
async function GetTicket(ticket) {
  if (ticket > 0) return "Here, get a ticket " + ticket;
  else throw new Error("No Ticket left");
}
var tickets = 5;
/*GetTicket(tickets--)
  .then(console.log)
  .catch(console.error);
GetTicket(tickets--)
  .then(console.log)
  .catch(console.error);
GetTicket(tickets--)
  .then(console.log)
  .catch(console.error);
GetTicket(tickets--)
  .then(console.log)
  .catch(console.error);
GetTicket(tickets--)
  .then(console.log)
  .catch(console.error);
GetTicket(tickets--)
  .then(console.log)
  .catch(console.error); // error
*/
// await Async function

async function GetTickets(ticket) {
  Tickets = [];
  while (ticket > -1) {
    try {
      Tickets.push(await GetTicket(ticket--));
    } catch (e) {
      console.error(e);
    }
    /*GetTicket(ticket--).then(elm=>{
      Tickets.push(elm);
    })  */
  }
  return Tickets;
}
GetTickets(tickets).then((Tickets) => {
  console.log(Tickets);
});
function Rate(rate) {
  var movieUpdate = (movie) => {
    //update rate
    return updatedMovie;
  };
  return movieUpdate;
}
Promise.then(movieUpdate);
