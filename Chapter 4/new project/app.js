const express = require("express"),
    app = express(),
    MoviesRouter = require("./Routers/movies"),
    FileRoot = { root: __dirname + "/public/html/" },
    morgan = require("morgan"),
    port = 3000; // over 1400

app.use("/public", express.static(__dirname + "/public/"));
/*// debuger
app.use("*", function (req, res, next) {
    const timeStart = Date.now();
    next();
    console.log(`${req.method} : (${res.statusCode}) ${req.baseUrl}  ${Date.now() - timeStart}ms`);
});*/
app.use(morgan("dev"));
// http://localhost:3000/
app.get("/", (req, res) => {
    // response
    //res.sendFile(__dirname + "/public/html/home.html");
    res.sendFile("home.html", FileRoot);
});

app.use("/movies", MoviesRouter);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
