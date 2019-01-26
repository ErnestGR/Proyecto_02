//Bring express into the file
const express = require("express");
//ask express to provide us with a new
//instance of it's router module.
const router = express.Router();

//a simple GET route
router.get("/", function (req, res) {
    //tell the client our response
    //as siemple string "hey"
    res.render("welcome.hbs", {
        username: "Ernesto"
    });
});
//prepare the file to output our router
module.exports = router;