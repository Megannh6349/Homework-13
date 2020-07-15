var express = require("express");
var PORT = process.env.PORT || 3000;
var app = express();
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var exphbs = require("express-handlebars"); 

// connect to handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// app.use(express.bodyParser());

var routes = require("./controllers/burgers_controller");
app.use(routes);
app.listen(PORT, function() {console.log("listening on PORT: %S", PORT);
});




