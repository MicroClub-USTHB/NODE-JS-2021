const express = require("express"),
    User = require("../models/user"),
    Router = express.Router();
// http://localhost:3000/users/
Router.get("/users", async function (req, res) {
    const users = await User.FindUsers();
    res.send(users);
});
// http://localhost:3000/users/id/61018a2f0e66d83350f000c6
Router.get("/users/id/:id", async function (req, res) {
    const users = await User.FindUser(req.params.id);
    res.send(users);
});
// http://localhost:3000/users/SimilareAge/6104273b41997f4750de83af
Router.get("/users/SimilareAge/:id", async function (req, res) {
    const users = await User.FindSimilarAge(req.params.id);
    res.send(users);
});
// http://localhost:3000/users/Deleteid/6101881e736e830924bd1009
Router.get("/users/Deleteid/:id", async function (req, res) {
    const msg = await User.DeleteUser(req.params.id);
    res.send(msg);
});
// http://localhost:3000/users/UpdateId/6104274041997f4750de83b1/50
Router.get("/users/UpdateId/:id/:age", async function (req, res) {
    const user = await User.UpdateUserByID(req.params.id, {
        age: Number(req.params.age),
    });
    res.send(user);
});
// http://localhost:3000/users/firstname/Youcef
Router.get("/users/firstname/:id", async function (req, res) {
    const users = await User.FindUserbyFirstName(req.params.id);
    res.send(users);
});
// http://localhost:3000/users/age/20
Router.get("/users/age/:id", async function (req, res) {
    const users = await User.FindUserbyAge(req.params.id);
    res.send(users);
});
module.exports = Router;
