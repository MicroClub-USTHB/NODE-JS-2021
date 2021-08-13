const express = require("express"),
    { isLoggedIn, isAdmin } = require("../middleware/auth"),
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

router.route("/").get(gamesList).post(isLoggedIn, isAdmin, createGame);

router.route("/:id").get(showSpecificGame).all(isLoggedIn).put(updateGame).delete(deleteGame);

router.route("/:id/rate").all(isLoggedIn).post(rateGame).put(editRate);

module.exports = router;
