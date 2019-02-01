const applicationController = require("../controllers/applicationController");
const authenticationController = require("../controllers/authenticationController");

module.exports = function (app) {
    app.use(applicationController);
    app.use(authenticationController);
}