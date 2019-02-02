//Bring express into the file
const express = require("express");
//ask express to provide us with a new
//instance of it's router module.
const router = express.Router();
const isAuthenticated = require("../middlewares/isAuthenticated");
//a simple GET route
router.get("/", isAuthenticated, function (req, res) {
    //tell the client our response
    //as siemple string "hey"
    res.render("welcome.hbs", {
        username: req.user.firstName
    });
});
router.post("/", isAuthenticated, function (req, res) {
    console.log(req.body);
    //tell the client our response
    //as siemple string "hey"
    res.render("welcome.hbs", {
        username: req.user.firstName
    });
});
//prepare the file to output our router
module.exports = router;