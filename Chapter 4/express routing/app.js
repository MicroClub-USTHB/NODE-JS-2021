const express = require("express"),
    app = express(),
    port = 3000,
    logger = require("morgan"),
    animalsRoute = require("./routes/animal"),
    moviesRoute = require("./routes/movies");

app.use(function (req, res, next) {
    const t = Date.now();
    next();
    console.log(
        req.method + "/ " + res.statusCode + " " + (Date.now() - t) + "ms"
    );
});

app.get("/", (req, res) => {
    res.sendFile("index.html", { root: __dirname + "/views" });
});

app.use("/animals", animalsRoute);
app.use("/movies", moviesRoute);

app.listen(port, () => console.log(`Server started on ${port}`));
