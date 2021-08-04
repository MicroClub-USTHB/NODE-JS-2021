const express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    port = 3000;
mongoose
    .connect(
        "mongodb+srv://Admin:fO38d3hllLZiLvQw@microclub.g2fyh.mongodb.net/?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true, dbName: "Games_Library" }
    )
    .then((con) => {
        console.log("Database is connected");
        app.listen(port, () => {
            console.log(`Server started on ${port}`);
        });
    })
    .catch((err) => {
        console.error(err);
    });
