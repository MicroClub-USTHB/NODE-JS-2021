const { Schema, model } = require("mongoose"),
    jwt = require("jsonwebtoken"),
    bcrypt = require("bcrypt");
let userSchema = new Schema({
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
    token: { type: String },
});
userSchema.pre("save", async function (next) {
    try {
        if (this.isModified("password")) this.password = await bcrypt.hash(this.password, 10);
        next();
    } catch (e) {
        next(e);
    }
});
userSchema.methods.comparePasswords = async function (candidatePass, next) {
    try {
        return await bcrypt.compare(candidatePass, this.password);
    } catch (e) {
        next(e);
    }
};
userSchema.methods.insertToken = function (token) {
    let user = this.toObject();
    delete user.password;
    user.token = jwt.sign({ id: user._id, username: user.username }, process.env.SECRET_KEY, {
        expiresIn: "200h",
    });
    return user;
};
module.exports = model("user", userSchema);
