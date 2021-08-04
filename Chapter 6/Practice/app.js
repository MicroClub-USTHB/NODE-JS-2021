const express = require("express"),
    app = express(),
    //  morgan = require("morgan"),
    usersRouter = require("./routes/users"),
    port = 3000;
// body-parser
//app.use(morgan("combined"));
app.use(express.json());
app.use("/users", usersRouter);
app.listen(port, () => {
    console.log(`Server started on port`);
});
