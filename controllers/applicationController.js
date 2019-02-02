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

router.post("/proyecto",function(req,res){
    let numbers = req.body.numbers;
    let total = numbers.reduce((acc, number) => {
        return acc + number;
    }, 0);
    
    if (total >= 79 && total <= 80){
        return res.send(JSON.stringify(total + "mvp"));
        //console.log("mvp");

    } else if (total >= 57 && total <= 78){
        return res.send(JSON.stringify(total + "sql"));
        //console.log("SQl");
    }else if (total >= 36 && total <= 56){
        return res.send(JSON.stringify(total+ "MQL"));
        //console.log("MQL");

    }else if (total <= 36){
        return res.send(JSON.stringify(total +"Nac"));
        //console.log("Nac");

    }
    
})
//prepare the file to output our router
module.exports = router;