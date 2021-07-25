const express = require("express"),
    app = express(),
    port = 3000;

app.get("/", (req, res) => {
    res.send("Welcome to our website");
});
app.get("/produit", (req, res) => {
    res.send("Welcome to our products list");
});
app.get("/produit/:nb", (req, res) => {
    var nb = req.params.nb;
    res.send("Welcome to our product " + nb);
});
app.get("/produit/:nb/:size", (req, res) => {
    var nb = Number(req.params.nb),
        size = Number(req.params.size);
    res.send("our product price is " + nb * size + "DA");
});
app.listen(port, () => {
    console.log(`Server started on port ` + port);
});
// http://localhost:3000/
