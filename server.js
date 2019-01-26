require("dotenv").config();
//Bring the express package into this file and
//put it inside a variabloe named express
const express = require("express");
//the port for our express server.
const PORT = 8080;
//create a new express server instance and put
//it inside a variable named app.
const app = express();

require("./config/config.js")(app);

models.sequelize.sync().then(function () {
    console.log("\nDatabase ready \n");
    //Execute the listen method of the express server
    //instance, pass it the port we want for our server
    //and a callback function that should let us know
    //the server was able to start properly
    app.listen(PORT, function () {
        console.log("server is listening on port", PORT);
        console.log(process.env.DATABASE_NAME);
    });
});