const Game = require("../models/game"),
    path = require("path"),
    multer = require("multer"),
    upload = multer({
        storage: multer.diskStorage({
            destination: function (req, file, cb) {
                // if path.extname(file.originalname) === ".mp4"
                cb(null, "./public/files");
            },
            filename: function (req, file, cb) {
                cb(null, "file" + Date.now() + path.extname(file.originalname));
            },
        }),
    });

module.exports = {
    createGameR: async (req, res, next) => {
        try {
            res.render("createGame");
        } catch (e) {
            next({ message: e.message, status: 500 });
        }
    },
    gamesList: async (req, res, next) => {
        try {
            const gamesPromise = Game.find({}).populate("user", "username");
            if (req.query.sort) gamesPromise.sort(req.query.sort);
            if (req.query.select) gamesPromise.select(req.query.select);
            if (req.query.limit && !Number.isNaN(req.query.limit)) gamesPromise.limit(Number(req.query.limit));
            if (req.query.skip && !Number.isNaN(req.query.skip)) gamesPromise.skip(Number(req.query.skip));
            const games = await gamesPromise;

            res.render("home", { games });
        } catch (e) {
            next({ message: e.message, status: 500 });
        }
    },
    createGame: (req, res, next) => {
        upload.single("media[cover]")(req, res, async (err) => {
            try {
                if (err) throw err;
                console.log(req.body, req.file.filename);
                await Game.create({
                    ...req.body,
                    media: { ...req.body.media, cover: "/public/files/" + req.file.filename },
                    user: req.user._id,
                });
                res.redirect("/game");
            } catch (e) {
                next({ message: e.message, status: 500 });
            }
        });
    },
    showSpecificGame: async (req, res, next) => {
        try {
            const id = req.params.id,
                game = await Game.findById(id).populate("user", "username");

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
            if (!req.user._id.equals(list.user))
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
    deleteGame: async (req, res, next) => {
        try {
            const id = req.params.id,
                game = await Game.findById(id);
            if (!req.user._id.equals(list.user)) throw Error("You aren't allowed to delete other people games.");
            await game.remove();
            res.json({ deleted: "successfully" });
        } catch (e) {
            res.json({ error: e.message });
        }
    },

    rateGame: async (req, res, next) => {
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
    editRate: async (req, res, next) => {
        try {
            const { rating, comment } = req.body,
                id = req.params.id,
                user = req.user,
                game = await Game.findById(id);
            let oldRating;
            for (const i in user.rates) {
                if (user.rates[i].game_id.equals(id)) {
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
