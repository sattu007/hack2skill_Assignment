const indexRoute = require("express").Router();
const dataRoute = require("./data.route");

indexRoute.use((req, res, next) => {
    console.log(`${new Date().toISOString()} => ${"Assignment"}`);
    next();
});

indexRoute.use("/combinedata", dataRoute);

module.exports = indexRoute;