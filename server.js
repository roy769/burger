//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var path = require("path");

var PORT = process.env.PORT || 3000;
var app = express();

//static content from the "assets" being served
app.use(express.static("assets"));

app.use(bodyParser.urlencoded({extended: false}));

//Override with POST ?_method=DELETE
app.use(methodOverride("_method"));

//grab my handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//import routes for server access
var routes = require('./controllers/burgers_controllers.js')

app.use("/", routes);
console.log("boom");

app.listen(PORT);
