const express = require("express"),
    { createUser, showUser, updateUser, userToAdmin } = require("../middleware/user");
router = express.Router();
// /users
router.route("/").post(createUser);

router.route("/:id").get(showUser).put(updateUser);
router.route("/:id/toAdmin").put(userToAdmin);
module.exports = router;
