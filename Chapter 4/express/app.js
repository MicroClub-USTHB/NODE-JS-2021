const express = require("express"),
  app = express(),
  port = 3000;
var n = 0;
app.get("/", (req, res) => {
  n++;
  res.send(`you requested this page ${n}`);
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
