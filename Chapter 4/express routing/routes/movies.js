var MoviesDataBase = {
  "Avengers: Endgame": {
    Title: "Avengers: Endgame",
    Year: 2019,
    Rate: 8.4,
    Raters: 2675,
  },
  "Pirates of the Caribbean: The Curse of the Black Pearl": {
    Title: "Pirates of the Caribbean: The Curse of the Black Pearl",
    Year: 2003,
    Rate: 7.7,
    Raters: 4856,
  },
  "Pulp Fiction": {
    Title: "Pulp Fiction",
    Year: 1994,
    Rate: 8.9,
    Raters: 10,
  },
};
const express = require("express"),
  router = express.Router();
router.get("/", (req, res) => {
  res.send(Object.keys(MoviesDataBase));
});
router.get("/:movieName", (req, res) => {
  var movie = MoviesDataBase[req.params.movieName];
  if (movie) res.send(movie);
  else res.send("There is no movie with this name");
});
module.exports = router;
