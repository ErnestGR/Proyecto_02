const applicationController = require("../controllers/applicationController");

module.exports = function (app) {
    app.use(applicationController);
}