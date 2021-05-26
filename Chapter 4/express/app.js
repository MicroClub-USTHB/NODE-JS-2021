const express = require("express"),
  app = express(),
  port = 3000;
var n = 0;
app.get("/", (req, res) => {
  n++;
  res.send(
    `<a href="https://classroom.google.com/c/MzQyNDM1MzczMjA4?cjc=uwaisxv">Classroom invite</a>`
  );
  //res.json({ rebot: "Meca" });
});
app.get("/animal", (req, res) => {
  res.send(`you requested an animal page `);
});
app.get("/animal/:animal", (req, res) => {
  const { animal } = req.params;
  res.send(`you are looking for a ${animal} in our website`);
});
app.get("*", (req, res) => {
  res.send(`404 Page not found`);
});
app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
