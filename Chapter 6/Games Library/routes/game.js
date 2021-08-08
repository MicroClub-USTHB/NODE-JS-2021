const express = require("express"),
    {
        gamesList,
        createGame,
        showSpecificGame,
        updateGame,
        rateGame,
        deleteGame,
        editRate,
    } = require("../middleware/game");
router = express.Router();

router.route("/").get(gamesList).post(createGame);

router.route("/:id").get(showSpecificGame).put(updateGame).delete(deleteGame);

router.route("/:id/rate").post(rateGame).put(editRate);

module.exports = router;
