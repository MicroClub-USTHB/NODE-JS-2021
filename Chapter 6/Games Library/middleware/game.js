const Game = require("../models/game"),
    User = require("../models/user");
module.exports = {
    gamesList: async (req, res, next) => {
        try {
            const games = await Game.find({});
            res.json(games);
        } catch (e) {
            next({ message: e.message, status: 500 });
        }
    },
    createGame: async (req, res) => {
        try {
            const {
                    title,
                    release_date,
                    orignal_Language,
                    developer,
                    publisher,
                    game_engine,
                    platforms,
                    required_age,
                    categories,
                    genres,
                    description,
                    media,
                    requirements,
                    website,
                    support,
                } = req.body,
                game = await Game.create({
                    user: req.user._id,
                    title,
                    release_date,
                    orignal_Language,
                    developer,
                    publisher,
                    game_engine,
                    platforms,
                    required_age,
                    categories,
                    genres,
                    description,
                    media,
                    requirements,
                    website,
                    support,
                });
            res.json(game);
        } catch (e) {
            next({ message: e.message, status: 500 });
        }
    },
    showSpecificGame: async (req, res) => {
        try {
            const id = req.params.id,
                game = await Game.findById(id);
            res.json(game.fixRating());
        } catch (e) {
            next({ message: e.message, status: 500 });
        }
    },
    updateGame: async (req, res, next) => {
        try {
            const id = req.params.id,
                {
                    developer,
                    publisher,
                    platforms,
                    required_age,
                    categories,
                    genres,
                    description,
                    media,
                    requirements,
                    website,
                    support,
                } = req.body;
            let game = await Game.findById(id);
            if (game.user !== req.user._id)
                return next({
                    message: "You aren't allowed to update other people's games.",
                    status: 401,
                });
            game.developer = developer ? developer : game.developer;
            game.publisher = publisher ? publisher : game.publisher;
            game.platforms = platforms ? platforms : game.platforms;
            game.required_age = required_age ? required_age : game.required_age;
            game.categories = categories ? categories : game.categories;
            game.genres = genres ? genres : game.genres;
            game.description = description ? description : game.description;
            if (media) game.media = media;
            game.requirements = requirements ? requirements : game.requirements;
            game.website = website ? website : game.website;
            if (support) game.support = support;
            await game.save();
            res.json(game);
        } catch (e) {
            next({ message: e.message, status: 500 });
        }
    },
    deleteGame: async (req, res) => {
        try {
            const id = req.params.id,
                game = await Game.findById(id);
            if (game.user !== req.user._id)
                throw Error("You aren't allowed to delete other people games.");
            await game.remove();
            res.json({ deleted: "successfully" });
        } catch (e) {
            res.json({ error: e.message });
        }
    },

    rateGame: async (req, res) => {
        try {
            const { rating, comment } = req.body,
                id = req.params.id,
                game = await Game.findById(id);
            req.user.rates.push({
                game_id: id,
                rating,
                comment,
            });
            await req.user.save();
            game.total_Rating += rating;
            game.raters++;
            /// Totatl ratings / number raters
            await game.save();
            res.json(game);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    editRate: async (req, res) => {
        try {
            const { rating, comment } = req.body,
                id = req.params.id,
                user = req.user,
                game = await Game.findById(id);
            let oldRating;
            for (const i in user.rates) {
                if (user.rates[i].game_id == id) {
                    oldRating = user.rates[i].rating;
                    user.rates[i] = { ...user.rates[i], rating, comment };
                    break;
                }
            }
            await user.save();
            game.total_Rating -= oldRating - rating;
            /// Totatl ratings / number raters
            await game.save();
            res.json(game);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
};
