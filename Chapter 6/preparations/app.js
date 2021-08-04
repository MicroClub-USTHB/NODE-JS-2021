const express = require("express"),
    app = express(),
    port = 3000;
app.use(express.urlencoded({ extended: true }));
//app.use(express.json());
//app.use(express.text());

app.post("*", (req, res) => {
    console.log(req.body);
    res.send("done");
});
app.listen(port, () => {
    console.log(`Server started on ${port}`);
});
