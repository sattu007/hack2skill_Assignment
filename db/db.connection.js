const mongoose = require("mongoose");
const config = require("config");

//Set up default mongoose connection
const mongoDB = config.get("db");
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log("Connection to DB successful");
});

//Get default connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function(){
    console.log("Connected successfully");
});

module.exports = {db};
