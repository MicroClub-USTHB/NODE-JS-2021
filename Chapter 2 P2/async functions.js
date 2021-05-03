// Async function
async function GetTicket(ticket) {
  if (ticket > 0) return "Here, get a ticket.";
  else throw new Error("No Ticket left");
}
var tickets = 5;
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
  .catch(console.error);
GetTicket(tickets--)
  .then(console.log)
  .catch(console.error); // error

// await Async function
async function GetTickets(ticket) {
  while (ticket > 0) {
    await GetTicket(ticket--);
  }
}
