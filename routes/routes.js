const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    res.render("dashboard", {
        title: "Dashboard",
    });
});

router.get("/rpi", function (req, res) {
    res.render("rpi", {
        title: "RPI",
    });
});


module.exports = router;
