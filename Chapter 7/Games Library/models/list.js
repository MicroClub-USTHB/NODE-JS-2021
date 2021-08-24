const mongoose = require("mongoose");

let listSchema = new mongoose.Schema({
    name: { type: String, required: true },
    public: { type: Boolean, default: false },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "user",
    },
    games: [
        {
            type: mongoose.Types.ObjectId,
            ref: "game",
        },
    ],
});
module.exports = mongoose.model("list", listSchema);
