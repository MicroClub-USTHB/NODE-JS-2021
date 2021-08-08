const mongoose = require("mongoose");

let rateSchema = new mongoose.Schema({
    game_id: {
        type: mongoose.Types.ObjectId,
        ref: "game",
        required: true,
    },
    rating: {
        required: true,
        type: Number,
        min: 1,
        max: 10,
    },
    comment: {
        default: "",
        type: String,
    },
});
userSchema = new mongoose.Schema({
    email: {
        required: true,
        type: String,
        unique: true,
    },
    username: {
        required: true,
        type: String,
        unique: true,
    },
    first_Name: {
        required: true,
        type: String,
    },
    last_Name: {
        required: true,
        type: String,
    },
    is_Admin: {
        type: Boolean,
        default: false,
    },
    passwords: {
        type: String,
        required: true,
    },
    lists: [{ type: mongoose.Types.ObjectId, ref: "list" }],
    rates: [rateSchema],
});
module.exports = mongoose.model("user", userSchema);
