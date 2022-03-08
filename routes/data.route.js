const dataRoute = require("express").Router();
const dataController = require("../controllers/data.controller");

dataRoute.route("/userdata").get(dataController.joinData);

module.exports = dataRoute;