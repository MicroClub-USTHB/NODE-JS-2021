const user = require("../models/user");
module.exports = {
    createUser: async (req, res) => {
        const { email, username, first_Name, last_Name, passwords } = req.body;
        try {
            const u = await user.create({ email, username, first_Name, last_Name, passwords });
            res.json(u);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    showUser: async (req, res) => {
        const id = req.params.id;
        try {
            const U = await user.findById(id).select({ passwords: 0 }); //.select( "-passwords" );
            res.json(U);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    updateUser: async (req, res) => {
        const { first_Name, last_Name, passwords } = req.body,
            id = req.params.id;
        try {
            const u = await user.findById(id);
            u.first_Name = first_Name ? first_Name : u.first_Name;
            u.last_Name = last_Name ? last_Name : u.last_Name;
            u.passwords = passwords ? passwords : u.passwords;
            await u.save();
            res.send(u);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
    userToAdmin: async (req, res) => {
        const id = req.params.id;
        try {
            const u = await user.findById(id);
            u.is_Admin = true;
            await u.save();
            // add published games
            res.send(u);
        } catch (e) {
            res.json({ error: e.message });
        }
    },
};
