const express = require("express");
const ejs = require('ejs');
const router = express.Router();
let path = require("path");
router
    .route("/")
    .get((req, res) => res.render(path.resolve("views/aboutus.ejs")))
    .post((req, res) => res.send("POST"))
module.exports = router;