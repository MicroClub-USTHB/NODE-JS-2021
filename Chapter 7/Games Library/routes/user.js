const express = require("express"),
    { isLoggedIn, isAdmin } = require("../middleware/auth"),
    { createUser, showUser, updateUser, userToAdmin } = require("../middleware/user");
router = express.Router();
// /users

router.route("/:id").get(showUser).put(isLoggedIn, updateUser);
router.route("/:id/toAdmin").put(isLoggedIn, isAdmin, userToAdmin);
module.exports = router;
