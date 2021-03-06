const mongoose = require("mongoose");

let specSChema = new mongoose.Schema({
        Processor: String,
        Memory: String, // Number as MB
        Graphics: String,
        Storage: String, // Number as MB
    }),
    requirementSchema = new mongoose.Schema({
        os: {
            required: true,
            type: String,
        },
        min: specSChema,
        rec: {
            type: specSChema,
            required: true,
        },
    }),
    gameSchema = new mongoose.Schema(
        {
            user: {
                type: mongoose.Types.ObjectId,
                ref: "user",
                required: true,
            },
            title: {
                required: true,
                type: String,
            },
            release_date: {
                required: true,
                type: Date,
            },
            orignal_Language: {
                default: "EN",
                type: String,
                enum: ["EN", "JP", "FR", "AR", "DU"],
            },
            developer: {
                required: true,
                type: String,
            },
            publisher: {
                required: true,
                type: String,
            },
            game_engine: String,
            platforms: [String], // example : windows , xbox ...
            required_age: {
                required: true, //default : 0
                type: Number,
            },
            categories: [String],
            genres: [String],
            description: {
                required: true,
                type: String,
                minLength: 50,
            },
            media: {
                cover: {
                    required: true,
                    type: String,
                },
                trailers: [String],
                screenshots: [String],
            },
            requirements: [requirementSchema],
            website: String,
            support: {
                url: String,
                email: String,
            },
            total_Rating: { type: Number, default: 0 },
            raters: { type: Number, default: 0 },
        },
        { timestamps: true }
    );
gameSchema.methods.fixRating = function () {
    let obj = this.toObject();
    obj.rating = obj.total_Rating / obj.raters;
    return obj;
};
module.exports = mongoose.model("game", gameSchema);
