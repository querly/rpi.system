const express = require("express");
const app = express();

module.exports = function (app){

    app.get("/", function (req, res) {
        res.render("dashboard", {
            title: "Dashboard"
        });
    });

}
