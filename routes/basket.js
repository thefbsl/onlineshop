const express = require("express");
const router = express.Router();
let path = require("path");
router
    .route("/")
    .get((req, res) => res.sendFile(path.resolve("basket.html")))
    .post((req, res) => res.send("POST"))
module.exports = router;