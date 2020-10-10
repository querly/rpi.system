const express = require("express");
const hbs = require("express-handlebars");
const app = express();
const routes = require('./routes/routes')(app);

app.engine("handlebars", hbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");


app.use(express.static("public"));

app.listen (8787, function () {
    console.log("Server is running at 192.168.2.63:8787")
})