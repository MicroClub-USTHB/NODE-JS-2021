//
const mongoose = require("mongoose"),
    express = require("express"),
    app = express(),
    port = 3000,
    User = require("./models/user"),
    UserRouter = require("./routers/user");
app.get("/", (req, res) => {
    res.send("Hi welcome to our website");
});
app.use(UserRouter);
//http://localhost:3000/Youcef/Madadi/23
app.get("/:firstName/:lastName/:age", async (req, res) => {
    // async not needed in 2nd method
    const { firstName, lastName, age } = req.params;
    //1st method
    //const user = await User.CreateUser(firstName, lastName, Number(age));
    //res.send(user);
    //2nd method
    User.CreateUserCB(firstName, lastName, Number(age), function (error, user) {
        if (error) res.send({ error });
        else res.send(user);
    });
});
mongoose
    .connect(
        "mongodb+srv://Admin:fO38d3hllLZiLvQw@microclub.g2fyh.mongodb.net/Demo?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then((connection) => {
        console.log("Database is connected");
        app.listen(port, () => {
            console.log(`Server started on port: ${port}`);
        });
    })
    .catch((error) => {
        console.error(error);
    });
