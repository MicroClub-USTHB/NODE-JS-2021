const express = require("express"),
    app = express(),
    port = 3200;

app.get("/", (req, res) => {
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", (req, res) => {
    switch (req.params.animal) {
        case "dog":
            res.send("The dog says 'woof woof'");
            break;
        case "cat":
            res.send("The cat says 'meow meow'");
            break;
        case "cow":
            res.send("The cow says 'Mooo'");
            break;
        default:
            res.send("this animal doesn't exist in our DB");
    }
});

app.get("/repeat/:word/:nb", (req, res) => {
    const nb = Number(req.params.nb);
    var s = "";
    for (var i = 0; i < nb; i++) {
        s += req.params.word + " ";
    }
    res.send(s);
});

app.get("/operate/:op/:x/:y", (req, res) => {
    var { x, y } = req.params;
    const a = Number(x),
        b = Number(y);
    var result;
    switch (req.params.op) {
        case "add":
            result = a + b;
            break;
        case "mul":
            result = a * b;
            break;
        case "div":
            result = a / b;
            break;
        case "sub":
            result = a - b;
            break;
    }
    res.send(result ? result + "" : "this operation doesnt exist");
});

app.listen(port, () => {
    console.log(`Server started on port`);
});
