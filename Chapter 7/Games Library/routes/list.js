const express = require("express"),
    { isLoggedIn } = require("../middleware/auth"),
    {
        showPublicList,
        createList,
        showSpecificList,
        updateList,
        deleteList,
        addGameToList,
    } = require("../middleware/list");
router = express.Router();

router.route("/").get(showPublicList).post(isLoggedIn, createList);

router.route("/:id").get(showSpecificList).all(isLoggedIn).put(updateList).delete(deleteList);

router.route("/:id/addGame").put(isLoggedIn, addGameToList);
module.exports = router;
