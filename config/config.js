const express = require("express");
const expresshbs = require("express-handlebars");

global.models = require("../models");

const passport = require("./passport");
const session = require("express-session");

module.exports = function (app) {

    let hbs = expresshbs.create({
        defaultLayout: "main",
        extname: ".hbs"
    })

    app.engine("hbs", hbs.engine);
    app.set("view engine", ".hbs");

    app.use(session(
        {
            secret: "keyboard cat",
            resave: true,
            saveUninitialized: true
        })
    );

    app.use(passport.initialize());
    app.use(passport.session());

    app.use(express.urlencoded({extended: true}));
    app.use(express.json());

    require("./routes")(app);

    app.use(express.static("public"));
}