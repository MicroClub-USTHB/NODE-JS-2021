const express = require("express"),
    movieInfo = require("movie-info"),
    FileRoot = { root: __dirname + "/../public/html/" },
    router = express.Router();

// http://localhost:3000/movies
router.get("/", (req, res) => {
    res.sendFile("Movies.html", FileRoot);
});

// http://localhost:3000/movies/Green-Mile
router.get("/:Name", (req, res) => {
    const movieName = req.params.Name;
    movieInfo(movieName).then((data) => {
        res.send(data);
    });
});

module.exports = router;
