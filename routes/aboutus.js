const express = require("express");
const router = express.Router();
let path = require("path");
router
    .route("/")
    .get((req, res) => res.sendFile(path.resolve("aboutus.html")))
    .post((req, res) => res.send("POST"))
module.exports = router;