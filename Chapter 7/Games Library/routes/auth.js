const express = require("express"),
    { createUser, logUser } = require("../middleware/user");
router = express.Router();
router.route("/signup").post(createUser);
router.route("/login").post(logUser);
module.exports = router;
