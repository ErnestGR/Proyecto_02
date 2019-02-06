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

    let numbers = req.body.numbers;
    let total = numbers.reduce((acc, number) => {
        return acc + number;
    }, 0);
    
    if (total >= 79 && total <= 80){
        var type = "mvp"
        db.lead.update (
            {type: type},
            {
            where:{
                id: req.body.id
            }
        });
        return res.send(JSON.stringify(total + type));
        //console.log("mvp");

    } else if (total >= 57 && total <= 78){
        var type = "sql"
        db.lead.update (
            {type: type},
            {
            where:{
                id: req.body.id
            }
        });
        return res.send(JSON.stringify(total + type));
        //console.log("SQl");
    }else if (total >= 36 && total <= 56){
        var type = "Mql"
        db.lead.update (
            {type: type},
            {
            where:{
                id: req.body.id
            }
        });
        return res.send(JSON.stringify(total+ type));
        //console.log("MQL");

    }else if (total <= 36){
        var type = "Nac"
        db.lead.update (
            {type: type},
            {
            where:{
                id: req.body.id
            }
        });
        return res.send(JSON.stringify(total +type));
        //console.log("Nac");

    }

    //tell the client our response
    //as siemple string "hey"
    res.render("welcome.hbs", {
        username: req.user.firstName
    });
});

//prepare the file to output our router
module.exports = router;