const express = require("express"),
    router = express.Router();
var MoviesDataBase = {
    "Pulp Fiction": {
        Title: "Pulp Fiction",
        Year: 1994,
        Rate: 8.9,
        Raters: 10,
    },
};
//http://localhost:3000/movies
router.get("/", (req, res) => {
    res.json(MoviesDataBase);
});
//http://localhost:3000/movies/Pulp%20Fiction
//http://localhost:3000/movies/Avenger
router.get("/:movie", (req, res) => {
    var movie = MoviesDataBase[req.params.movie];
    res.json(movie ? movie : { error: "Movie not found" });
});
module.exports = router;
