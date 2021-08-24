if (!process.env.PORT) require("dotenv").config();
const express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    morgan = require("morgan"),
    userRouter = require("./routes/user"),
    gameRouter = require("./routes/game"),
    authRouter = require("./routes/auth"),
    listRouter = require("./routes/list"),
    { gamesList } = require("./middleware/game");
port = process.env.PORT || 3000;

app.use("/public", express.static("public"));
app.use(morgan("dev"));
app.use(express.json());
app.set("view engine", "ejs");

app.get("/", gamesList);
app.use("/", authRouter);
app.use("/users", userRouter);
app.use("/list", listRouter);
app.use("/game", gameRouter);
app.use("*", function (req, res, next) {
    // 404 page
    res.json({ error: "this route doesn't exist" });
});
// Errors handler function
/*app.use(function (err, req, res, next) {
    console.error(err);
    res.status(err.status).json({ error: err.message });
});*/
mongoose.set("debug", true); // in devolpment process
mongoose
    .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        dbName: "Games_Library",
    })
    .then((con) => {
        console.log("Database is connected");
        app.listen(port, () => {
            console.log(`Server started on ${port}`);
        });
    })
    .catch((err) => {
        console.error(err);
    });
