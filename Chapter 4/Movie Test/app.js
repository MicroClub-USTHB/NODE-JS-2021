const movieInfo = require("movie-info"),
    express = require("express"),
    app = express(),
    port = 3001;
app.get("/", async (req, res) => {
    let movie = null;
    try {
        movie = await movieInfo("Avatar");
    } catch (e) {
        res.status(500);
        movie = { error: "Movie not found" };
    }
    res.send(movie);
});
app.get("/movie/:name", async (req, res) => {
    let name = req.params.name;
    let movie = null;
    try {
        movie = await movieInfo(name);
    } catch (e) {
        res.status(500);
        movie = { error: "Movie not found" };
    }
    res.send(movie);
});
app.listen(port, () => {
    console.log(`Server started on port : ${port}`);
});
