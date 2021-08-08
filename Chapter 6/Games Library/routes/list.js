const express = require("express"),
    {
        showPublicList,
        createList,
        showSpecificList,
        updateList,
        deleteList,
        addGameToList,
    } = require("../middleware/list");
router = express.Router();

router.route("/").get(showPublicList).post(createList);

router.route("/:id").get(showSpecificList).put(updateList).delete(deleteList);

router.route("/:id/addGame ").put(addGameToList);
module.exports = router;
