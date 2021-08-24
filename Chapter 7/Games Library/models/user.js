const mongoose = require("mongoose"),
    jwt = require("jsonwebtoken"),
    bcrypt = require("bcrypt");

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
    password: {
        type: String,
        required: true,
    },
    lists: [{ type: mongoose.Types.ObjectId, ref: "list" }],
    rates: [rateSchema],
});

userSchema.pre("save", async function (next) {
    try {
        if (this.isModified("password")) this.password = await bcrypt.hash(this.password, 13);
        next();
    } catch (e) {
        next(e);
    }
});
userSchema.methods.comparePasswords = async function (passwordSent, next) {
    try {
        return await bcrypt.compare(passwordSent, this.password);
    } catch (e) {
        next(e);
    }
};
userSchema.methods.insertToken = function () {
    let user = this.toObject();
    delete user.password;
    user.token = jwt.sign(
        {
            id: user._id,
            first_Name: user.first_Name,
        },
        process.env.SECRET_KEY,
        {
            expiresIn: "100h",
        }
    );
    return user;
};
module.exports = mongoose.model("user", userSchema);
