const express = require("express"),
    router = express.Router();
//1st method
//router.get("/", function (req, res) {});
//http://localhost:3000/users
router
    .route("/")
    .get((req, res) => {
        res.send({ message: "You get the users" });
    })
    .post((req, res) => {
        console.log(req.body);
        res.send("You created the user");
    });
router.route("/newest").get((req, res) => {
    res.send("You got the newest user");
});
router
    .route("/:id")
    .get((req, res) => {
        res.send({ message: "You get one user" });
    })
    .put((req, res) => {
        res.send("You updated the user");
    })
    .delete((req, res) => {
        res.send("You deleted the user");
    });

module.exports = router;
