const express = require("express"),
  router = express.Router();

router.get("/", (req, res) => {
  res.send("[cat,dog , cow ....]");
});
router.get("/:an", (req, res) => {
  // if animal exist in db
  res.send(`the name of this animal is ${req.params.an} `);
});
module.exports = router;
