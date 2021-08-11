const List = require("../models/list");
module.exports = {
    showPublicList: async (req, res) => {
        try {
            const lists = await List.find({ public: true });
            res.json(lists);
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
                list = await List.findById(id);
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
            list.remove();
            res.json(list);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    addGameToList: async (req, res) => {},
};
