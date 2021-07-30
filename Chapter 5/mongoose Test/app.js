//
const mongoose = require("mongoose"),
    express = require("express"),
    app = express(),
    port = 3000,
    User = require("./models/user");
app.get("/", (req, res) => {
    res.send("Hi welcome to our website");
});
// http://localhost:3000/users/
app.get("/users", async function (req, res) {
    const users = await User.FindUsers();
    res.send(users);
});
// http://localhost:3000/users/id/61018a2f0e66d83350f000c6
app.get("/users/id/:id", async function (req, res) {
    const users = await User.FindUser(req.params.id);
    res.send(users);
});
// http://localhost:3000/users/Deleteid/6101881e736e830924bd1009
app.get("/users/Deleteid/:id", async function (req, res) {
    const msg = await User.DeleteUser(req.params.id);
    res.send(msg);
});
// http://localhost:3000/users/UpdateId/61018a2f0e66d83350f000c6/25
app.get("/users/UpdateId/:id/:age", async function (req, res) {
    const user = await User.UpdateUserByID(req.params.id, {
        age: Number(req.params.age),
    });
    res.send(user);
});
// http://localhost:3000/users/firstname/Youcef
app.get("/users/firstname/:id", async function (req, res) {
    const users = await User.FindUserbyFirstName(req.params.id);
    res.send(users);
});
// http://localhost:3000/users/age/20
app.get("/users/age/:id", async function (req, res) {
    const users = await User.FindUserbyAge(req.params.id);
    res.send(users);
});
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
