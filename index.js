const express = require("express");
const mockData1 = require("./MOCK-DATA-1");
const mockData2 = require("./MOCK-DATA-2");

const app = express();
const indexRoute = require("./routes/index.route");
require("./db/db.connection");

app.use(express.json());
app.use("/api", indexRoute);

app.get('/', async (req, res) => {
    await mockData1.insertMockData1();
    await mockData2.insertMockData2();
    res.status(200).send("Welcome hack2skill");
});

const port = process.env.PORT || 9000;
const server = app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

module.exports = server;