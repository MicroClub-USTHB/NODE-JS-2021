if (!process.env.PORT) require("dotenv").config();
const express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    cookieParser = require("cookie-parser"),
    userRouter = require("./routes/user"),
    gameRouter = require("./routes/game"),
    authRouter = require("./routes/auth"),
    jwt = require("jsonwebtoken"),
    listRouter = require("./routes/list"),
    User = require("./models/user"),
    { gamesList } = require("./middleware/game"),
    morgan = require("morgan");
port = process.env.PORT || 3000;

app.use("/public", express.static("public"));
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(async function (req, res, next) {
    res.locals.title = "Home";
    if (req.cookies.token) {
        const token = req.cookies.token;
        try {
            let payload = jwt.verify(token, process.env.SECRET_KEY);
            req.user = await User.findById(payload.id).select({ password: 0 });
        } catch (e) {
            switch (e.constructor) {
                case jwt.TokenExpiredError:
                    req.AuthError = "Your token has been expired";
                case jwt.JsonWebTokenError:
                    req.AuthError = "Your token is unvalid";
            }
        }
    } else req.AuthError = "You don't have the authorization";
    res.locals.user = req.user || null;
    return next();
});
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
app.use(function (err, req, res, next) {
    console.error(err);
    res.status(err.status).json({ error: err.message });
});
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
