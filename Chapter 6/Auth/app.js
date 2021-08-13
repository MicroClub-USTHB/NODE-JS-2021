require("dotenv").config();
const express = require("express"),
    port = process.env.PORT,
    mongoose = require("mongoose"),
    jwt = require("jsonwebtoken"),
    morgan = require("morgan"),
    User = require("./models/user"),
    app = express();
app.use(morgan("dev"));
app.use(express.json());
app.post("/signup", async (req, res) => {
    const { email, username, first_Name, last_Name, password } = req.body;
    try {
        const user = await User.create({ email, username, first_Name, last_Name, password });
        res.json(user.insertToken());
    } catch (e) {
        res.json({ error: e.message });
    }
});
app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) throw new Error("Couldn't find a user using this username");
        if (!(await user.comparePasswords(password))) throw new Error("Uncorrect password");
        res.json(user.insertToken());
    } catch (e) {
        res.json({ error: e.message });
    }
});
async function isLoggedin(req, res, next) {
    if (!req.headers.authorization) return res.status(400).send("No authorization's t♂ken");
    req.token = req.headers.authorization.split(" ")[1];
    try {
        let decoded = jwt.verify(req.token, process.env.SECRET_KEY);
        req.user = await User.findById(decoded.id).select("-password");
        console.log(req.user);
        next();
    } catch (e) {
        switch (e.constructor) {
            case jwt.TokenExpiredError:
                return res.send("Expired Token");
            case jwt.JsonWebTokenError:
                return res.send("Invalid Token");
        }
    }
}
async function isAdmin(req, res, next) {
    if (!req.user) return res.status(400).send("No authorization's token");
    if (!req.user.isAdmin) return res.status(400).send("user is not an Admin");
    next();
}
app.use("*", isLoggedin, (req, res) => {
    res.send("hii");
});
mongoose
    .connect(
        "mongodb+srv://Admin:fO38d3hllLZiLvQw@microclub.g2fyh.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            dbName: "Games_Library",
        }
    )
    .then((con) => {
        console.log("Database is connected");
        app.listen(port, () => {
            console.log(`Server started on ${port}`);
        });
    })
    .catch((err) => {
        console.error(err);
        process.exit();
    });
