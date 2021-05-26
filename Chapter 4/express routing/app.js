const express = require("express"),
  app = express(),
  port = 3000,
  animalsRoute = require("./routes/animal"),
  moviesRoute = require("./routes/movies");

app.get("/", (req, res) => {
  res.send("Welcome to our Website");
});

app.use("/animals", animalsRoute);
app.use("/movies", moviesRoute);

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
