//Bring express into the file
const express = require("express");
const slackSend = require("../slack/sendSlack");
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
    var info = req.body;
    let total = 0;
    for (var i = 1; i <= 10; i++) {
        total += parseInt(info["customRadio" + i]);

    }
    console.log(total);
    let type = "";
    if (total >= 79 && total <= 80) {
        type = "mvp"

        //console.log("mvp");

    } else if (total >= 57 && total <= 78) {
        type = "sql"
        //console.log("SQl");
    } else if (total >= 36 && total <= 56) {
        type = "Mql"
        //console.log("MQL");

    } else if (total <= 36) {
        type = "Nac"
        //console.log("Nac");

    }
if (type === "mvp" || type=== "sql"){
    slackSend({
        text: type,
        username: req.user.firstName,
        name: info.inputName,
        company: info.inputCompany,
        position: info.inputPosition,
        cellphone: info.inputMobile,
        email: info.inputEmail,
        leadOrigin: info.inputHow,
    });
}
  
    models.Lead.create(
        {
            name: info.inputName,
            company: info.inputCompany,
            position: info.inputPosition,
            cellphone: info.inputMobile,
            email: info.inputEmail,
            leadOrigin: info.inputHow,
            type: type
        },
    );

    //tell the client our response
    //as siemple string "hey"
    res.send("Record Succesfully created")
});
//prepare the file to output our router
module.exports = router;