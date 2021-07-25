const express = require("express"),
    app = express(),
    moviesRouter = require("./routes/movies"),
    port = 3000;
app.use("/movies", moviesRouter);
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
