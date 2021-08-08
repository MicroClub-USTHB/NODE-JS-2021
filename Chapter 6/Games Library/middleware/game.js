const Game = require("../models/game"),
    User = require("../models/user");
module.exports = {
    gamesList: async (req, res) => {
        try {
            const games = await Game.find({});
            res.json(games);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    createGame: async (req, res) => {
        try {
            const {
                    user,
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
                    user,
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
            res.json({ error: e.message });
        }
    },
    showSpecificGame: async (req, res) => {
        try {
            const id = req.params.id,
                game = await Game.findById(id);
            res.json(game.fixRating());
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    updateGame: async (req, res) => {
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
            res.json({ error: e.message });
        }
    },
    deleteGame: async (req, res) => {
        try {
            const id = req.params.id,
                game = await Game.findById(id);
            await game.remove();
            res.json({ deleted: "successfully" });
        } catch (e) {
            res.json({ error: e.message });
        }
    },

    rateGame: async (req, res) => {
        try {
            const { rater, rating, comment } = req.body,
                id = req.params.id,
                [user, game] = await Promise.all([User.findById(rater), Game.findById(id)]);
            user.rates.push({
                game_id: id,
                rating,
                comment,
            });
            await user.save();
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
            const { rater, rating, comment } = req.body,
                id = req.params.id,
                [user, game] = await Promise.all([User.findById(rater), Game.findById(id)]);
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
