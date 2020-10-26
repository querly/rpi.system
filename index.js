const express = require("express");
const hbs = require("express-handlebars");
const app = express();
const bodyParser = require("body-parser");
const routes = require('./routes/routes');
const config = require("./config/config");
const methodOverride = require('method-override');
const helpers = require('handlebars-helpers')();
const api = require("./api/api");
const DB = config.database;

/*View engine*/
app.engine(
    "handlebars",
    hbs({
        defaultLayout: "main",
        helpers: {
            dateFormat: require('handlebars-dateformat'),
        },
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true,
        },

    })
);

app.set("view engine", "handlebars");

//DB Config
mongoose.connect(`mongodb+srv://${DB.USER}:${DB.PASSWORD}@cluster0.tr3d2.mongodb.net/${DB.DBNAME}?retryWrites=true&w=majority`,
    function (error) {
        error ? console.log(error) : console.log("Successfully connected to database...");
    });

//Body-parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//method-override
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
    }
}))

app.use("/api", api);
app.use("/", routes);

app.use(express.static("public"));

/*Run Server*/
app.listen(8787, function () {
    console.log("Server is running at 192.168.2.63:8787...");
})