const express = require("express"),
    app = express(),
    port = 3000,
    option = {
        root: __dirname + "/html",
    };
app.use("/public", express.static("public"));
//http://localhost:3000/
app.get("/", function (req, res) {
    res.sendFile("index.html", option);
});
//http://localhost:3000/products
app.get("/products", function (req, res) {
    res.send(
        `<ul>
            products list
            <li>produit 1</li>
            <li>produit 2</li>
        </ul>`
    );
});
//http://localhost:3000/products/5465
app.get("/products/:id/", function (req, res) {
    const id = req.params.id;
    res.send("product id : " + id);
});
//http://localhost:3000/products/5465/2
app.get("/products/:id/:size", function (req, res) {
    const id = Number(req.params.id);
    const size = Number(req.params.size);
    res.send("products price : " + id * size);
});
app.listen(port, () => {
    console.log(`Server started on port ` + port);
});
