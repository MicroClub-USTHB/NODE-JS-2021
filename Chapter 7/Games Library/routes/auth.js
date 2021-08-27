const express = require("express"),
    { createUser, logUser } = require("../middleware/user"),
    { logPage, logOut, signedUp } = require("../middleware/auth");
router = express.Router();
router.route("/signup").get(signedUp).post(createUser);
router.route("/login").get(logPage).post(logUser);
router.route("/logout").get(logOut);
module.exports = router;
