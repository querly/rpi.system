const express = require("express");
const router = express.Router();
const Device = require("../models/devices");

module.exports = function (app) {

    app.get("/", function (req, res) {

        res.render("dashboard", {
            title: "Dashboard",
        });
    });

}
