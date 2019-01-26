const expresshbs = require("express-handlebars");

global.models = require("../models");

module.exports = function (app) {

    let hbs = expresshbs.create({
        defaultLayout: "main",
        extname: ".hbs"
    })

    app.engine("hbs", hbs.engine);
    app.set("view engine", ".hbs");

    require("./routes")(app);

}