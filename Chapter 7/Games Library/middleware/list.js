const List = require("../models/list");
module.exports = {
    showPublicList: async (req, res) => {
        try {
            const lists = await List.find({ public: true })
                .populate("user", "username")
                .populate("games", "title release_date categories genres media");
            res.render("list", { lists });
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    createList: async (req, res) => {
        try {
            const { name, public } = req.body,
                list = await List.create({ name, public, user: req.user.id });
            res.json(list);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    showSpecificList: async (req, res) => {
        try {
            const id = req.params.id,
                list = await List.findById(id)
                    .populate("user", "username")
                    .populate("games", "title release_date categories genres media");
            res.json(list);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    updateList: async (req, res) => {
        try {
            const id = req.params.id,
                { name, public } = req.body;
            let list = await List.findById(id);
            if (!req.user._id.equals(list.user))
                throw new Error("You aren't allowed to edit this list.");
            list.name = name ? name : list.name;
            list.public = public ? public : list.public;
            await list.save();
            res.json(list);
        } catch (e) {
            res.json({ error: e.message });
        }
    },

    deleteList: async (req, res) => {
        try {
            const id = req.params.id;
            let list = await List.findById(id);
            if (!req.user._id.equals(list.user))
                throw new Error("You aren't allowed to delete this list.");
            list.remove();
            res.json(list);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    addGameToList: async (req, res) => {
        const id = req.params.id,
            { game } = req.body;
        try {
            let list = await List.findById(id);

            if (!req.user._id.equals(list.user))
                throw new Error("You aren't allowed to add a game to this list.");
            list.games.push(game);
            list.save();
            res.json(list);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
};
