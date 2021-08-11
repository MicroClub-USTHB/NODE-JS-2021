const express = require("express"),
    { isLoggedIn } = require("../middleware/auth"),
    { createUser, showUser, updateUser, userToAdmin } = require("../middleware/user");
router = express.Router();
// /users

router.route("/:id").get(showUser).put(updateUser);
router.route("/:id/toAdmin").put(userToAdmin);
module.exports = router;
